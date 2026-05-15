import ParticlesBackground from '../components/ParticlesBackground';





export default function PrivacyPolicy() {
  return (
    <div className=" relative z-10  mx-auto px-6 py-12 text-slate-100 bg-slate-950">
        <ParticlesBackground/>
      <h1 className="text-4xl font-bold mb-6 text-cyan-500  bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent pb-2 animate-gradient">
        Privacy Policy
      </h1>

      <p className="mb-4">
        At <strong>DueDiligence</strong>, we value your privacy and are
        committed to protecting your personal information. This Privacy Policy
        explains how we collect, use, and safeguard your data when you use our
        website and services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-cyan-300 ">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address,
        phone number, and any other details you provide when registering,
        contacting us, or using our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-cyan-300">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">
        We use your information to:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Provide and improve our services</li>
        <li>Communicate with you</li>
        <li>Process requests and transactions</li>
        <li>Ensure platform security</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-cyan-300">
        3. Data Protection
      </h2>
      <p className="mb-4">
        We implement appropriate security measures to protect your personal
        data from unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-cyan-300">
        4. Sharing of Information
      </h2>
      <p className="mb-4">
        We do not sell or rent your personal data. We may share information
        only when required by law or to provide essential services (e.g.,
        payment processing or hosting providers).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-cyan-300">
        5. Cookies
      </h2>
      <p className="mb-4">
        Our website may use cookies to improve user experience, analyze traffic,
        and personalize content.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-cyan-300">
        6. Your Rights
      </h2>
      <p className="mb-4">
        You have the right to access, update, or request deletion of your
        personal data at any time.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-cyan-300">
        7. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will
        be posted on this page with an updated revision date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-cyan-300">
        8. Contact Us
      </h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at:
        <br />
     <a
  href="mailto:support@duediligence.com"
  className="text-cyan-400 hover:underline"
>
  support@duediligence.com
</a>
      </p>

      <p className="mt-10 text-sm text-slate-400">
        Last updated: 2026
      </p>
    </div>
  );
}