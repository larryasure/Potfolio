import { React, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import EarthCanvas from "./canvas/Earth";
import StarsCanvas from "./canvas/Stars";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please Fill all the fields");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (form.message.length < 15) {
      toast.error("Message must be at least 15 characters");
      return;
    }

    if (form.message.length > 500) {
      toast.error("Message must not exceed 500 characters");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_8yi1n2b",
        "template_um7bjiv",
        {
          from_name: form.name,
          to_name: "Lanre",
          from_email: form.email,
          to_email: "olascolanre@gmail.com",
          message: form.message,
        },
        "GnmuxVj7d_pGrrF_k"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank You, I will get back to you as soon as possible!!"
          );
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          toast.error("Opps!! Something went wrong.");
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="relative w-full">
      <StarsCanvas />

      <div className="relative z-20 w-full">
        <div
          className={`xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden ${styles.paddingY}`}
        >
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className={`flex-[0.75]  p-8 rounded-2xl bg-black/90`}
          >
            <p className={`${styles.sectionSubText}`}>Get In Touch!</p>
            <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex mt-10 flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-black/80 px-6 py-3 active:bg-gray-800 border-gray-400 border rounded-lg hover:bg-gray-900 focus:outline-none font-medium"
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
                  className="bg-black/80 px-6 py-3 active:bg-gray-800 border-gray-400 border rounded-lg hover:bg-gray-900 focus:outline-none font-medium"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  maxLength={500}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-black/80 px-6 py-3 active:bg-gray-800 border-gray-400 border rounded-lg hover:bg-gray-900 focus:outline-none font-medium"
                  rows={7}
                />
              </label>
              <button
                type="submit"
                className="bg-white/15 shadow-2xl/20 px-8 py-2 cursor-pointer active:scale-110 duration-200 rounded-xl outline-none w-fit text-white font-bold"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>

          <motion.div
            id="contact"
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
