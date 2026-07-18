export interface Brand {
  id: string;
  name: string;
  description: string;
  certifications: string;
  origin: string;
  image: string;
  url: string;
}

export const brandsData: Brand[] = [
  {
    id: "psh-pumps",
    name: "PSH PUMPS",
    description: "High-performance pumps for pools and aqua parks",
    certifications: "ISO 9001, IE3 / IE4 Efficiency Classes, CE, RoHS",
    origin: "Spain",
    image: "/images/brands/psh.png",
    url: "https://bombaspsh.com/en/"
  },
  {
    id: "kripsol",
    name: "KRIPSOL",
    description: "Complete range of pool equipment and accessories.",
    certifications: "ISO 9001, CE, and RoHS",
    origin: "Spain",
    image: "/images/brands/kripsol.png",
    url: "https://www.kripsol.co.uk/"
  },
  {
    id: "waterco",
    name: "WATERCO",
    description: "Advanced filtration and water treatment systems.",
    certifications: "ISO 9001, NSF (National Sanitation Foundation), CE, and WaterMark",
    origin: "Australia",
    image: "/images/brands/waterco.svg",
    url: "https://www.waterco.com.au/"
  },
  {
    id: "hidroten",
    name: "HIDROTEN",
    description: "Innovative fluid handling systems.",
    certifications: "ISO 9001, CE, WRAS, and AENOR",
    origin: "Spain",
    image: "/images/brands/hidroten.png",
    url: "https://hidroten.com/en"
  },
  {
    id: "injecta",
    name: "INJECTA",
    description: "Dosing pumps and automatic chemical controllers",
    certifications: "ISO 9001, CE, and RoHS",
    origin: "Italy",
    image: "/images/brands/injecta.png",
    url: "https://www.injecta.eu/en/"
  },
  {
    id: "phonovox",
    name: "PHONOVOX",
    description: "Transformers for safe pool lighting systems",
    certifications: "ISO 9001, CE, and RoHS",
    origin: "Italy",
    image: "/images/brands/phonovox.png",
    url: "https://phonovoxsa.com/en/home/"
  },
  {
    id: "ivar",
    name: "I.VAR",
    description: "Hot water and steam boilers",
    certifications: "ISO 9001, CE, PED, and TUV",
    origin: "Italy",
    image: "/images/brands/ivar.png",
    url: "https://www.ivarindustry.it/en/"
  },
  {
    id: "unex",
    name: "UNEX",
    description: "High-efficiency heat exchangers",
    certifications: "ISO 9001, CE, and PED",
    origin: "Italy",
    image: "/images/brands/unex.png",
    url: "https://www.unex.at/en/"
  },
  {
    id: "sicctech",
    name: "SICCTECH",
    description: "Hot water storage tanks",
    certifications: "ISO 9001, CE, and PED",
    origin: "Italy",
    image: "/images/brands/sicctech.jpg",
    url: "https://www.sicc-tech.it/en/"
  },
  {
    id: "pedrollo",
    name: "PEDROLLO",
    description: "Wide range of high-performance water pumps, including End suction, Vertical & Horizontal Inline, and Submersible pumps, designed for extreme durability and water management.",
    certifications: "ISO 9001, CE, WRAS, and IE3/IE4",
    origin: "Italy",
    image: "/images/brands/pedrollo.svg",
    url: "https://www.pedrollo.com/en/"
  }
];
