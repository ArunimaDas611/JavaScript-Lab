function calculateBill() {
    var customerName = document.getElementById("customer").value;

    let product = document.getElementById("product").value;
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);
    let discount = Number(document.getElementById("discount").value);

    const GST = 0.18;

    let subtotal = price*quantity;
    let gstAmount = subtotal*GST;
    let gstTotal = subtotal + gstAmount;
    let discountAmount = (gstTotal/100)*discount;
    let total = gstTotal - discountAmount;

    const bill = {
        customerName,
        product,
        subtotal,
        gstAmount,
        gstTotal,
        discountAmount,
        total
    };

    const {customerName : name, product : prod, subtotal : st, gstAmount : gst, gstTotal : gt, discountAmount : dis, total : at} = bill;

    document.getElementById("output").innerHTML = 
    `
        <h3>Customer Name: ${name}</h3>
        <br>
        <h3>Product Name: ${prod}</h3>
        <br>
        <h3>Subtotal: ₹${st}</h3>
        <br>
        <h3>GST Amount: ₹${gst}</h3>
        <br>
        <h3>Total with GST: ₹${gt}</h3>
        <br>
        <h3>Discounted Amount: ₹${dis}</h3>
        <br>
        <h2>Total: ₹${at}</h2>
        <br>
    `

    console.log(`Customer Name: ${name}`);
}
