import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExpandingGallery from "@/components/ExpandingGallery";
import Story from "@/components/Story";
import SignatureMenu from "@/components/SignatureMenu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ReservationCta from "@/components/ReservationCta";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ExpandingGallery />
        <Story />
        <SignatureMenu />
        <Gallery />
        <Testimonials />
        <ReservationCta />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
