import React from 'react';
import { useRouter } from '../router/Router';

export const TermsPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32 bg-paper min-h-screen">
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        <div className="flex items-center gap-4 text-xs font-sans-mono text-graphite mb-10">
          <button onClick={() => navigate('/')} className="hover:text-ink transition-colors uppercase tracking-widest">Home</button>
          <span>/</span>
          <span className="text-ink uppercase tracking-widest">Terms of Service</span>
        </div>

        <h1 className="font-serif-display text-4xl sm:text-5xl text-ink leading-[1.1] mb-12">
          Terms of Service
        </h1>

        <div className="prose max-w-none font-sans-body text-base text-graphite leading-relaxed space-y-8">
          <p>
            <strong>Last Updated: October 2026</strong>
          </p>
          <p>
            These Terms of Service ("Terms") govern your access to and use of the services provided by Axorks Technologies (Pvt) Ltd. ("Axorks", "we", "us", or "our"). By engaging our engineering services or accessing our website, you agree to be bound by these Terms.
          </p>

          <h2 className="font-serif-headline text-2xl text-ink mt-12 mb-4">1. Engineering Engagements</h2>
          <p>
            All engineering services provided by Axorks are governed by specific, fixed-price Statements of Work (SOW) or Technical Specification Documents. We do not engage in open-ended hourly billing.
          </p>
          <p>
            Deliverables are evaluated against the agreed-upon SOW. Client approval of staging environments constitutes acceptance of the milestone deliverables.
          </p>

          <h2 className="font-serif-headline text-2xl text-ink mt-12 mb-4">2. Intellectual Property Rights</h2>
          <p>
            Upon full payment of the final milestone invoice as outlined in the respective SOW, Axorks transfers 100% of the commercial intellectual property rights, source code, and deployment architectures to the Client.
          </p>
          <p>
            Prior to final payment, Axorks retains all rights, title, and interest in the developed software. We do not utilize hostage licensing post-payment.
          </p>

          <h2 className="font-serif-headline text-2xl text-ink mt-12 mb-4">3. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Axorks shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our developed systems post-deployment.
          </p>

          <h2 className="font-serif-headline text-2xl text-ink mt-12 mb-4">4. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or provincial courts located in Islamabad, Pakistan.
          </p>
        </div>

      </section>
    </div>
  );
};
