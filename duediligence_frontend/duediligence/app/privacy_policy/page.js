import ParticlesBackground from '../components/ParticlesBackground';

const policySections = [
  {
    title: '1. Information We Collect',
    body:
      'We may collect personal information such as your name, email address, phone number, and any other details you provide when registering, contacting us, or using our services.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'We use your information to:',
    bullets: [
      'Provide and improve our services',
      'Communicate with you',
      'Process requests and transactions',
      'Ensure platform security',
    ],
  },
  {
    title: '3. Data Protection',
    body:
      'We implement appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.',
  },
  {
    title: '4. Sharing of Information',
    body:
      'We do not sell or rent your personal data. We may share information only when required by law or to provide essential services such as payment processing or hosting providers.',
  },
  {
    title: '5. Cookies',
    body:
      'Our website may use cookies to improve user experience, analyze traffic, and personalize content.',
  },
  {
    title: '6. Your Rights',
    body:
      'You have the right to access, update, or request deletion of your personal data at any time.',
  },
  {
    title: '7. Changes to This Policy',
    body:
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.',
  },
];

const contactEmail = 'support@duediligence.com';
const lastUpdated = '2026';

function PolicySection({ title, body, bullets }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-3 text-cyan-300">{title}</h2>
      <p className="mb-4">{body}</p>
      {bullets?.length ? (
        <ul className="list-disc ml-6 mb-4">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="relative z-10 mx-auto px-6 py-12 text-slate-100 bg-slate-950">
      <ParticlesBackground />

      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-6 text-cyan-500 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent pb-2 animate-gradient">
          Privacy Policy
        </h1>
        <p className="mb-4">
          At <strong>DueDiligence</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
        </p>
      </header>

      <main>
        {policySections.map((section) => (
          <PolicySection key={section.title} {...section} />
        ))}

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3 text-cyan-300">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <a href={`mailto:${contactEmail}`} className="text-cyan-400 hover:underline">
              {contactEmail}
            </a>
          </p>
        </section>
      </main>

      <p className="mt-10 text-sm text-slate-400">Last updated: {lastUpdated}</p>
    </div>
  );
}
