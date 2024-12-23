import React, { useState } from "react";
import "./Styles/ContactUs.css";
function ContactUs() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  const addData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setMessage({ ...message, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message: Message } = message;
    try {
      const result = await fetch("/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message: Message,
        }),
      });
      console.log(result.status);
      if (result.status === 400 || !result) {
        window.alert("Message not sent, try again.");
      } else {
        window.alert("Message sent");
        setMessage({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="Contact">
      <div className="contact1">
        <h3>Contact Us</h3>
        <h4>Our Offices</h4>
        <h6>
          <b>Head Office</b>
        </h6>
        <div className="contact2">
          <p>
            102, Chinmay Aparment, Scheme No.94, <br />
            Opp. Mayur Hospital, Ring Road, Indore <br />
            Pincode: 452010
          </p>
          <div className="contact2-1">
            <ul>
              <li>
                <a href="tel:+07314088816">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  0731-4088816, 93019-70501
                </a>
              </li>
              <li>
                <a href="tel:+7869919890">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  78699-19890, 88178-11488
                </a>
              </li>
              <li>
                <a href="mailto:support@codex.in">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  support@codex.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h6>
            <b>Branch Office</b>
          </h6>
          <p>
            2B 805 H and M Royal, Kondhwa, <br />
            Pune, Maharashtra <br />
            Pincode: 411048
          </p>
        </div>
      </div>
      <div className="form1">
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            value={message.name}
            onChange={addData}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
            value={message.email}
            onChange={addData}
          />
          <textarea
            id="message"
            name="message"
            placeholder="Write something.."
            style={{ height: "100px" }}
            value={message.message}
            onChange={addData}
          ></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
}
export default ContactUs;
