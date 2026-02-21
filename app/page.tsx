import {
  Hero,
  Features,
  WhyBuy,
  VideoSection,
  Contact,
  OrderForm,
  Footer,
} from "./components/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-body text-gray-900 antialiased">
      <Hero />
      <Features />
      <WhyBuy />
      <VideoSection />
      <Contact />
      <OrderForm />
      <Footer />
    </div>
  );
}
