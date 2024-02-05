import SocialIcon from "@/components/common/SocialIcon/SocialIcon";

export const metadata = {
  title: "Contact Us - fastrebo Blogs",
};

const ContactUs = () => {
  return (
    <div className="container mx-auto px-2 py-10 sm:px-0">
      <h1 className="pb-10 text-center text-3xl font-bold text-[#222] dark:text-gray-200">
        Contact Us
      </h1>

      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-full max-w-[1000px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10">
            <div className="w-full">
              <form action="">
                <div className="block gap-5 sm:flex">
                  <div className="space-y-1 pb-3">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-[#555] dark:text-gray-300"
                    >
                      Name
                    </label>
                    <div className="">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name Here..."
                        className="w-full rounded border border-[#00AAA1] px-1 py-2 focus:outline-1 focus:outline-[#00AAA1] dark:bg-slate-800 dark:text-gray-100"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1 pb-3">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-[#555] dark:text-gray-300"
                    >
                      Email
                    </label>
                    <div className="">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email Here..."
                        className="w-full rounded border border-[#00AAA1] px-1 py-2 focus:outline-1 focus:outline-[#00AAA1] dark:bg-slate-800 dark:text-gray-100"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-1 pb-3">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-[#555] dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject Here..."
                      className="w-full rounded border border-[#00AAA1] px-1 py-2  focus:outline-1 focus:outline-[#00AAA1] dark:bg-slate-800 dark:text-gray-100"
                    />
                  </div>
                </div>
                <div className="space-y-1 pb-3">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-[#555] dark:text-gray-300"
                  >
                    Message
                  </label>
                  <div className="">
                    <textarea
                      name="message"
                      placeholder="Your Message Here..."
                      className="dark: w-full rounded border border-[#00AAA1] px-1  py-2 focus:outline-1 focus:outline-[#00AAA1] dark:bg-slate-800 dark:text-gray-100"
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

            <div className="space-y-5 text-[#555] dark:text-gray-400">
              <div className="text-base capitalize">
                <p>
                  Feel free to reach out. Your thoughts, questions, and feedback
                  are invaluable to us. Whether you are a reader, collaborator,
                  or enthusiast, we welcome your messages. Contact us for
                  inquiries, partnerships, or just to say hello. We look forward
                  to connecting with you and fostering meaningful conversations.
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-x-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <p>info@fastrebo.com</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </span>
                  <p>Jessore, Khulna, Bangladesh</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-[#222] dark:text-gray-300">
                  Follow & Contact:
                </h4>
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
