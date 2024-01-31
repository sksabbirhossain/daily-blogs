import Link from "next/link";

export const metadata = {
  title: "About Us - Fastribo Blogs",
};

const About = () => {
  return (
    <>
      <div className="mb-10 flex w-full flex-col items-center justify-center bg-[#F2F8F7] px-2 py-10 md:px-0 dark:bg-slate-800">
        <div className="w-full max-w-[665px] space-y-5 text-center">
          <h1 className="text-3xl font-semibold text-[#222] dark:text-gray-200">
            <span className="text-[#00AAA1]">Fastribo Blogs</span> is a place
            where you can find your perfect blogs.
          </h1>

          <div className="space-y-3 text-sm font-normal text-gray-800 dark:text-gray-300">
            <p>
              Welcome to{" "}
              <span className="font-semibold text-[#00AAA1]">
                Fastribo Blogs
              </span>
              , where we strive to be your go-to destination for insightful and
              engaging content. Our journey began with a passion for sharing
              knowledge and creating a platform where individuals can discover
              valuable information.
            </p>
            <h3 className="text-lg font-medium">Our Mission</h3>
            <p>
              At{" "}
              <span className="font-semibold text-[#00AAA1]">
                Fastribo Blogs
              </span>
              , our mission is simple – to provide our audience with
              high-quality, informative, and entertaining blog posts. We believe
              in the power of knowledge to inspire, educate, and connect people
              from all walks of life.
            </p>
            <h3 className="text-lg font-medium">The Team</h3>
            <p>
              Our dedicated team of writers, editors, and technical experts work
              collaboratively to bring you content that covers a wide range of
              topics. We are committed to maintaining the highest standards of
              accuracy and integrity in all our publications.
            </p>
            <h3 className="text-lg font-medium">Transparency</h3>
            <p>
              We believe in transparency and want our readers to feel confident
              in the information they find on our site. Our content is free from
              bias, and we clearly disclose any affiliate relationships to
              maintain trust with our audience.
            </p>
            <h3 className="text-lg font-medium">Community Engagement</h3>
            <p>
              <span className="text-[#00AAA1]">Fastribo Blogs</span> is not just a platform; it's a community. We
              encourage our readers to share their thoughts, ask questions, and
              engage with our content. Your feedback is invaluable and helps us
              continuously improve.
            </p>
            <h3 className="text-lg font-medium">Join Us on Our Journey</h3>
            <p>
              Whether you're a seasoned reader or a first-time visitor, we
              invite you to join us on our journey of exploration and discovery.
              <span className="text-[#00AAA1]">Fastribo Blogs</span> is more than just a website; it's a place where
              knowledge meets curiosity, and connections are made.
            </p>{" "}
            <p>
              Thank you for being part of the Fastribo community. We look
              forward to sharing more exciting content with you!
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="mb-10 flex w-full max-w-[1076px] flex-col items-center justify-center space-y-3 rounded-md bg-[#F2F8F7] px-2 py-10 text-center md:px-0 dark:bg-slate-800">
          <h1 className="text-3xl font-semibold capitalize text-[#222] dark:text-gray-200">
            want to write on <span className="text-[#00AAA1]">Fastribo Blogs</span>?
          </h1>
          <p className="text-sm font-medium capitalize text-[#555] dark:text-gray-400">
            there have some simple steps, by following these steps you can be a
            regular author in
            <span className="font-semibold text-[#00AAA1]">
              {" "}
              Fastribo Blogs
            </span>
            .
          </p>
          <Link href="/contact-us">
            <button className="flex items-center space-x-1 rounded border border-[#00AAA1] px-4 py-2 text-sm text-[#00AAA1] duration-150 ease-linear hover:bg-[#00AAA1] hover:text-white">
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              <span>Write on Fastribo Bolgs</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
