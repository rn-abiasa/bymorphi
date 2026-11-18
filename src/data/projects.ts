// Placeholder projects. Replace name, type, tagline, url, and color with real work.
// To use a real screenshot, add `image: "/projects/your-file.png"` (file in /public/projects/).
export type Project = {
  name: string;
  type: string;
  tagline: string;
  url: string;
  color: string;
  image?: string;
};

export const projects: Project[] = [
  {
    name: "Kopi Sudut",
    type: "Coffee shop",
    tagline: "Slow mornings and single-origin coffee.",
    url: "#projects",
    color: "#6d3df5",
  },
  {
    name: "Dapur Mama",
    type: "Dimsum kitchen",
    tagline: "Home-style dimsum, steamed to order.",
    url: "#projects",
    color: "#c9452a",
  },
  {
    name: "Roti Pagi",
    type: "Bakery",
    tagline: "Fresh from the oven at 6 a.m.",
    url: "#projects",
    color: "#566a2c",
  },
  {
    name: "Sambal Sore",
    type: "Restaurant",
    tagline: "Spicy plates for the golden hour.",
    url: "#projects",
    color: "#1f3a5f",
  },
];
