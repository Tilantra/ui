import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
    return (
        <div className="min-h-screen bg-transparent">
            <Header />
            <main>
                <HeroSection />
                <AboutUsSection />
                <SolutionsSection />
                <UseCasesSection />
                <FeaturesSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
