import Title from "./Title";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form
                    action="https://getform.io/f/payggwna"
                    method="POST"
                    className="flex flex-col w-9/12 md:w-9/12 lg:w-9/12 max-w-[700px]"
                >
                    <Title id="contact">Contact Me</Title>

                    {/* Container for Name and Phone Number on the same line */}
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

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="text-center inline-block px-8 
                            py-3 w-max text-base font-medium rounded-md
                            text-white dark:text-black bg-stone-900 
                            hover:bg-slate-700 dark:bg-stone-100 dark:hover:bg-stone-300
                            transition duration-300 ease-in-out">
                            Work with me
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
