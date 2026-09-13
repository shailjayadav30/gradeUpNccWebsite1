
import Hero from "@/components/Hero";
import ProcessSteps from "@/components/ProcessSteps";
import CustomisationFaq from "@/components/CustomisationFaq";
import Footer from "@/components/Footer";
import NccShowcase from "@/components/NccShowcase";
import { QuoteFormProvider } from "@/components/QuoteFormCOntext";

export default function Home() {
  return (
    <main>
      <QuoteFormProvider>

      <Hero />
      <NccShowcase />
      <ProcessSteps />
      <CustomisationFaq />
      <Footer />
      </QuoteFormProvider>
    </main>
  );
}
