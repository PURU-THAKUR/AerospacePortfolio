import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import CloudAccount from "./components/CloudAccount";
import DeliveryAgent from "./components/DeliveryAgent";
import WelcomeModal from "./components/WelcomeModal";
import ServiceModal from "./components/ServiceModal";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";

export default function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const loggedInUser = useQuery(api.auth.loggedInUser);

  useEffect(() => {
    // Auto-hide welcome modal after 3 seconds if user is logged in
    if (loggedInUser && showWelcomeModal) {
      const timer = setTimeout(() => {
        setShowWelcomeModal(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loggedInUser, showWelcomeModal]);

  const showSection = (section: string) => {
    setCurrentSection(section);
    setMobileNavOpen(false);
  };

  const showServiceModalHandler = (service: any) => {
    setSelectedService(service);
    setShowServiceModal(true);
  };

  const closeModal = () => {
    setShowWelcomeModal(false);
    setShowServiceModal(false);
  };

  const skipWelcome = () => {
    setShowWelcomeModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Modals */}
      {showWelcomeModal && (
        <WelcomeModal onClose={closeModal} onSkip={skipWelcome} />
      )}
      
      {showServiceModal && selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={closeModal}
          onTryService={() => setCurrentSection("comingSoon")}
        />
      )}

      {/* Header */}
      <Header 
        currentSection={currentSection}
        showSection={showSection}
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />

      {/* Main Content */}
      <main className="flex-1">
        {currentSection === "home" && (
          <Home onServiceClick={showServiceModalHandler} />
        )}
        {currentSection === "cart" && <Cart />}
        {currentSection === "orders" && <Orders />}
        {currentSection === "cloud" && <CloudAccount />}
        {currentSection === "delivery" && <DeliveryAgent />}
        {currentSection === "comingSoon" && (
          <ComingSoon onBackToServices={() => setCurrentSection("home")} />
        )}
      </main>

      {/* Footer */}
      <Footer />

      <Toaster />
    </div>
  );
}
