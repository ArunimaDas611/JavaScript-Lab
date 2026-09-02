function calculateBill() {
    var customerName = document.getElementById("name").value;

    let product = document.getElementById("product").value;
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);
    
    const GST = 0.18;

    let subtotal = price*quantity;
    let gstAmount = subtotal*GST;
    let total = subtotal + gstAmount;

    const bill = {
        customerName,
        product,
        subtotal,
        gstAmount,
        total
    };

    const {customerName : name, product : product1, subtotal : st, gstAmount : gst, total : total1} = bill;

    //Template Literal

    document.getElementById("output").innerHTML = 
        `
        <h3>Customer Name: ${name}</h3>
        <br>
        <h3>Product Name: ${product1}</h3>
        <br>
        <h3>Subtotal: ${st}</h3>
        <br>
        <h3>GST Amount: ${gst}</h3>
        <br>
        <h2>Total Amount: ${total1}</h2>
        `

    console.log(`Customer Name: ${name}`);
    console.log(`Product Name: ${product1}`);
    console.log(`Subtotal: ${st}`);
    console.log(`GST Amount: ${gst}`);
    console.log(`Total Amount: ${total1}`);
}