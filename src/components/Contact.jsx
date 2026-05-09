import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 sm:px-16 py-10 sm:py-20 relative z-0">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915eff]"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915eff]"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915eff]"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#915eff] transition-colors"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-10 flex gap-6">
            <a href="https://www.linkedin.com/in/priyanshu-tayal-34949328a" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-tertiary flex justify-center items-center hover:bg-[#915eff] transition-colors">
              <FaLinkedin className="text-white text-2xl" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-tertiary flex justify-center items-center hover:bg-[#915eff] transition-colors">
              <FaGithub className="text-white text-2xl" />
            </a>
            <a href="mailto:priyanshutayal35@gmail.com" className="w-12 h-12 rounded-full bg-tertiary flex justify-center items-center hover:bg-[#915eff] transition-colors">
              <FaEnvelope className="text-white text-2xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
