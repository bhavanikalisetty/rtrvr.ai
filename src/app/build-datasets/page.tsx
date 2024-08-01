"use client";

import DataQueryComponent from "../components/Elements/DataQueryComponent";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BuildDatasetsPage() {
    return (
        <div className="flex flex-col justify-between min-h-screen bg-gray-800 p-2 mx-auto max-w-full">
            <Header className="my-5" />
                <DataQueryComponent />
            <Footer />
        </div>
    )
   
}