const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  next();
});

// connecting database
mongoose
  .connect(
    "mongodb+srv://database:database@portfoliodatabase.qog6w.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch(() => {
    console.log("Error in Database Connectivity");
  });



app.get("/", async (req, res, next) => {
  res.json("Hello, You are currently riding on UberOla");
});


var news = require("./NewsletterSchema.js");
app.post("/newsletter", async (req, res, next) => {
  const data = new news({
    email: req.body.email,
  });
  console.log(data);
  try {
    const result = await data.save();
    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "rajadipatidar227@gmail.com",
        pass: "vnpn jgjl ynpe qyaa",
      },
    });

    const mailOptions = {
      from: "rajadipatidar227@gmail.com",
      to: "vasubhut157@gmail.com",
      subject: "UberOla", // Subject line
      text: `Email From ${req.body.email} for Newsletter`,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent");
      }
    });

    res.send({ user: true, data: result });
  } catch (e) {
    console.log(e);
    res.send({ user: false });
  }
});

var contact = require("./ContactSchema.js");
app.post("/contact", async (req, res, next) => {
  const data = new contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  console.log(data);
  try {
    const result = await data.save();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "rajadipatidar227@gmail.com",
        pass: "vnpn jgjl ynpe qyaa",
      },
    });

    const mailOptions = {
      from: "rajadipatidar227@gmail.com",
      to: "vasubhut157@gmail.com",
      subject: "Just Yours", // Subject line
      text: `Email From ${req.body.email} for Contact. Name is ${req.body.name} and message is ${req.body.message}`,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent");
      }
    });

    res.send({ user: true, data: result });
  } catch (e) {
    console.log(e);
    res.send({ user: false });
  }
});
    
var booking = require("./BookingSchema.js");
app.post("/bookings", async (req, res, next) => {
  const data = new booking({
    name: req.body.name,
    email: req.body.email,
    lastName: req.body.lastName,
    age: req.body.age,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    zipcode: req.body.zipcode,
    carType: req.body.carType,
    pickUp: req.body.pickUp,
    dropOff: req.body.dropOff,
    pickTime: req.body.pickTime,
    dropTime: req.body.dropTime,
  });
  console.log(data);
  try {
    const result = await data.save();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "rajadipatidar227@gmail.com",
        pass: "vnpn jgjl ynpe qyaa",
      },
    });

    const mailOptions = {
      from: "rajadipatidar227@gmail.com",
      to: "vasubhut157@gmail.com",
      subject: "Just Yours", // Subject line
      text: `Email From ${req.body.email} and ${req.body.name} ${req.body.lastName} for booking. 
      age: ${req.body.age}
      phone: ${req.body.phone}
      address: ${req.body.address}
      city: ${req.body.city}
      zipcode: ${req.body.zipcode}
      carType: ${req.body.carType}
      pickUp: ${req.body.pickUp}
      dropOff: ${req.body.dropOff}
      pickTime: ${req.body.pickTime}
      dropTime: ${req.body.dropTime}`,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent");
      }
    });

    res.send({ user: true, data: result });
  } catch (e) {
    console.log(e);
    res.send({ user: false });
  }
});
    


app.listen(5073, () => {
  console.log(`Server is running on 5073`);
});
