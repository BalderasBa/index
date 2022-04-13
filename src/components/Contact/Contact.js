import { contact } from "../../data";
import "./Contact.css";
import { Mail, CallSharp, Facebook } from "@material-ui/icons";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact" id="contact">
      <h5 className="section__title">Get In Touch</h5>
      <h2 className="section__title">Contact</h2>

      <div className="contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <Mail />
            <h4>Email</h4>
            <h5>hallousse.yehya@gmail.com</h5>
            <a className="btn btn--outline" href={`${contact.email}`} target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <Facebook />
            <h4>Messenger</h4>
            <h5>Balderas</h5>
            <a className="btn btn--outline" href={`${contact.email}`} target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <CallSharp />
            <h4>Whatsapp</h4>
            <h5>+213 776920565</h5>
            <a className="btn btn--outline" href={`${contact.email}`} target="_blank">
              Send a Message
            </a>
          </article>
        </div>
        <from className="form" action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="YourEmail@email.com"
            required
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn--outline">
            Send Message
          </button>
        </from>
      </div>
    </section>
  );
};

export default Contact;
