"use client";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import RootLayout, { getPageMetadata } from "../layout";

function PrivacyPolicy() {
  const pageMetadata = getPageMetadata("Privacy Policy");
  return (
    <RootLayout pageName="Privacy Policy || Your data is secure here.">
      <Header />
      <section className="py-24 max-w-7xl mx-auto text-white bg-blueGray-50 overflow-hidden">
        <a
          href="/"
          className="logo-container hidden sm:flex justify-center font-bold text-4xl my-10 "
        >
          <div className="letter">L</div>
          <div className="letter">Y</div>
          <div className="letter">Z</div>
          <div className="letter">E</div>
          <div className="letter">R</div>
          <div className="letter">S</div>
          <div className="letter">L</div>
          <div className="letter">A</div>
          <div className="letter">B</div>
        </a>

        <h1 className="text-3xl font-bold my-6 text-center">Privacy Policy</h1>
        <p className="mb-4">
          At Lyzerslab, we are committed to protecting your privacy and ensuring
          the security of your personal information. This Privacy Policy
          outlines the types of personal information we collect, how we use it,
          and the measures we take to safeguard your information.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          Information Collection and Use
        </h2>
        <p className="mb-4">
          We collect personal information when you interact with our website,
          including when you submit forms, sign up for newsletters, or contact
          us for inquiries. The types of personal information we may collect
          include your name, email address, phone number, and any other
          information you voluntarily provide to us.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          Information Sharing and Disclosure
        </h2>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent. Your personal information may
          be shared with trusted third-party service providers who assist us in
          operating our website, conducting business, or servicing you, provided
          that they agree to keep this information confidential.
        </p>
        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p className="mb-4">
          We implement a variety of security measures to maintain the safety of
          your personal information when you enter, submit, or access your
          information. We use encryption technology to protect sensitive
          information transmitted online and restrict access to your personal
          information to employees who need it to perform specific tasks.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We reserve the right to update or modify this Privacy Policy at any
          time without prior notice. Any changes to this Privacy Policy will be
          posted on this page, and the effective date will be updated
          accordingly.
        </p>
        <p>
          If you have any questions about this Privacy Policy or our practices,
          please contact us at privacy@lyzerslab.com.
        </p>
      </section>
      <Footer />
    </RootLayout>
  );
}

export default PrivacyPolicy;
