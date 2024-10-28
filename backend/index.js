const nodemailer = require('nodemailer'); // or use Sendinblue API directly if you prefer

// Endpoint for checkout
app.post('/api/checkout', async (req, res) => {
  const { products, totalAmount, customerEmail } = req.body;

  // Create a new order
  const order = new Order({ products, totalAmount, customerEmail });

  try {
    // Save order to database
    await order.save();

    // Email order details to admin
    const adminEmail = process.env.ADMIN_EMAIL;

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'Sendinblue', // or Firebase if you've set it up
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS
      }
    });

    // Order details for the email
    const orderDetails = products.map(item => `Product ID: ${item.productId}, Quantity: ${item.quantity}`).join('\n');

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: 'New Order Received',
      text: `New order received:\n\nOrder details:\n${orderDetails}\n\nTotal Amount: $${totalAmount}`
    });

    res.json({ success: true, message: 'Order placed and email sent to admin' });

  } catch (error) {
    console.error('Error during checkout:', error);
    res.status(500).json({ success: false, message: 'Failed to process order' });
  }
});
