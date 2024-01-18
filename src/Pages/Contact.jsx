import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconMail, IconMailOpened, IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { IconLocation } from "@tabler/icons-react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  document.title = "Uberola | Connect With Us";


  const handleSubmit = async (e) => {
    e.preventDefault();

    const values = {
      name: name,
      email: email,
      message: message,
    };
    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      toast.warning("Empty Fields!");
      return false;
    }

    await fetch("https://uber-ola-server.vercel.app/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((user) => {
        setName("");
        setEmail("");
        setMessage("");
        toast.success("We got your message 🤞✌️");
      })
      .catch((err) => {
        setName("");
        setEmail("");
        setMessage("");
        toast.error(err.remarks);
        toast.error("Seems, there is an issue with the Server.");
      });
  };

  return (
    <>
      <div style={{fontSize: "15px", fontWeight: "normal"}}>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <p>
                <IconPhone /> &nbsp; (+91) 7777755555
              </p>
              <p>
                <IconMail /> &nbsp; help@uberola.com
              </p>
              <p>
                <IconLocation />
                &nbsp; Ahmedabad, India              </p>
            </div>
            <div className="contact-div__form">
              <form action="POST" name="contact-form" onSubmit={handleSubmit}>
                <label>
                  Full Name <b>*</b>
                </label>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  type="text"
                  placeholder='E.g: "Joe Shmoe"'
                ></input>

                <label>
                  Email <b>*</b>
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="email"
                  placeholder="youremail@example.com"
                ></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  required
                  value={message}
                  placeholder="Write Here.."
                ></textarea>

                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>(+91) 7777755555</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
