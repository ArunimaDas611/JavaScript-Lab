const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const MAX_TICKETS = 500;

const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'registrations.json');

function loadRegistrations() {
    try {
        return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    } catch (err) {
        if (err.code !== 'ENOENT') console.error('Could not read registrations file:', err);
        return [];
    }
}

function saveRegistrations() {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    const tmp = DATA_FILE + '.tmp';
    fs.writeFileSync(tmp, JSON.stringify(registrations, null, 2));
    fs.renameSync(tmp, DATA_FILE);
}

const registrations = loadRegistrations();

app.use(express.json());
app.use('/data', (req, res) => res.sendStatus(404));
app.use(express.static(__dirname));


function ticketsSold() {
    return registrations.reduce((sum, r) => sum + r.tickets, 0);
}

function validate(d) {
    const errors = [];
    
    if (!d.name || !/^[A-Za-z ]+$/.test(String(d.name).trim())) errors.push('Invalid name.');
    
    const age = Number(d.age);
    if (!(age >= 18 && age <= 120)) errors.push('Age must be between 18 and 120.');
    
    if (!['male', 'female', 'other'].includes(String(d.gender).toLowerCase())) errors.push('Invalid gender.');
    
    if (!/^\d{10}$/.test(String(d.mobile).trim())) errors.push('Invalid mobile number.');
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(d.email).trim())) errors.push('Invalid email.');
    
    const t = Number(d.tickets);
    if (!Number.isInteger(t) || t < 1) errors.push('Invalid ticket count.');
    
    return errors;
}


app.post('/api/register', (req, res) => {
    const data = req.body;

    const errors = validate(data);
    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join(' ') });
    }

    const email = data.email.trim().toLowerCase();
    const tickets = Number(data.tickets);

    if (registrations.some(r => r.email === email)) {
        return res.status(409).json({ error: 'This email is already registered.' });
    }

    if (ticketsSold() + tickets > MAX_TICKETS) {
        const left = MAX_TICKETS - ticketsSold();
        return res.status(409).json({
            error: left > 0
                ? `Only ${left} ticket(s) left.`
                : 'Sorry, this concert is sold out.'
        });
    }

    registrations.push({
        name: data.name.trim(),
        age: Number(data.age),
        gender: data.gender,
        mobile: String(data.mobile),
        email,
        tickets,
        registeredAt: new Date().toISOString()
    });

    try {
        saveRegistrations();
    } catch (err) {
        registrations.pop();
        console.error('Save failed:', err);
        return res.status(500).json({ error: 'Could not save registration.' });
    }

    res.status(201).json({
        message: `Registration successful! ${tickets} ticket(s) booked.`
    });
});

app.get('/api/registrations', (req, res) => {
    res.json({ count: registrations.length, ticketsSold: ticketsSold(), registrations });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Server error: ' + err.message });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});