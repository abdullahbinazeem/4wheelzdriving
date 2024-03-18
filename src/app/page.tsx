import About from "./_components/about";
import Hero from "./_components/hero";
import LearnerBanner from "./_components/learnerBanner";
import Lessons from "./_components/lessons";
import Training from "./_components/training";

export default function Home() {
  return (
    <div className="mb-[1000px]">
      <Hero />
      <About />
      <LearnerBanner />
      <Training />
      <Lessons />
    </div>
  );
}
