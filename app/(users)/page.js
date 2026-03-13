import HomeClient from "./HomeClient";

export const metadata = {
  title: "NovaSpace | Pioneering the Future of Space Exploration",
  description: "NovaSpace is at the forefront of aerospace innovation, providing expert consulting and mission coordination for the next generation of space travel.",
  openGraph: {
    title: "NovaSpace | Home",
    description: "Welcome to NovaSpace, where we pioneer the future of space exploration.",
  },
};

export default function Home() {
  return <HomeClient />;
}
