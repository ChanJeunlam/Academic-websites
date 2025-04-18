import Header from "@/components/header"
import ProfileSection from "@/components/profile-section"
import ResearchSection from "@/components/research-section"
import PublicationsSection from "@/components/publications-section"
import TeachingSection from "@/components/teaching-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <ProfileSection />
        <ResearchSection />
        <PublicationsSection />
        <TeachingSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
