"use client"; // For Client Component functionality

import React, { useState, useEffect } from "react";

interface Municipality {
  name: string;
}

const allCaliforniaMunicipalities = [
    "Adelanto",
    "Agoura Hills",
    "Alameda",
    "Albany",
    "Alhambra",
    "Aliso Viejo",
    "Alturas",
    "Amador City",
    "American Canyon",
    "Anaheim",
    "Anderson",
    "Angels Camp",
    "Antioch",
    "Apple Valley",
    "Arcadia",
    "Arcata",
    "Arroyo Grande",
    "Artesia", 
    "Arvin",
    "Atascadero",
    "Atherton",
    "Atwater",
    "Auburn",
    "Avalon",
    "Avenal",
    "Azusa",
    "Bakersfield",
    "Baldwin Park",
    "Banning",
    "Barstow",
    "Beaumont",
    "Bell",
    "Bell Gardens",
    "Bellflower",
    "Belmont",
    "Belvedere",
    "Benicia",
    "Berkeley",
    "Beverly Hills",
    "Big Bear Lake",
    "Biggs",
    "Bishop",
    "Blue Lake",
    "Blythe",
    "Bradbury",
    "Brea",
    "Brentwood",
    "Brisbane",
    "Buellton",
    "Buena Park",
    "Burbank",
    "Burlingame",
    "Calabasas",
    "Calexico",
    "California City",
    "Calimesa",
    "Calipatria",
    "Calistoga",
    "Camarillo",
    "Campbell",
    "Canyon Lake",
    "Capitola",
    "Carlsbad",
    "Carmel-by-the-Sea",
    "Carpinteria",
    "Carson",
    "Cathedral City",
    "Ceres",
    "Cerritos",
    "Chico",
    "Chino",
    "Chino Hills",
    "Chowchilla",
    "Chula Vista",
    "Citrus Heights",
    "Claremont",
    "Clayton",
    "Clearlake",
    "Clovis",
    "Coachella",
    "Coalinga",
    "Colfax",
    "Colma",
    "Colton",
    "Commerce",
    "Compton",
    "Concord",
    "Corcoran",
    "Corning",
    "Corona",
    "Coronado",
    "Costa Mesa",
    "Cotati",
    "Covina",
    "Crescent City",
    "Cudahy",
    "Culver City",
    "Cupertino",
    "Cypress",
    "Daly City",
    "Dana Point",
    "Davis",
    "Del Mar",
    "Del Rey Oaks",
    "Desert Hot Springs",
    "Diamond Bar",
    "Dinuba",
    "Dixon",
    "Dorris",
    "Dos Palos",
    "Downey",
    "Duarte",
    "Dublin",
    "Dunsmuir",
    "East Palo Alto",
    "El Cajon",
    "El Centro",
    "El Cerrito",
    "El Monte",
    "El Segundo",
    "Elk Grove",
    "Emeryville",
    "Encinitas",
    "Escalon",
    "Escondido",
    "Etna",
    "Eureka",
    "Exeter",
    "Fairfax",
    "Fairfield",
    "Farmersville",
    "Ferndale",
    "Fillmore",
    "Firebaugh",
    "Folsom",
    "Fontana",
    "Fort Bragg",
    "Fort Jones",
    "Fortuna",
    "Foster City",
    "Fountain Valley",
    "Fowler",
    "Fremont",
    "Fresno",
    "Fullerton",
    "Galt",
    "Garden Grove",
    "Gardena",
    "Gilroy",
    "Glendale",
    "Glendora",
    "Goleta",
    "Gonzales",
    "Grand Terrace",
    "Grass Valley",
    "Greenfield",
    "Gridley",
    "Grover Beach",
    "Guadalupe",
    "Gustine",
    "Half Moon Bay",
    "Hanford",
    "Hawaiian Gardens",
    "Hawthorne",
    "Hayward",
    "Healdsburg",
    "Hemet",
    "Hercules",
    "Hermosa Beach",
    "Hidden Hills",
    "Highland",
    "Hillsborough",
    "Hollister",
    "Holtville",
    "Hughson",
    "Huntington Beach",
    "Huntington Park",
    "Huron",
    "Imperial",
    "Imperial Beach",
    "Indian Wells",
    "Indio",
    "Industry",
    "Inglewood",
    "Ione",
    "Irvine",
    "Irwindale",
    "Isleton",
    "Jackson",
    "Kerman",
    "King City",
    "Kingsburg",
    "La Cañada Flintridge",
    "La Habra",
    "La Habra Heights",
    "La Mesa",
    "La Mirada",
    "La Palma",
    "La Puente",
    "La Quinta",
    "La Verne",
    "Lafayette",
    "Laguna Beach",
    "Laguna Hills",
    "Laguna Niguel",
    "Laguna Woods",
    "Lake Elsinore",
    "Lake Forest",
    "Lakeport",
    "Lakewood",
    "Lancaster",
    "Larkspur",
    "Lathrop",
    "Lawndale",
    "Lemoore",
    "Lincoln",
    "Lindsay",
    "Live Oak",
    "Livermore",
    "Livingston",
    "Lodi",
    "Loma Linda",
    "Lompoc",
    "Long Beach",
    "Los Alamitos",
    "Los Altos",
    "Los Altos Hills",
    "Los Angeles",
    "Los Banos",
    "Los Gatos",
    "Loyalton",
    "Lynwood",
    "Madera",
    "Malibu",
    "Mammoth Lakes",
    "Manhattan Beach",
    "Manteca",
    "Maricopa",
    "Marina",
    "Martinez",
    "Marysville",
    "Maywood",
    "McFarland",
    "Mendota",
    "Menlo Park",
    "Merced",
    "Mill Valley",
    "Millbrae",
    "Milpitas",
    "Mission Viejo",
    "Modesto",
    "Monrovia",
    "Montague",
    "Montclair",
    "Montebello",
    "Monterey",
    "Monterey Park",
    "Moorpark",
    "Moraga",
    "Moreno Valley",
    "Morgan Hill",
    "Morro Bay",
    "Mount Shasta",
    "Mountain View",
    "Murrieta",
    "Napa",
    "National City",
    "Needles",
    "Nevada City",
    "Newark",
    "Newman",
    "Newport Beach",
    "Norco",
    "Norwalk",
    "Novato",
    "Oakdale",
    "Oakland",
    "Oakley",
    "Oceanside",
    "Ojai",
    "Ontario",
    "Orange",
    "Orange Cove",
    "Orinda",
    "Orland",
    "Oroville",
    "Oxnard",
    "Pacific Grove",
    "Pacifica",
    "Palm Desert",
    "Palm Springs",
    "Palmdale",
    "Palo Alto",
    "Palos Verdes Estates",
    "Paradise",
    "Paramount",
    "Parlier",
    "Pasadena",
    "Patterson",
    "Perris",
    "Petaluma",
    "Pico Rivera",
    "Piedmont",
    "Pinole",
    "Pismo Beach",
    "Pittsburg",
    "Placentia",
    "Placerville",
    "Pleasant Hill",
    "Pleasanton",
    "Plymouth",
    "Point Arena",
    "Pomona",
    "Port Hueneme",
    "Porterville",
    "Portola",
    "Portola Valley",
    "Poway",
    "Rancho Cordova",
    "Rancho Cucamonga",
    "Rancho Mirage",
    "Rancho Palos Verdes"
]  

const MunicipalitiesTable: React.FC = () => {
  const [allMunicipalities, setAllMunicipalities] = useState<Municipality[]>([]); // For storing all data
  const displayMunicipalities = [
    { name: "Los Angeles" },
    { name: "San Diego" },
    { name: "San Jose" },
    { name: "Artesia" },  
    { name: "Fresno" },
    { name: "Sacramento" },
    { name: "..." }, // Placeholder for "more"
  ];

useEffect(() => {
    // Can Fetch ALL municipality data from API or JSON (replace with your actual logic)
    // fetch("/api/municipalities")
    //   .then((res) => res.json())
    //   .then(setAllMunicipalities);
    // Set the state with the constant data
    const allCaliforniaMunicipalitiesMap = allCaliforniaMunicipalities.map((name) => ({ name }));
    setAllMunicipalities(allCaliforniaMunicipalitiesMap);
}, []);

  const handleExportToCSV = () => {
    const csvContent =
      "Name\n" + allMunicipalities.map((m) => m.name).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "california_municipalities.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-white">California Municipalities</h2>
      <table className="table-auto w-full">
        <tbody>
          {displayMunicipalities.map((m, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-white">{m.name}</td>
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

export default MunicipalitiesTable;