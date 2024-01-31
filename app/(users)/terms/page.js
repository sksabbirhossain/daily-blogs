import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions - Fastribo Blogs",
};

const Terms = () => {
  return (
    <div className="container mx-auto px-2 py-5 sm:px-0 sm:py-10">
      <div className="space-y-5">
        <div>
          <h1 className="text-xl font-semibold sm:text-3xl">
            <span className="text-[#00AAA1]">Fastribo Blogs</span> - Terms and
            Conditions
          </h1>
        </div>

        <div>
          <p className="dark:text-gray-300">
            Welcome to <span className="text-[#00AAA1]">Fastribo Blogs</span>!
            By accessing and using our website (
            <span className="text-[#00AAA1]">https://blog.fastribo.com</span>),
            you agree to comply with and be bound by the following terms and
            conditions. Please read the following carefully:
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p className="dark:text-gray-300">
            By accessing and using{" "}
            <span className="text-[#00AAA1]">Fastribo Blogs</span>, you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms and Conditions. If you do not agree with any part of
            these terms, please do not use our website.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">2. Affiliate Marketing</h2>
          <p className="dark:text-gray-300">
            <span className="text-[#00AAA1]">Fastribo Blogs</span> engages in
            affiliate marketing, wherein we may earn a commission for products
            or services purchased through our affiliate links. The inclusion of
            affiliate links in our blog posts does not affect the integrity of
            our content. We strive to provide honest and unbiased information.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">3. Blog Posts</h2>
          <p className="dark:text-gray-300">
            Our website focuses on delivering informative and engaging blog
            posts. The content is for general informational purposes only and
            should not be considered professional advice. We do our best to
            ensure the accuracy and timeliness of the information, but we make
            no representations or warranties of any kind, express or implied,
            about the completeness, accuracy, reliability, or suitability of the
            information.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">4. Google Ads</h2>
          <p className="dark:text-gray-300">
            <span className="text-[#00AAA1]">Fastribo Blogs</span> may display
            Google Ads on its website. These ads are provided by Google and are
            subject to Google's terms and privacy policies. We do not endorse
            the products or services advertised in these ads. Your interactions
            with third-party advertisers on our website are solely between you
            and the advertiser.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">5. User Conduct</h2>
          <p className="dark:text-gray-300">
            When using <span className="text-[#00AAA1]">Fastribo Blogs</span>,
            you agree not to engage in any unlawful or prohibited activities.
            This includes, but is not limited to, the following:
          </p>
          <ul className="list-inside list-disc dark:text-gray-300">
            <li>Violating any applicable laws or regulations.</li>
            <li>
              Posting or transmitting any content that is unlawful, threatening,
              defamatory, obscene, or otherwise objectionable.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">6. Privacy Policy</h2>
          <p className="dark:text-gray-300">
            Please review our{" "}
            <Link href={"/privacy-policy"} className="text-[#00AAA1]">
              Privacy Policy
            </Link>{" "}
            to understand how we collect, use, and protect your personal
            information.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">
            7. Changes to Terms and Conditions
          </h2>
          <p className="dark:text-gray-300">
            <span className="text-[#00AAA1]">Fastribo Blogs</span> reserves the
            right to update or modify these Terms and Conditions at any time
            without prior notice. It is your responsibility to review these
            terms periodically for changes.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">8. Contact Information</h2>
          <p className="dark:text-gray-300">
            If you have any questions or concerns about these Terms and
            Conditions, please{" "}
            <Link href={"/contact-us"}>
              <span className="text-[#00AAA1]">contact us</span>
            </Link>
            .
          </p>
          <p className="dark:text-gray-300">
            By using <span className="text-[#00AAA1]">Fastribo Blogs</span>, you
            agree to abide by these Terms and Conditions. Thank you for visiting
            and being part of our community!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
