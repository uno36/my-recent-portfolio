// Import required modules
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables from .env file

// Create an Express application
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

// Define the port where your server will listen
const PORT = 5000;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

const EMAIL_USER = process.env.EMAIL_USER; // Load email user from environment variable
const EMAIL_PASS = process.env.EMAIL_PASS; // Load email password from environment variable

// Create a nodemailer transport with valid Gmail credentials
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// Define the POST route for handling contact form submissions
router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: EMAIL_USER, // Use the same email as the recipient
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Send the email
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
