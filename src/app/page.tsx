import { MessageCircle, PhoneCall, PhoneCallIcon } from "lucide-react";
import About from "./_components/about";
import ContactForm from "./_components/contactform";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import LearnerBanner from "./_components/learnerBanner";
import Lessons from "./_components/lessons";
import Testimonials from "./_components/testimonials";
import Training from "./_components/training";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <div className="h-10 w-full" />
      <LearnerBanner />
      <About />
      <div className="h-20 w-full" />
      {/* <Training /> */}
      <Testimonials />
      <Lessons />
      <ContactForm />
      <Footer />
      <div className="sticky bottom-10 left-[100%] inline-block gap-6 pr-6">
        <div className="mb-4 rounded-full bg-yellow-600 p-4">
          <a href="tel:250-884-8343">
            <PhoneCallIcon size={32} className="text-white" />
          </a>
        </div>
        <div className="rounded-full bg-green-500 p-4">
          <a href="https://web.whatsapp.com/">
            <MessageCircle size={32} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
