import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Menu,
  X,
  Code,
  Smartphone,
  Globe,
  Palette,
  Video,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Sun,
  Moon,
  Brain,
  Shield,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  CheckCircle,
  Award,
} from "lucide-react";

export default function Landing() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // New: modal state and form state
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



 const handleSubmit = async (e) => {
   e?.preventDefault?.();

  const { name, email, subject, message } = formData;

  try {
    await emailjs.send(
      "service_0ik4mu2",
      "template_czptmfp",
      {
        name,
        message,
        time: new Date().toLocaleString(),
        reply_to: email,
        subject,
      },
      "XbSvXcnZfFsVg7_E1"
    );

    toast.success("Thank you!\nour team will reach out to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setShowModal(false);
  } catch (error) {
    console.error("EmailJS error:", error);
    toast.error("Seems there is some issue at our end kindly email us on twoxplusoneserver@gmail.com");
  }
 };


  return (
    <div
      className={`${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-gray-900"
      } transition-colors duration-300`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all ${
          scrolled
            ? darkMode
              ? "bg-slate-900/95 shadow-2xl"
              : "bg-white/95 shadow-lg"
            : "bg-transparent"
        } backdrop-blur-xl`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-black bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            2x+1
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("home")}
              className="hover:text-violet-500 transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="hover:text-violet-500 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="hover:text-violet-500 transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="hover:text-violet-500 transition"
            >
              Contact
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${
                darkMode ? "bg-slate-800" : "bg-gray-200"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-gradient-to-r from-violet-600 to-pink-600 px-6 py-2 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition"
            >
              Get Started
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 py-4 space-y-3">
            <button
              onClick={() => scrollTo("home")}
              className="block w-full text-left py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="block w-full text-left py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="block w-full text-left py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="block w-full text-left py-2"
            >
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <Sparkles className="w-12 h-12 text-violet-500 mx-auto mb-6 animate-bounce" />
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="block mb-2">Meet</span>
            <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
              2x+1
            </span>
          </h1>
          <p className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Where Innovation Meets Efficiency
          </p>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } max-w-4xl mx-auto mb-12`}
          >
            Your premier software solutions partner. We transform business
            challenges into powerful digital solutions that drive growth,
            streamline operations, and maximize ROI.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => scrollTo("contact")}
              className="bg-gradient-to-r from-violet-600 to-pink-600 px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-110 transition flex items-center justify-center gap-3"
            >
              Start Your Project <ArrowRight className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="border-2 border-violet-500 px-10 py-5 rounded-full text-xl font-bold hover:bg-violet-500/10 hover:scale-110 transition"
            >
              Explore Services
            </button>
          </div>

          <div
            className={`flex flex-wrap justify-center gap-8 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-violet-500" /> Enterprise Security
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-violet-500" /> Fast Delivery
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-violet-500" /> AI-Powered
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        className={`py-20 ${darkMode ? "bg-slate-900/50" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              darkMode
                ? "bg-violet-500/10 text-violet-400"
                : "bg-violet-100 text-violet-600"
            }`}
          >
            OUR MISSION
          </span>
          <h2 className="text-5xl font-black mt-6 mb-8">How We Help</h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            At 2x+1, we understand that one size doesn't fit all. That's why we
            offer cutting-edge software solutions tailored to your unique needs.
            Whether you're a startup or enterprise, we streamline operations and
            boost productivity.
          </p>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className={`py-24 ${darkMode ? "bg-slate-950" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  darkMode
                    ? "bg-violet-500/10 text-violet-400"
                    : "bg-violet-100 text-violet-600"
                }`}
              >
                ABOUT US
              </span>
              <h2 className="text-5xl font-black mt-6 mb-6">
                Expert Software{" "}
                <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                  Professionals
                </span>
              </h2>
              <div
                className={`space-y-4 text-lg ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <p>
                  2x+1 is a specialized software development company
                  transforming businesses through technology. We've developed
                  solutions that help businesses solve growth issues and
                  optimize operations.
                </p>
                <p>
                  With specialists in web development, mobile apps, custom
                  software, and digital transformation, we deliver the right
                  solutions for your needs.
                </p>
                <p className="font-semibold text-violet-500">
                  Every challenge is an opportunity. Every line of code, a step
                  towards excellence.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <div
                  className={`p-6 rounded-2xl ${
                    darkMode ? "bg-slate-800/50" : "bg-gray-100"
                  } flex-1`}
                >
                  <div className="text-4xl font-black text-violet-500">5+</div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Years
                  </div>
                </div>
                <div
                  className={`p-6 rounded-2xl ${
                    darkMode ? "bg-slate-800/50" : "bg-gray-100"
                  } flex-1`}
                >
                  <div className="text-4xl font-black text-pink-500">50+</div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Projects
                  </div>
                </div>
                <div
                  className={`p-6 rounded-2xl ${
                    darkMode ? "bg-slate-800/50" : "bg-gray-100"
                  } flex-1`}
                >
                  <div className="text-4xl font-black text-purple-500">98%</div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Success
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-violet-500/20 to-pink-500/20 rounded-3xl p-8">
                <div
                  className={`w-full h-full ${
                    darkMode ? "bg-slate-800" : "bg-white"
                  } rounded-2xl flex items-center justify-center text-7xl font-black bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent`}
                >
                  2x+1
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className={`py-24 ${darkMode ? "bg-slate-900/50" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                darkMode
                  ? "bg-violet-500/10 text-violet-400"
                  : "bg-violet-100 text-violet-600"
              }`}
            >
              OUR SERVICES
            </span>
            <h2 className="text-5xl font-black mt-6 mb-4">
              Areas We Can Help With
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Enterprise Web Development",
                desc: "Scalable, high-performance web applications with cutting-edge tech.",
                color: "from-violet-500 to-purple-600",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile App Solutions",
                desc: "Native and cross-platform apps for iOS and Android.",
                color: "from-cyan-500 to-blue-600",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Custom Software Development",
                desc: "Tailored solutions for your unique business challenges.",
                color: "from-emerald-500 to-teal-600",
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "UI/UX Design",
                desc: "Beautiful, intuitive interfaces backed by research.",
                color: "from-pink-500 to-rose-600",
              },
              {
                icon: <Video className="w-8 h-8" />,
                title: "Digital Content Production",
                desc: "Professional video editing and content creation.",
                color: "from-orange-500 to-amber-600",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Technical Consulting",
                desc: "Expert guidance on technology and digital transformation.",
                color: "from-indigo-500 to-blue-600",
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl ${
                  darkMode ? "bg-slate-800/50" : "bg-white"
                } hover:scale-105 hover:-translate-y-2 transition-all duration-500`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 text-white`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`py-24 ${darkMode ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                darkMode
                  ? "bg-violet-500/10 text-violet-400"
                  : "bg-violet-100 text-violet-600"
              }`}
            >
              WHY CHOOSE US
            </span>
            <h2 className="text-5xl font-black mt-6 mb-4">
              Six Reasons To Choose 2x+1
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Proven Track Record",
                desc: "Extensive portfolio across diverse industries",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Rapid Deployment",
                desc: "Agile methodology for quick turnaround",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Expert Team",
                desc: "Deep expertise in cutting-edge technologies",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Enterprise Security",
                desc: "Bank-level security protocols",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Consultative Approach",
                desc: "Tailored solutions that drive results",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Quality Assurance",
                desc: "Rigorous testing for flawless delivery",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl ${
                  darkMode ? "bg-slate-800/50" : "bg-gray-50"
                } hover:scale-105 transition-all`}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-violet-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className={`py-24 ${darkMode ? "bg-slate-900/50" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            {/* Click on this header will open the modal (no style changes) */}
            <h2
              onClick={() => setShowModal(true)}
              className="text-5xl font-black mb-4"
            >
              Get In Touch
            </h2>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Connect with our specialists
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Phone",
                value: "+91 879 254 9715",
                color: "from-violet-500 to-purple-500",
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                value: "twoxplusoneserver@gmail.com",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Office",
                value: "Kalasipalyam, Bengaluru 560002",
                color: "from-pink-500 to-rose-500",
              },
            ].map((contact, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl ${
                  darkMode ? "bg-slate-800/50" : "bg-white"
                } text-center hover:scale-105 transition`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                <p
                  className={`${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  } text-sm`}
                >
                  {contact.value}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`max-w-3xl mx-auto p-10 rounded-3xl ${
              darkMode ? "bg-slate-800/50" : "bg-white"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Name"
                  className={`px-6 py-4 rounded-2xl ${
                    darkMode
                      ? "bg-slate-900 text-white"
                      : "bg-gray-50 text-gray-900"
                  } border ${
                    darkMode ? "border-slate-700" : "border-gray-300"
                  } focus:border-violet-500 outline-none`}
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Your Email"
                  className={`px-6 py-4 rounded-2xl ${
                    darkMode
                      ? "bg-slate-900 text-white"
                      : "bg-gray-50 text-gray-900"
                  } border ${
                    darkMode ? "border-slate-700" : "border-gray-300"
                  } focus:border-violet-500 outline-none`}
                />
              </div>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                placeholder="Phone Number"
                className={`w-full px-6 py-4 rounded-2xl ${
                  darkMode
                    ? "bg-slate-900 text-white"
                    : "bg-gray-50 text-gray-900"
                } border ${
                  darkMode ? "border-slate-700" : "border-gray-300"
                } focus:border-violet-500 outline-none`}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Your Message"
                className={`w-full px-6 py-4 rounded-2xl ${
                  darkMode
                    ? "bg-slate-900 text-white"
                    : "bg-gray-50 text-gray-900"
                } border ${
                  darkMode ? "border-slate-700" : "border-gray-300"
                } focus:border-violet-500 outline-none resize-none`}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-4 rounded-2xl text-xl font-bold hover:shadow-2xl transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Modal for Get In Touch (same form) */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div
            className={`max-w-lg w-full mx-4 p-8 rounded-3xl ${
              darkMode ? "bg-slate-800" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Get In Touch</h3>
              <button onClick={() => setShowModal(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className={`w-full px-6 py-4 rounded-2xl ${
                  darkMode
                    ? "bg-slate-900 text-white"
                    : "bg-gray-50 text-gray-900"
                } border ${
                  darkMode ? "border-slate-700" : "border-gray-300"
                } focus:border-violet-500 outline-none`}
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className={`w-full px-6 py-4 rounded-2xl ${
                  darkMode
                    ? "bg-slate-900 text-white"
                    : "bg-gray-50 text-gray-900"
                } border ${
                  darkMode ? "border-slate-700" : "border-gray-300"
                } focus:border-violet-500 outline-none`}
              />
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                placeholder="Subject"
                className={`w-full px-6 py-4 rounded-2xl ${
                  darkMode
                    ? "bg-slate-900 text-white"
                    : "bg-gray-50 text-gray-900"
                } border ${
                  darkMode ? "border-slate-700" : "border-gray-300"
                } focus:border-violet-500 outline-none`}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your Message"
                className={`w-full px-6 py-4 rounded-2xl ${
                  darkMode
                    ? "bg-slate-900 text-white"
                    : "bg-gray-50 text-gray-900"
                } border ${
                  darkMode ? "border-slate-700" : "border-gray-300"
                } focus:border-violet-500 outline-none resize-none`}
              ></textarea>
              <button
                              type="submit" className="w-full bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl transition"
                              onClick={handleSubmit}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        className={`py-8 ${
          darkMode ? "bg-slate-950" : "bg-gray-100"
        } text-center`}
      >
        <div className="text-3xl font-black bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent mb-4">
          2x+1
        </div>
        <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
          Building tomorrow's solutions, today.
        </p>
        <p
          className={`${
            darkMode ? "text-gray-500" : "text-gray-500"
          } text-sm mt-4`}
        >
          © 2025 2x+1. All rights reserved.
        </p>
      </footer>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
