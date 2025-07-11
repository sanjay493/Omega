
import Timeline from '@/components/Timeline';
import ContactForm from '@/components/ContactForm';
import ProofSection from '@/components/ProofSection';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="container mx-auto p-12">
        <Timeline />
        <ProofSection />
        <ContactForm />
      </div>
    </main>
  );
}
