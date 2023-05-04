import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import "animate.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactComponent = () => {
  const [input, setInput] = useState({
    name: null,
    email: null,
    message: null,
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (Object.values(input).some((val) => !val)) {
      toast.error("You did not fill in all the fields!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    emailjs
      .sendForm(
        "service_lh8wnxe",
        "template_w453x57",
        form.current,
        "H2rjiBjduKIpByjJq"
      )
      .then(
        (result) => {
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );

    toast.success("The message has been sent.", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <section id="contact" className="container contact">
      <h2>Need a web developer</h2>
      <article className="d-flex justify-content-between contactDiv">
        <div className="contactField">
          <h3>Contact me</h3>
          <a href="mailto:milossudimac1988@gmail.com" target="_blank">
            <div className="shadow">
              <AiOutlineMail className="animate__animated animate__headShake animate__infinite" />
              <br />
              <span>E-mail</span>
              <p>milossudimac1988@gmail.com</p>
              <p>Send message</p>
            </div>
          </a>
          <a href="https://api.whatsapp.com/send?phone=381653737257">
            <div className="shadow">
              <AiOutlineWhatsApp className="animate__animated animate__headShake animate__infinite" />
              <br />
              <span>WhatsApp</span>
              <p>+381 65 37 37 257</p>
              <p>Send message or call</p>
            </div>
          </a>
        </div>
        <div className="formField ">
          <form ref={form} onSubmit={sendEmail}>
            <div className="position-relative">
              <label className="labName p-2">Name</label>
              <input
                type="text"
                name="name"
                className="form-control shadow"
                placeholder="What's your name?"
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="position-relative">
              <label className="labEmail p-2">Email</label>
              <input
                type="email"
                name="email"
                className="form-control shadow"
                placeholder="What's your email?"
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="position-relative">
              <label className="labMsg p-2">Message</label>
              <textarea
                defaultValue={null}
                name="message"
                className="form-control shadow"
                placeholder="What do you want to say?"
                rows="7"
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Send message
            </button>
            <ToastContainer />
          </form>
        </div>
      </article>
    </section>
  );
};

export default ContactComponent;
