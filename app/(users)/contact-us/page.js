import React from "react";

const ContactUs = () => {
  return (
    <div className="py-10 container mx-auto px-2 sm:px-0">
      <h1 className="text-3xl font-bold text-center pb-10">Contact Us</h1>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-[1000px]">
          <div className="grid gap-5 sm:gap-10 grid-cols-1 sm:grid-cols-2">
            <div className="w-full">
              <form action="">
                <div className="block sm:flex gap-5">
                  <div className="space-y-1 pb-3">
                    <label
                      htmlFor=""
                      className="text-[#555] text-base font-medium"
                    >
                      Name
                    </label>
                    <div className="">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name Here..."
                        className="border border-[#00AAA1] rounded py-2 px-1 w-full  focus:outline-1 focus:outline-[#00AAA1]"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1 pb-3">
                    <label
                      htmlFor=""
                      className="text-[#555] text-base font-medium"
                    >
                      Email
                    </label>
                    <div className="">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email Here..."
                        className="border border-[#00AAA1] rounded py-2 px-1 w-full focus:outline-1 focus:outline-[#00AAA1]"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-1 pb-3">
                  <label
                    htmlFor=""
                    className="text-[#555] text-base font-medium"
                  >
                    Subject
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject Here..."
                      className="border border-[#00AAA1] rounded py-2 px-1 w-full  focus:outline-1 focus:outline-[#00AAA1]"
                    />
                  </div>
                </div>
                <div className="space-y-1 pb-3">
                  <label
                    htmlFor=""
                    className="text-[#555] text-base font-medium"
                  >
                    Message
                  </label>
                  <div className="">
                    <textarea
                      name="message"
                      placeholder="Your Message Here..."
                      className="border border-[#00AAA1] rounded py-2 px-1 w-full  focus:outline-1 focus:outline-[#00AAA1]"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <div className="space-y-1 pb-3">
                  <button className="flex items-center text-sm text-[#00AAA1] hover:text-white hover:bg-[#00AAA1] border-[#00AAA1] border duration-150 ease-linear rounded py-2 px-3">
                    Send Message
                    <span className="ps-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
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
                  Dynamically underwhelm integrated outsourcing via timely
                  models. Rapidiously reconceptualize visionary imperatives
                  without.
                </p>
              </div>
              <div className="text-sm space-y-1">
                <p>blog.notebook@gmail.com</p>
                <p>+886554 654654</p>
                <p>9567 Turner Trace Apt. BC C3G8A4</p>
              </div>
              <div className="">
                <h4 className="text-sm font-medium ">Follow on:</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
