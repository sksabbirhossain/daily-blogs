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
            Fastribo Blogs is a place where you can find your perfect blogs.
          </h1>

          <div className="space-y-3 text-sm font-normal text-gray-800 dark:text-gray-300">
            <p>
              Explore a world of daily wonders with{" "}
              <span className="font-semibold text-[#00AAA1]">
                Fastribo Blogs
              </span>
              . Immerse yourself in a diverse range of articles, from insightful
              reflections to practical tips. Stay informed, inspired, and
              engaged every day with our thoughtfully curated content. Join us
              on a journey of continuous learning and discovery. Your daily dose
              of knowledge and inspiration awaits. Start exploring now!
            </p>
            <h3 className="text-lg font-medium">
              The best ideas can change who we are.
            </h3>
            <p>
              In the ever-evolving tapestry of human existence, the power of
              ideas stands as a transformative force, reshaping the very essence
              of who we are. This profound statement encapsulates the profound
              impact that innovative and groundbreaking ideas can have on
              individuals and society at large. Ideas are the seeds of progress,
              capable of sprouting into revolutions that redefine our
              perspectives, beliefs, and aspirations.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="mb-10 flex w-full max-w-[1076px] flex-col items-center justify-center space-y-3 rounded-md bg-[#F2F8F7] px-2 py-10 md:px-0 dark:bg-slate-800 text-center">
          <h1 className="text-3xl font-semibold capitalize text-[#222] dark:text-gray-200">
            want to write on Fastribo Blogs?
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
