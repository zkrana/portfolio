const nodemailer = require("nodemailer");

// Create transporter with SMTP settings
const transporter = nodemailer.createTransport({
  host: "mail.lyzerslab.com",
  port: 465,
  secure: true,
  auth: {
    user: "support@lyzerslab.com",
    pass: "V_OcEUqbgEM9",
  },
});

// Function to send email
const sendEmail = async (formData) => {
  try {
    const { name, phone, email, message, service, packageOption } = formData;

    // Email content
    const mailOptions = {
      from: "support@lyzerslab.com",
      to: "recipient-email@example.com", // Change this to your recipient email
      subject: "New Form Submission",
      html: `
        <p>Name: ${name}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        <p>Service: ${service}</p>
        <p>Package Option: ${packageOption}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return "Email sent successfully";
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Unable to send email");
  }
};

module.exports = sendEmail;
