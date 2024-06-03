"use client"; // For Client Component functionality

import React, { useState, useEffect } from "react";

interface Municipality {
  municipality_name: string;
  financial_audit_link: string; 
}

const allCaliforniaMunicipalities = [
    {
      "municipality_name": "Santa Clara",
      "financial_audit_link": "https://files.santaclaracounty.gov/migrated/FY2023_SCC_ACFR_0.pdf"
    },
    {
      "municipality_name": "Belmont",
      "financial_audit_link": "https://www.belmont.gov/home/showpublisheddocument/22873/638374545704930000"
    },
    {
      "municipality_name": "Richmond",
      "financial_audit_link": "http://www.ci.richmond.ca.us/2969/Comprehensive-Annual-Financial-Report-CA"
    },
    {
      "municipality_name": "Oakland",
      "financial_audit_link": "https://cao-94612.s3.us-west-2.amazonaws.com/documents/2023-City-of-Oakland-ACFR_Final-122723.pdf"
    },
    {
      "municipality_name": "Berkeley",
      "financial_audit_link": "https://www.berkeleyca.gov/sites/default/files/documents/annual-comprehensive-financial-report-fy2023.pdf"
    },
    {
      "municipality_name": "Antiochca",
      "financial_audit_link": "https://www.antiochca.gov/fc/finance/CAFR_2023.pdf"
    },
    {
      "municipality_name": "Apple Valley",
      "financial_audit_link": "https://www.applevalley.org/home/showpublisheddocument/32375/637920957613170000"
    },
    {
      "municipality_name": "Camarillo",
      "financial_audit_link": "http://www.ci.camarillo.ca.us/departments/finance/budget_financial_reporting___treasury/acfr.php"
    },
    {
      "municipality_name": "Chula Vista",
      "financial_audit_link": "https://www.chulavistaca.gov/home/showpublisheddocument/27412/638411003266830000"
    },
    {
      "municipality_name": "Artesia",
      "financial_audit_link": "https://www.cityofartesia.us/DocumentCenter/View/7436/FY-2021-22-ACFR"
    }
  ]
  

const ACFRTable: React.FC = () => {
  const [allMunicipalities, setAllMunicipalities] = useState<Municipality[]>([]); // For storing all data
  const displayMunicipalities = [
    {
        "municipality_name": "Artesia",
        "financial_audit_link": "https://www.cityofartesia.us/DocumentCenter/View/7436/FY-2021-22-ACFR"
    },
    {
        "municipality_name": "Berkeley",
        "financial_audit_link": "https://www.berkeleyca.gov/sites/default/files/documents/annual-comprehensive-financial-report-fy2023.pdf"
    },
    {
        "municipality_name": "Oakland",
        "financial_audit_link": "https://cao-94612.s3.us-west-2.amazonaws.com/documents/2023-City-of-Oakland-ACFR_Final-122723.pdf"
    },
    {
        "municipality_name": "Santa Clara",
        "financial_audit_link": "https://files.santaclaracounty.gov/migrated/FY2023_SCC_ACFR_0.pdf"
    },
    {
        "municipality_name": "Belmont",
        "financial_audit_link": "https://www.belmont.gov/home/showpublisheddocument/22873/638374545704930000"
    },
    { 
        "municipality_name": "...",
        "financial_audit_link": "..."
    }, // Placeholder for "more"
  ];

useEffect(() => {
    // Can Fetch ALL municipality data from API or JSON (replace with your actual logic)
    // fetch("/api/municipalities")
    //   .then((res) => res.json())
    //   .then(setAllMunicipalities);
    // Set the state with the constant data
    setAllMunicipalities(allCaliforniaMunicipalities);
}, []);

  const handleExportToCSV = () => {
    const csvContent =
      "Municipality Name,Financial Audit Link\n" +
      allMunicipalities
        .map((m) => `${m.municipality_name},${m.financial_audit_link}`)
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "california_municipalities_audits.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-white">California Municipalities</h2>
      <table className="table-auto w-full">
        <thead>
            <tr>
                <th className="px-4 py-2 text-white">Municipality Name</th>
                <th className="px-4 py-2 text-white">Financial Audit Link</th>
            </tr>
            </thead>
            <tbody>
                {displayMunicipalities.map((m, index) => (
                    <tr key={index}>
                        <td className="border px-4 py-2 text-white">{m.municipality_name}</td>
                        <td className="border px-4 py-2 text-white">{m.financial_audit_link}</td>
                    </tr>
                ))}
            </tbody>
      </table>
      <button
        onClick={handleExportToCSV}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Export to CSV
      </button>
    </div>
  );
};

export default ACFRTable;