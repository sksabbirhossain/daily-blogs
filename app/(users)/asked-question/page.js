import Link from "next/link";

export const metadata = {
  title: "FAQ - Fastribo Blogs",
};

const Faq = () => {
  return (
    <section className="container mx-auto py-5 sm:py-10">
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[700px] space-y-5 sm:space-y-10">
          <div className="px2 space-y-2 text-center sm:px-0">
            <h1 className="text-2xl font-semibold capitalize text-[#222] dark:text-gray-200">
              <span className="text-[#00AAA1]">Frequently</span> asked question
            </h1>
            <p className="px-2 text-sm font-normal text-[#555] sm:px-0 dark:text-gray-300">
              Did you come here for something in particular or just general
              Riker-bashing?
            </p>
          </div>

          {/* faqs */}
          <div className="space-y-3 px-2 sm:px-0">
            <div className="rounded-md bg-[#F2F8F7] dark:bg-slate-800">
              <div className="flex items-center justify-between rounded-ss-md rounded-tr-md bg-[#DFF1F0] px-2 py-2 dark:bg-slate-700 ">
                <h2 className="text-xl font-bold capitalize text-[#222] sm:text-lg sm:font-medium dark:text-gray-200">
                  What is Fastribo Blogs about?
                </h2>
                <span className="cursor-pointer pe-3 font-bold text-[#00AAA1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
              <p className="px-2 py-2 text-[15px] font-normal text-[#666] dark:text-gray-300">
                Fastribo Blogs is a platform that focuses on delivering
                informative and engaging blog posts. We cover a variety of
                topics, including [provide specific categories or topics your
                blog covers].
              </p>
            </div>

            <div className="rounded-md bg-[#F2F8F7] dark:bg-slate-800">
              <div className="flex items-center justify-between rounded-ss-md rounded-tr-md bg-[#DFF1F0] px-2 py-2 dark:bg-slate-700 ">
                <h2 className="text-xl font-bold capitalize text-[#222] sm:text-lg sm:font-medium dark:text-gray-200">
                  How does affiliate marketing work on Fastribo Blogs?
                </h2>
                <span className="cursor-pointer pe-3 font-bold text-[#00AAA1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
              <p className="px-2 py-2 text-[15px] font-normal text-[#666] dark:text-gray-300">
                Fastribo Blogs participates in affiliate marketing programs.
                When you click on an affiliate link on our site and make a
                purchase, we may earn a commission. This commission helps
                support the maintenance and improvement of our website.
              </p>
            </div>

            <div className="rounded-md bg-[#F2F8F7] dark:bg-slate-800">
              <div className="flex items-center justify-between rounded-ss-md rounded-tr-md bg-[#DFF1F0] px-2 py-2 dark:bg-slate-700 ">
                <h2 className="text-xl font-bold capitalize text-[#222] sm:text-lg sm:font-medium dark:text-gray-200">
                  How do I know if a link is an affiliate link?
                </h2>
                <span className="cursor-pointer pe-3 font-bold text-[#00AAA1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
              <p className="px-2 py-2 text-[15px] font-normal text-[#666] dark:text-gray-300">
                Affiliate links are typically disclosed within the content. Look
                for a statement that mentions we may earn a commission if you
                make a purchase through the provided link. We prioritize
                transparency in our affiliate marketing practices.
              </p>
            </div>

            <div className="rounded-md bg-[#F2F8F7] dark:bg-slate-800">
              <div className="flex items-center justify-between rounded-ss-md rounded-tr-md bg-[#DFF1F0] px-2 py-2 dark:bg-slate-700 ">
                <h2 className="text-xl font-bold capitalize text-[#222] sm:text-lg sm:font-medium dark:text-gray-200">
                  Are the blog posts influenced by affiliate partnerships?
                </h2>
                <span className="cursor-pointer pe-3 font-bold text-[#00AAA1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
              <p className="px-2 py-2 text-[15px] font-normal text-[#666] dark:text-gray-300">
                No, our commitment is to provide honest and unbiased
                information. Affiliate partnerships do not impact the integrity
                of our content. We only promote products or services that we
                genuinely believe can benefit our audience.
              </p>
            </div>

            <div className="rounded-md bg-[#F2F8F7] dark:bg-slate-800">
              <div className="flex items-center justify-between rounded-ss-md rounded-tr-md bg-[#DFF1F0] px-2 py-2 dark:bg-slate-700 ">
                <h2 className="text-xl font-bold capitalize text-[#222] sm:text-lg sm:font-medium dark:text-gray-200">
                  How can I disable cookies on Fastribo Blogs?
                </h2>
                <span className="cursor-pointer pe-3 font-bold text-[#00AAA1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
              <p className="px-2 py-2 text-[15px] font-normal text-[#666] dark:text-gray-300">
                Please refer to our Cookie Policy for detailed information on
                how to manage cookies and tracking technologies on our website.
              </p>
            </div>

            <div className="rounded-md bg-[#F2F8F7] dark:bg-slate-800">
              <div className="flex items-center justify-between rounded-ss-md rounded-tr-md bg-[#DFF1F0] px-2 py-2 dark:bg-slate-700 ">
                <h2 className="text-xl font-bold capitalize text-[#222] sm:text-lg sm:font-medium dark:text-gray-200">
                  Can I advertise on Fastribo Blogs?
                </h2>
                <span className="cursor-pointer pe-3 font-bold text-[#00AAA1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
              <p className="px-2 py-2 text-[15px] font-normal text-[#666] dark:text-gray-300">
                For information about advertising opportunities, please contact
                us at [advertise@fastribo.com]. We offer various advertising
                options, including Google Ads, to reach our audience.
              </p>
            </div>

            <div className="rounded-md bg-[#F2F8F7] dark:bg-slate-800">
              <div className="flex items-center justify-between rounded-ss-md rounded-tr-md bg-[#DFF1F0] px-2 py-2 dark:bg-slate-700 ">
                <h2 className="text-xl font-bold capitalize text-[#222] sm:text-lg sm:font-medium dark:text-gray-200">
                  How can I submit a guest post?
                </h2>
                <span className="cursor-pointer pe-3 font-bold text-[#00AAA1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
              <p className="px-2 py-2 text-[15px] font-normal text-[#666] dark:text-gray-300">
                We welcome guest contributions. If you`&apos;`re interested in
                submitting a guest post, please review our Guest Post Guidelines
                for details on the submission process and requirements.
              </p>
            </div>

            <div className="rounded-md bg-[#F2F8F7] dark:bg-slate-800">
              <div className="flex items-center justify-between rounded-ss-md rounded-tr-md bg-[#DFF1F0] px-2 py-2 dark:bg-slate-700 ">
                <h2 className="text-xl font-bold capitalize text-[#222] sm:text-lg sm:font-medium dark:text-gray-200">
                  How do I report a technical issue on the website?
                </h2>
                <span className="cursor-pointer pe-3 font-bold text-[#00AAA1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
              <p className="px-2 py-2 text-[15px] font-normal text-[#666] dark:text-gray-300">
                If you encounter any technical issues or have suggestions for
                improvement, please reach out to our technical support team at
                [techsupport@fastribo.com].
              </p>
            </div>

            <div className="rounded-md bg-[#F2F8F7] dark:bg-slate-800">
              <div className="flex items-center justify-between rounded-ss-md rounded-tr-md bg-[#DFF1F0] px-2 py-2 dark:bg-slate-700 ">
                <h2 className="text-xl font-bold capitalize text-[#222] sm:text-lg sm:font-medium dark:text-gray-200">
                  Do you have a mobile app?
                </h2>
                <span className="cursor-pointer pe-3 font-bold text-[#00AAA1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
              <p className="px-2 py-2 text-[15px] font-normal text-[#666] dark:text-gray-300">
                Currently, Fastribo Blogs is accessible through web browsers on
                mobile devices. We do not have a dedicated mobile app at this
                time.
              </p>
            </div>

            <div className="rounded-md bg-[#F2F8F7] dark:bg-slate-800">
              <div className="flex items-center justify-between rounded-ss-md rounded-tr-md bg-[#DFF1F0] px-2 py-2 dark:bg-slate-700 ">
                <h2 className="text-xl font-bold capitalize text-[#222] sm:text-lg sm:font-medium dark:text-gray-200">
                  How can I contact Fastribo Blogs for further assistance?
                </h2>
                <span className="cursor-pointer pe-3 font-bold text-[#00AAA1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
              <p className="px-2 py-2 text-[15px] font-normal text-[#666] dark:text-gray-300">
                For general inquiries, you can reach us at [info@fastribo.com].
                Visit our{" "}
                <Link href={"/contact-us"} className="text-[#00AAA1]">
                  Contact Us
                </Link>{" "}
                page for specific departmental contacts.
              </p>
            </div>
          </div>

          {/* another question */}
          <div className="space-y-3 rounded-md bg-[#F2F8F7] dark:bg-slate-700 py-5 text-center sm:py-10">
            <h2 className="text-lg font-medium text-[#222] sm:text-xl dark:text-gray-300">
              Cant find an answer to your question?
            </h2>
            <button className="rounded-md border border-[#00AAA1] px-3 py-1 text-sm text-[#222] duration-150 ease-linear hover:bg-[#00AAA1] hover:text-white sm:px-4 sm:py-2 dark:text-gray-300">
              <Link
                href={"/contact-us"}
                className="flex items-center justify-center gap-2"
              >
                Contact us{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
