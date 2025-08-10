export type Project = {
  slug: string;
  title: string;
  location: string;
  image: string; // public path
  description: string;
  content?: string;
};

export const projects: Project[] = [
  {
    slug: "antiva-ivana-hyderabad",
    title: "Antiva Ivana",
    location: "Hyderabad, India",
    image: "/lovable-uploads/0251c39f-d44d-45b4-9f88-b9b6b6289e5e.png",
    description:
      "A 12.9-acre gated community designed for urban and modern luxury living.",
    content:
      "Antiva Ivana brings thoughtfully designed residences with modern amenities and lush open spaces, delivering a premium living experience in Hyderabad.",
  },
  {
    slug: "high-9-hyderabad",
    title: "High 9",
    location: "Hyderabad, India",
    image: "/lovable-uploads/81c4ca11-b279-47a2-88c6-361da95cbf0b.png",
    description:
      "A sophisticated high-rise community designed for luxury and convenience.",
    content:
      "High 9 features contemporary architecture, curated amenities, and excellent connectivity, offering a balanced lifestyle for urban residents.",
  },
  {
    slug: "anvita-parkside-hyderabad",
    title: "Anvita Parkside",
    location: "Hyderabad, India",
    image: "/lovable-uploads/74eda0b4-efe5-420d-8224-b99e22eb2edf.png",
    description:
      "Upscale living with thoughtful architecture, landscaped greens, and world-class amenities.",
    content:
      "Anvita Parkside focuses on wellness and community living, integrating green spaces with premium villas and modern infrastructure.",
  },
];
