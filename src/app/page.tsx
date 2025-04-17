import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";

const projects = [
  {
    title: "Project 1",
    image: "https://picsum.photos/400/300",
    description: "This is a description of project 1.",
    tagline: "AI tagline for project 1",
  },
  {
    title: "Project 2",
    image: "https://picsum.photos/400/300",
    description: "This is a description of project 2.",
    tagline: "AI tagline for project 2",
  },
  {
    title: "Project 3",
    image: "https://picsum.photos/400/300",
    description: "This is a description of project 3.",
    tagline: "AI tagline for project 3",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Name Display */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Your Name</h1>
      </header>

      {/* Social Links */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Find me here:</h2>
        <div className="flex space-x-4">
          <Button variant="ghost" className="rounded-full">
            <a href="#" aria-label="GitHub">
              <Icons.github className="h-6 w-6"/>
            </a>
          </Button>
          <Button variant="ghost" className="rounded-full">
            <a href="#" aria-label="LinkedIn">
              <Icons.linkedin className="h-6 w-6"/>
            </a>
          </Button>
          <Button variant="ghost" className="rounded-full">
            <a href="#" aria-label="Email">
              <Icons.mail className="h-6 w-6"/>
            </a>
          </Button>
        </div>
      </section>

      {/* Project Previews */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.tagline}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-md mb-2"
                />
                <p>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
