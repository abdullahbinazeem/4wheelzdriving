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
    <div className="">
      <Hero />
      <About />
      <LearnerBanner />
      <Training />
      <Lessons />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
