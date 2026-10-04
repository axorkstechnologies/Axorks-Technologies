import React from 'react';
import { useRouter } from '../router/Router';

export const PrivacyPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32 bg-paper min-h-screen">
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        <div className="flex items-center gap-4 text-xs font-sans-mono text-graphite mb-10">
          <button onClick={() => navigate('/')} className="hover:text-ink transition-colors uppercase tracking-widest">Home</button>
          <span>/</span>
          <span className="text-ink uppercase tracking-widest">Privacy Policy</span>
        </div>

        <h1 className="font-serif-display text-4xl sm:text-5xl text-ink leading-[1.1] mb-12">
          Privacy Policy
        </h1>

        <div className="prose max-w-none font-sans-body text-base text-graphite leading-relaxed space-y-8">
          <p>
            <strong>Last Updated: October 2026</strong>
          </p>
          <p>
            Axorks Technologies (Pvt) Ltd. ("Axorks", "we", "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or engage our engineering services.
          </p>

          <h2 className="font-serif-headline text-2xl text-ink mt-12 mb-4">1. Information We Collect</h2>
          <p>
            We may collect personal data including, but not limited to:
            <br/><br/>
            - Identity Data: Name, title, company name.
            <br/>
            - Contact Data: Email address, telephone numbers, billing addresses.
            <br/>
            - Technical Data: IP address, browser type, time zone setting, and operating system.
          </p>

          <h2 className="font-serif-headline text-2xl text-ink mt-12 mb-4">2. How We Use Your Data</h2>
          <p>
            We use your data exclusively to:
            <br/><br/>
            - Provide and manage our engineering engagements.
            <br/>
            - Process payments and deliver staging environments.
            <br/>
            - Communicate regarding technical scoping and milestones.
            <br/>
            - Maintain the security and performance of our infrastructure.
          </p>

          <h2 className="font-serif-headline text-2xl text-ink mt-12 mb-4">3. Data Security</h2>
          <p>
            We have implemented stringent architectural security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees and partners who have a strict business need to know.
          </p>

          <h2 className="font-serif-headline text-2xl text-ink mt-12 mb-4">4. Non-Disclosure Agreements (NDA)</h2>
          <p>
            All client data, intellectual property, and proprietary architectures discussed during our Technical Discovery phase are treated as strictly confidential. We execute standard NDAs prior to accessing your internal systems or source code.
          </p>

          <h2 className="font-serif-headline text-2xl text-ink mt-12 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:hello@axorks.com" className="text-ink underline">hello@axorks.com</a>.
          </p>
        </div>

      </section>
    </div>
  );
};
