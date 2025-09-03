export type User = {
  id: string;
  handle: string;
  name: string;
  title?: string;
  department?: string;
  company?: string;
  companyLogo?: string;
  location?: string;
  phone?: string;
  mobile?: string;
  whatsapp?: string;
  email?: string;
  website?: string;
  linkedIn?: string;
  instagram?: string;
  avatarUrl?: string;
  accentHex?: string;
  bio?: string;
  exchangeFormUrl?: string;
  officeAddress?: string;
};

const DEMO: Record<string, User> = {
  amitdube: {
    id: "u_amitdube",
    handle: "amitdube",
    name: "Amit Dube",
    title: "Chief Technology Officer",
    department: "Wiring Harness",
    company: "Samvardhana Motherson International Limited",
    companyLogo: "/logo-md.svg",
    location: "Noida, Uttar Pradesh, India",
    phone: "01206679500",
    mobile: "919654592449",
    whatsapp: "919654592449",
    email: "amit.dube@motherson.com",
    website: "https://motherson.com",
    linkedIn: "https://www.linkedin.com/in/amitdube",
    avatarUrl: "/amit-dube.png",
    accentHex: "#C73E3A",
    bio: "Chief Technology Officer - Wiring Harness Division at Samvardhana Motherson International Limited. Leading automotive technology innovation and mobility solutions.",
    officeAddress:
      "Plot No. 1, Sector-127, Noida-Greater Noida Expressway, Noida-201301 U.P.",
  },
  rahul: {
    id: "u_rahul",
    handle: "rahul",
    name: "Rahul Sharma",
    title: "Business Development - INDIA Region",
    department: "Smart Cities",
    company: "NXP Semiconductors",
    companyLogo: "/nxp-logo.svg",
    location: "Noida, Uttar Pradesh, India",
    mobile: "919871997099",
    whatsapp: "919871997099",
    email: "rahul.sharma_7@nxp.com",
    website: "https://www.nxp.com",
    linkedIn: "https://www.linkedin.com/in/rahul-sharma-494404162",
    avatarUrl: "/rahul.jpeg",
    accentHex: "#C73E3A",

    officeAddress:
      "Plot 2 & 3, Sector-16A, Noida-Greater Noida Expressway, Noida-201301 U.P.",
  },
  sushil: {
    id: "u_sushil",
    handle: "sushil",
    name: "Sushil S Jadhav",
    title: "Vice President",
    department: "Products and Solutions",
    company: "Mastercard",
    companyLogo: "/mastercard-logo.svg",
    location: "Mumbai, Maharashtra, India",
    mobile: "919920123466",
    whatsapp: "919920123466",
    email: "sushil.jadhav@mastercard.com",
    website: "https://www.mastercard.com",
    linkedIn: "https://www.linkedin.com/in/sushil-s-jadhav-3a981714",
    avatarUrl: "/sushil-jadhav.jpeg",
    accentHex: "#C73E3A",

    officeAddress:
      "61-A, 2 North Avenue, Maker Maxity, Bandra Kurla Complex, Mumbai, Maharashtra, 400051",
  },
  aldo: {
    id: "u_aldo",
    handle: "aldo",
    name: "Aldo Peguero",
    title: "Co Founder",
    // department: "Products and Solutions",
    company: "Lorso Technologies",
    companyLogo: "/lorso-technologies-logo.png",
    location: "Mexico",
    mobile: "525540424593",
    whatsapp: "525540424593",
    email: "aldo@lorso.mx",
    website: "https://www.lorso.mx",
    linkedIn: "https://www.linkedin.com/in/aldopeguero",
    avatarUrl: "/aldo.png",
    accentHex: "#C73E3A",

    officeAddress:
      "Adolfo Prieto 1474, Col. Del Valle, Benito Juárez, C.P.03100 CDMX, México",
  },

  vireshgola: {
    id: "u_vireshgola",
    handle: "vireshgola",
    name: "Viresh Gola",
    title: "Director",
    department: "Print & Signage",
    company: "Shubham Graphics",
    companyLogo: "/shubham-graphics-logo.jpeg",
    location: "New Delhi, India",
    phone: "",
    mobile: "919810618040",
    whatsapp: "919810618040",
    email: "shubhamgraphics@gmail.com",
    website: "",
    linkedIn: "",
    avatarUrl: "/viresh-gola.png",
    accentHex: "#C73E3A",
    bio: "Director at Shubham Graphics - one of the leading Signage & Printing units in Delhi with over 2 decades of experience. We specialize in executing complex print and signage projects including Brochures, Posters, LED Signages, NFC Cards, Canvas and comprehensive printing solutions with excellent quality and timely delivery.",
    officeAddress: "3, Ansari Market, Daryaganj, New Delhi - 110002",
    instagram: "sgc.shubhamgraphics",
  },

  tirthankar: {
    id: "u_tirthankar",
    handle: "tirthankar",
    name: "Tirthankar K",
    title:
      "Technical Marketing Lead RFID/AIDC - South Asia, Sub Saharan Africa & Middle East",
    department: "RFID/AIDC",
    company: "Avery Dennison",
    companyLogo: "/avery-dennison.svg",
    location: "Bengaluru, Karnataka, India",
    phone: "",
    mobile: "917892153358",
    whatsapp: "917892153358",
    email: "tirthankar.kshetrimayum@ap.averydennison.com",
    website: "https://www.averydennison.com",
    linkedIn: "https://www.linkedin.com/in/tirthankar-kshetrimayum-aa368616",
    avatarUrl: "/tirthankar.jpeg",
    accentHex: "#C73E3A",
    bio: "RFID professional with over 20 years experience in Business Development, Sales, Consulting and Market Development. Leading RFID Intelligent Labels division for South Asia, Sub Saharan Africa & Middle East at Avery Dennison, enabling brands with digital transformation solutions.",
    officeAddress:
      "Plot No. 18/23, Peenya Industrial Area, Phase-1, Bengaluru, Karnataka - 560058",
    instagram: "tari031982",
  },
};

export async function getUserByHandle(handle: string) {
  return DEMO[handle] ?? null;
}
