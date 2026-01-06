import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import UseCasesSection from "@/components/sections/UseCasesSection";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <HeroSection />
                <AboutUsSection />
                <SolutionsSection />
                <UseCasesSection />
                <FeaturesSection />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
