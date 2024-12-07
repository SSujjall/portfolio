import { useState } from "react";
import Title from "./Title";
import ReCAPTCHA from "react-google-recaptcha";

const Contact: React.FC = () => {
    const [captchaVerified, setCaptchaVerified] = useState(false);

    // Handle the reCAPTCHA change event
    const handleCaptchaChange = (value: string | null) => {
        setCaptchaVerified(!!value);  // !! ensures it's true or false
    };

    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form
                    action="https://getform.io/f/payggwna"
                    method="POST"
                    className="flex flex-col w-9/12 md:w-9/12 lg:w-9/12 max-w-[700px]"
                >
                    <Title id="contact">Contact Me</Title>

                    <div className="flex flex-col md:flex-row md:gap-4 gap-2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="p-2 bg-transparent border-2 
                            rounded-md focus:outline-none flex-1"
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            className="p-2 bg-transparent border-2 
                            rounded-md focus:outline-none flex-1"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 
                        rounded-md focus:outline-none"
                        required
                    />

                    {/* Message Input */}
                    <textarea
                        name="message"
                        placeholder="Message"
                        cols={30}
                        rows={10}
                        className="p-2 mb-4 bg-transparent border-2 
                        rounded-md focus:outline-none resize-none"
                        required
                    />

                    {/* Google reCAPTCHA */}
                    <div className="flex justify-center mb-4">
                        <ReCAPTCHA
                            sitekey="6Le69F8qAAAAAJ1v6nd-CiMRR8PcGFK-Yg6dBuJU"  // Replace with your Google reCAPTCHA site key
                            onChange={handleCaptchaChange}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className={`text-center inline-block px-8 
                            py-3 w-max text-base font-medium rounded-md
                            text-white dark:text-black bg-stone-900 
                            hover:bg-slate-700 dark:bg-stone-100 dark:hover:bg-stone-300
                            transition duration-300 ease-in-out ${!captchaVerified ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={!captchaVerified}  // Disable button until reCAPTCHA is verified
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
