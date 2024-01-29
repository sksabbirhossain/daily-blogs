import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="my-5 px-2 sm:my-10 sm:px-0">
      <div className="container mx-auto">
        <div className="space-y-10">
          <div className="space-y-5">
            <h1 className="text-2xl font-semibold">Privacy Policy</h1>
            <p className="dark:text-gray-300">
              Thank you for visiting{" "}
              <Link href="/">
                <span className="font-medium text-[#00AAA1]">
                  Fastribo blogs.
                </span>
              </Link>{" "}
              This Privacy Policy outlines how we collect, use, and protect the
              information you provide when using our website. By accessing or
              using our services, you agree to the terms outlined in this
              policy.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-[#00AAA1]">
              Information We Collect
            </h2>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Personal Information</h3>
              <p className="dark:text-gray-300">
                We may collect personal information such as names, email
                addresses, and other relevant details when voluntarily provided
                by our visitors. This information is collected for purposes such
                as newsletter subscriptions, account creation, or contact forms.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Non-Personal Information</h3>
              <p className="dark:text-gray-300">
                We also gather non-personal information, including but not
                limited to browser type, device information, and IP addresses,
                to enhance the user experience and analyze website traffic.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-[#00AAA1]">
              Use of Information
            </h2>
            <div className="space-y-2">
              <p className="dark:text-gray-300">
                We use collected information for the following purposes:
              </p>
              <p className="dark:text-gray-300">
                1. <span className="font-bold">Communication:</span> To respond
                to inquiries, comments, or requests submitted by visitors.
              </p>
              <p className="dark:text-gray-300">
                2. <span className="font-bold">Improvement:</span> To enhance
                and personalize user experience on our website.
              </p>
              <p className="dark:text-gray-300">
                3. <span className="font-bold">Analytics:</span> To analyze
                website performance and optimize content.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-[#00AAA1]">
              Cookies and Tracking Technologies
            </h2>
            <p className="dark:text-gray-300">
              We may use cookies and similar tracking technologies to improve
              the functionality of our website and provide a personalized
              experience. Visitors can manage cookie preferences through their
              browser settings.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-[#00AAA1]">
              California Consumer Privacy Act (CCPA) Compliance:
            </h2>
            <p className="dark:text-gray-300">
              If you are a California resident, you have certain rights under
              the CCPA, including the right to request information about the
              categories of personal information we have collected and the right
              to request deletion of your personal information.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-[#00AAA1]">
              California Privacy Rights Act (CPRA) Compliance:
            </h2>
            <p className="dark:text-gray-300">
              The CPRA may provide additional rights to California residents,
              including the right to limit the use of sensitive personal
              information and the establishment of a privacy enforcement agency.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-[#00AAA1]">
              General Data Protection Regulation (GDPR) Compliance:
            </h2>
            <p className="dark:text-gray-300">
              If you are a resident of the European Economic Area (EEA), you
              have certain rights under the GDPR, including the right to access,
              rectify, or erase your personal data.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-[#00AAA1]">Google Ads</h2>
            <p className="dark:text-gray-300">
              Our website may feature Google Ads. Please note that Google uses
              cookies to serve ads based on a {"user's"} prior visits to our
              website and other sites. You can opt out of personalized
              advertising by visiting {"Google's"} Ad Settings.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-[#00AAA1]">
              {"Children's"} Privacy
            </h2>
            <p className="dark:text-gray-300">
              We are committed to protecting the privacy of children. If you are
              under 13, please do not provide any personal information on our
              website without parental consent.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-[#00AAA1]">
              Third-Party Links
            </h2>
            <p className="dark:text-gray-300">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-[#00AAA1]">Security</h2>
            <p className="dark:text-gray-300">
              We prioritize the security of your information and employ measures
              to safeguard against unauthorized access, disclosure, or
              alteration.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-[#00AAA1]">
              Changes to This Privacy Policy
            </h2>
            <p className="dark:text-gray-300">
              We reserve the right to update this Privacy Policy periodically.
              Any changes will be effective upon posting the revised policy on
              our website.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-[#00AAA1]">Contact Us</h2>
            <p className="dark:text-gray-300">
              If you have any questions or concerns regarding our Privacy
              Policy, please{" "}
              <Link href="/contact-us" className="font-medium text-[#00AAA1]">
                contact us
              </Link>
              . By using our website, you consent to the terms outlined in this
              Privacy Policy. Thank you for entrusting us with your information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
