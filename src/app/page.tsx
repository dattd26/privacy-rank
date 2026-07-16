import Header from "../sections/Header";
import Hero from "../sections/Hero";
import ComparisonTable from "../sections/ComparisonTable";
import BentoFeatures from "../sections/BentoFeatures";
import FAQ from "../sections/FAQ";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[72px] flex-grow flex flex-col">
        <Hero />
        <ComparisonTable />
        <BentoFeatures />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

