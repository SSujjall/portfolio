import { useState } from "react";
import Title from "./Title";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value);
  };

  const inputClass = `w-full bg-transparent border-b border-stone-300 dark:border-stone-600
        py-2.5 text-sm text-stone-900 dark:text-stone-50 placeholder:text-stone-400 dark:placeholder:text-stone-500
        focus:outline-none focus:border-stone-900 dark:focus:border-stone-100
        transition-colors duration-200`;

  return (
    <div className="main-container py-5 md:py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <form
          action="https://getform.io/f/payggwna"
          method="POST"
          className="flex flex-col gap-6"
        >
          <Title id="contact">Contact Me</Title>

          <div className="flex flex-col md:flex-row md:gap-8 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={inputClass}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className={inputClass}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className={inputClass}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            className={`${inputClass} resize-none`}
            required
          />

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6Le69F8qAAAAAJ1v6nd-CiMRR8PcGFK-Yg6dBuJU"
              onChange={handleCaptchaChange}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!captchaVerified}
              className={`inline-block px-7 py-2.5 text-sm font-medium rounded-full
                                text-white dark:text-black bg-stone-900 dark:bg-stone-100
                                hover:bg-stone-700 dark:hover:bg-stone-300
                                transition-colors duration-200
                                ${!captchaVerified ? "opacity-40 cursor-not-allowed" : ""}`}
            >
              Work with me
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
