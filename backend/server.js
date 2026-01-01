// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// SMTP transporter for Namecheap Stellar Hosting
const transporter = nodemailer.createTransport({
  host: "smtp.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER, // info@aorticlabs.io
    pass: process.env.MAIL_PASS,
  },
  connectionTimeout: 10000,
});


// Test connection on startup
transporter.verify((err, success) => {
  if (err) {
    console.error(" SMTP Connection Error:", err);
  } else {
    console.log("SMTP server is ready to send emails.");
  }
});

app.get("/", (req, res) => {
  res.send("Backend is alive ✅");
});

// Contact endpoint
app.post("/api/contact", async (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  try {
    await transporter.sendMail({
      from: `"AorticLabs Website" <${process.env.MAIL_USER}>`,
      to: "info@aorticlabs.io",  // You receive messages here
      subject: "New Contact Form Submission",
      text: `Name: ${name}\n\nMessage:\n${message}`,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error("❌ Error sending mail:", err.message);
    return res.status(500).json({ success: false, error: "Email send failed" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
