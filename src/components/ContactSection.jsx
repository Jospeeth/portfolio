
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const ref = useRef();
  const form = useRef();
  const isInView = useInView(ref, { once: true });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_APP_PUBLIC_KEY,
          message: form.current.message.value,
          subject: form.current.subject.value,
          email: form.current.email.value,
        }
      )
      .then(
        () => {
          setEmailSubmitted(true);
        },
        (error) => {
          throw new Error("Error sending email: ", error);
        }
      );
  };
  return (
    <section
      id="Contact"
      className="grid md:grid-cols-2 my-12 py-12 md:my-12 md:py-24 gap-4 relative"
      ref={ref}
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-wrap">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 ">
          <a
            href="https://github.com/Jospeeth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/josepertuz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="Linkedin Icon" />
          </a>
        </div>
      </div>
      <div className="mx-10">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form
            className="flex flex-col bg-zinc-900 p-6 rounded-lg gap-6"
            ref={form}
            onSubmit={sendEmail}
          >
            <h5 className="text-4xl font-bold text-white mb-8">
              Send me a mail.
            </h5>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white font-medium py-2.5 px-5 rounded-lg w-full transition duration-300 ease-in-out hover:text-purple-400 hover:bg-gray-800/80"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
