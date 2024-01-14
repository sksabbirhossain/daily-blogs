import SocialIcon from "@/components/common/SocialIcon/SocialIcon";

export const metadata = {
  title: "Contact Us - Daily Blogs",
};

const ContactUs = () => {
  return (
    <div className="container mx-auto px-2 py-10 sm:px-0">
      <h1 className="pb-10 text-center text-3xl font-bold">Contact Us</h1>

      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-full max-w-[1000px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10">
            <div className="w-full">
              <form action="">
                <div className="block gap-5 sm:flex">
                  <div className="space-y-1 pb-3">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-[#555]"
                    >
                      Name
                    </label>
                    <div className="">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name Here..."
                        className="w-full rounded border border-[#00AAA1] px-1 py-2  focus:outline-1 focus:outline-[#00AAA1]"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1 pb-3">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-[#555]"
                    >
                      Email
                    </label>
                    <div className="">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email Here..."
                        className="w-full rounded border border-[#00AAA1] px-1 py-2 focus:outline-1 focus:outline-[#00AAA1]"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-1 pb-3">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-[#555]"
                  >
                    Subject
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject Here..."
                      className="w-full rounded border border-[#00AAA1] px-1 py-2  focus:outline-1 focus:outline-[#00AAA1]"
                    />
                  </div>
                </div>
                <div className="space-y-1 pb-3">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-[#555]"
                  >
                    Message
                  </label>
                  <div className="">
                    <textarea
                      name="message"
                      placeholder="Your Message Here..."
                      className="w-full rounded border border-[#00AAA1] px-1 py-2  focus:outline-1 focus:outline-[#00AAA1]"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <div className="space-y-1 pb-3">
                  <button className="flex items-center rounded border border-[#00AAA1] px-3 py-2 text-sm text-[#00AAA1] duration-150 ease-linear hover:bg-[#00AAA1] hover:text-white">
                    Send Message
                    <span className="ps-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-3 w-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-5 text-[#555]">
              <div className="text-base capitalize">
                <p>
                  Feel free to reach out. Your thoughts, questions, and feedback
                  are invaluable to us. Whether you are a reader, collaborator,
                  or enthusiast, we welcome your messages. Contact us for
                  inquiries, partnerships, or just to say hello. We look forward
                  to connecting with you and fostering meaningful conversations.
                </p>
              </div>
              <div className="space-y-1 text-sm">
                <p>notavailable@gmail.com</p>
                <p>soon {"->"}</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold ">Follow on:</h4>
                <SocialIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
