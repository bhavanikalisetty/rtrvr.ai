"use client";

import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col justify-between min-h-screen bg-gray-800 p-2 mx-auto max-w-full">
            <Header className="my-5" />
            <div className="container mx-auto px-4 py-8"> 
                <PrivacyPolicy />
            </div>
            <Footer />
        </div>

    )
}