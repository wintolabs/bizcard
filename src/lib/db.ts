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
    mobile: "919935438980",
    whatsapp: "919935438980",
    email: "amit.dube@motherson.com",
    website: "https://motherson.com",
    linkedIn: "https://www.linkedin.com/in/amitdube",
    avatarUrl: "/amit-dube.png",
    accentHex: "#C73E3A",
    bio: "Chief Technology Officer - Wiring Harness Division at Samvardhana Motherson International Limited. Leading automotive technology innovation and mobility solutions.",
    officeAddress:
      "Plot No. 1, Sector-127, Noida-Greater Noida Expressway, Noida-201301 U.P.",
  },
};

export async function getUserByHandle(handle: string) {
  return DEMO[handle] ?? null;
}
