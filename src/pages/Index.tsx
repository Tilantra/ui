import EditorialHeader from "@/components/editorial/EditorialHeader";
import EditorialHero from "@/components/editorial/EditorialHero";
import ProductSplit from "@/components/editorial/ProductSplit";
import CredibilityStrip from "@/components/editorial/CredibilityStrip";
import StorySection from "@/components/editorial/StorySection";
import ProductSections from "@/components/editorial/ProductSections";
import EditorialFooter from "@/components/editorial/EditorialFooter";
import SplashCursor from "@/components/ui/SplashCursor";

const Index = () => {
    return (
        <div className="editorial min-h-screen relative z-0">
            <SplashCursor className="splash-cursor opacity-[0.45] dark:opacity-[0.4]" DENSITY_DISSIPATION={2.4} COLOR_UPDATE_SPEED={14} />
            <EditorialHeader accent="orange" />
            <main>
                <EditorialHero />
                <ProductSplit />
                <CredibilityStrip />
                <StorySection />
                <ProductSections />
            </main>
            <EditorialFooter accent="orange" />
        </div>
    );
};

export default Index;
