import { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { personalInfo } from "../constants";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaFileDownload,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [sentNotice, setSentNotice] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open default mail client with pre-filled message
    const subject = encodeURIComponent(
      form.subject || `Portfolio Contact from ${form.name}`
    );
    const body = encodeURIComponent(
      `Hi Priyanshu,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSentNotice(true);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-10">
      <div className="flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Contact Info Card */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex-1 bg-tertiary/80 border border-[#211e35] p-8 rounded-3xl shadow-card flex flex-col justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#915eff]/10 border border-[#915eff]/30 text-[#915eff] text-xs uppercase tracking-wider font-semibold mb-2">
              <FaEnvelope />
              <span>Let's Connect</span>
            </div>
            <h3 className="text-white font-black text-[32px] sm:text-[46px] tracking-tight">
              Get in Touch.
            </h3>
            <p className="mt-3 text-secondary text-[15px] leading-relaxed">
              I am open to Frontend Developer roles, full-time engineering opportunities, and collaborative software projects. Feel free to reach out via email, phone, or LinkedIn!
            </p>

            {/* Direct Contact List */}
            <div className="mt-8 flex flex-col gap-4">
              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-primary/60 border border-white/5">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#915eff]/20 flex items-center justify-center text-[#915eff]">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs text-secondary font-medium">Email Address</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white text-sm font-semibold hover:text-[#915eff] transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-tertiary hover:bg-[#915eff] text-secondary hover:text-white transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <FaCheck className="text-[#00cea8]" /> : <FaCopy />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center p-4 rounded-2xl bg-primary/60 border border-white/5">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#915eff]/20 flex items-center justify-center text-[#915eff]">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-xs text-secondary font-medium">Phone Number</p>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                      className="text-white text-sm font-semibold hover:text-[#915eff] transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center p-4 rounded-2xl bg-primary/60 border border-white/5">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#915eff]/20 flex items-center justify-center text-[#915eff]">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-xs text-secondary font-medium">Location</p>
                    <p className="text-white text-sm font-semibold">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Resume Download */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-primary/80 border border-white/10 flex justify-center items-center text-white hover:bg-[#915eff] hover:border-[#915eff] transition-all shadow-md"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-primary/80 border border-white/10 flex justify-center items-center text-white hover:bg-[#915eff] hover:border-[#915eff] transition-all shadow-md"
                title="GitHub"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>

            <a
              href={personalInfo.resumePath}
              download="Priyanshu_Tayal_Frontend_Developer_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00cea8]/15 border border-[#00cea8]/40 hover:bg-[#00cea8]/25 text-[#00cea8] py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md"
            >
              <FaFileDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Message Composition Form */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex-1 bg-black-100/90 border border-[#211e35] p-8 rounded-3xl shadow-card"
        >
          <h4 className="text-white font-bold text-xl mb-1">Send a Message</h4>
          <p className="text-secondary text-xs mb-6">
            Submitting this form prepares a pre-filled direct email to {personalInfo.email}.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-white font-medium text-xs mb-2">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="bg-tertiary py-3 px-4 placeholder:text-secondary/50 text-white text-sm rounded-xl outline-none border border-[#211e35] focus:border-[#915eff] transition-colors"
                  required
                />
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium text-xs mb-2">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className="bg-tertiary py-3 px-4 placeholder:text-secondary/50 text-white text-sm rounded-xl outline-none border border-[#211e35] focus:border-[#915eff] transition-colors"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-white font-medium text-xs mb-2">Subject (Optional)</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="e.g. Frontend Developer Opportunity / Interview"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary/50 text-white text-sm rounded-xl outline-none border border-[#211e35] focus:border-[#915eff] transition-colors"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium text-xs mb-2">Your Message</span>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hi Priyanshu, we would like to discuss..."
                className="bg-tertiary py-3 px-4 placeholder:text-secondary/50 text-white text-sm rounded-xl outline-none border border-[#211e35] focus:border-[#915eff] transition-colors resize-none"
                required
              />
            </label>

            {sentNotice && (
              <p className="text-xs text-[#00cea8] font-medium bg-[#00cea8]/10 p-2.5 rounded-lg border border-[#00cea8]/30">
                Your email client was triggered with the pre-filled message. If it didn't open automatically, you can write directly to {personalInfo.email}.
              </p>
            )}

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#915eff] to-[#7038e8] py-3.5 px-6 outline-none text-white font-bold text-sm shadow-lg shadow-[#915eff]/30 rounded-xl hover:from-[#7e4ce6] hover:to-[#5d2bd4] transition-all"
            >
              <FaPaperPlane className="text-xs" />
              <span>Send Message via Email</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;