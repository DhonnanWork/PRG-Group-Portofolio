import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="container mx-auto px-6">
      <Hero />
      <Team />
      <Projects />
    </div>
  );
}