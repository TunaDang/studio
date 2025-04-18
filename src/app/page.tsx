import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator"; // Import Separator
import Link from "next/link"; // Import Link for external links

const projects = [
  {
    title: "CodeArena",
    description: "LLM code generation and testing research. (S. Dutta, K. Ellis, A. Sowane, T. A. Dang, Jan-2025)",
    links: [
        { name: "Meta Grant", url: "https://www.linkedin.com/feed/update/urn:li:activity:7285756357046157314/" },
    ],
  },
  {
    title: "Economic Education Lab",
    description: "Developed website for the lab. (T. A. Dang, D. McKee, Mar-2024)",
    links: [
        { name: "Website", url: "https://econedlab.org/newsfeed/post1-web-site-launch/" },
    ],
  },
  {
    title: "Cornell Unmanned Air Systems",
    description: "Worked on Autopilot, back-end communication with Interops. (Jan-2023)",
    links: [
        { name: "Team", url: "https://cuair.org/" },
    ],
  },
    {
    title: "TODOCAML",
    description: "A terminal-based productivity app. (T. A. Dang, T. Duan, B. Rubin, R. Valiveti, Apr-2022)",
    links: [
        { name: "GitHub", url: "https://github.com/TunaDang/PRODUCTIVITY_APP" },
    ],
  },
    {
    title: "Cornell Quant Fund",
    description: "Research on Transferability of Volatility Between ETF Holdings. (Feb-2022)",
    links: [
        { name: "GitHub", url: "https://github.com/Cornell-Quant-Fund" },
    ],
  },
  {
    title: "IBM ML Apprentice",
    description: "Worked on OL problems and CV classifiers at Thomas J. Watson Research Center. (June-2021)",
    links: [
        { name: "GitHub", url: "https://github.com/TunaDang/Computer-Vision" },
    ],
  },
];

const awards = [
    "Yearly IBM Thomas J.Watson Research Scholarship, 2021-current",
    "1st Placed Team (of 60 Competitors) Jane Street Cornell Estimathon, 2024",
    "Dean’s List All Semesters, 2021-current",
    { text: "Abstract Accepted and Presented at American Economic CTREE, 2023.", url: "https://www.aeaweb.org/about-aea/committees/economic-education/ctree/2023" },
    "2nd at Cornell Quant Mock Trading Competition, 2022",
    "American Invitational Math Exam & AMC 12 with Distinction, 2021",
    "Top 2.5% of Competitors ranked by Mathematical Association of America, 2020",
];


export default function Home() {
  return (
    <div className="container mx-auto p-4 max-w-4xl"> {/* Added max-width */}
      {/* Header Section */}
      <header className="mb-8 flex flex-col items-center text-center"> {/* Centered header */}
          {/* Optional: Add Avatar here if desired */}
          {/* <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="/path/to/your/image.jpg" alt="Tuan Anh Dang" />
              <AvatarFallback>TD</AvatarFallback>
          </Avatar> */}
        <h1 className="text-4xl font-bold mb-2">Tuan Anh Dang</h1>
        <p className="text-xl text-muted-foreground">CS M.Eng. Student at Cornell University</p> {/* Added subtitle */}
      </header>

      {/* Social Links */}
      <section className="mb-8 flex justify-center space-x-4"> {/* Centered social links */}
        {/* Removed GitHub button for now, add back if general profile link exists */}
        <Button variant="outline" size="icon" className="rounded-full" asChild>
          <a href="https://www.Linkedin.com/in/TuanAnhDang/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Icons.linkedin className="h-5 w-5"/>
          </a>
        </Button>
        <Button variant="outline" size="icon" className="rounded-full" asChild>
          <a href="mailto:td296@cornell.edu" aria-label="Email">
            <Icons.mail className="h-5 w-5"/>
          </a>
        </Button>
      </section>

      <Separator className="my-8" /> {/* Separator */}

      {/* About Me Section */}
      <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2> {/* Centered section title */}
          <p className="text-lg text-center max-w-2xl mx-auto"> {/* Centered and constrained width */}
              Hello, my name is Tuan Anh Dang and I am a Master of Engineering student in CS @ Cornell.
              My current research is with LLM code generation and testing <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7285756357046157314/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">CodeArena</Link>.
              Other areas of Machine Learning research experience/interest include CV and RL. Past data science and econometrics work in experimentation and causal inference for Walmart.com Ad Load Optimization.
              For more information, you can view my full credentials on <Link href="https://www.Linkedin.com/in/TuanAnhDang/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">LinkedIn</Link>.
          </p>
      </section>

      <Separator className="my-8" /> {/* Separator */}

      {/* Projects Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Personal Projects</h2> {/* Centered title */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Adjusted gap */}
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 flex flex-col"> {/* Added flex flex-col */}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                {/* Removed tagline CardDescription or repurpose if needed */}
              </CardHeader>
              <CardContent className="flex-grow"> {/* Added flex-grow */}
                 {/* Removed image placeholder */}
                <p className="mb-4">{project.description}</p> {/* Added margin bottom */}
                <div className="flex flex-wrap gap-2"> {/* Use flex-wrap for links */}
                    {project.links.map((link, linkIndex) => (
                        <Button key={linkIndex} variant="outline" size="sm" asChild>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.name} <Icons.externalLink className="ml-1 h-3 w-3" /> {/* Optional: Add external link icon */}
                             </a>
                        </Button>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

       <Separator className="my-8" /> {/* Separator */}

        {/* Awards Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Awards & Recognition</h2> {/* Centered title */}
        <Card> {/* Wrap awards in a card for better visual grouping */}
            <CardContent className="pt-6"> {/* Add padding top */}
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground"> {/* Use list format */}
                 {awards.map((award, index) => (
                    <li key={index}>
                        {typeof award === 'string' ? (
                            award
                        ) : (
                            <>
                                {award.text}
                                <a href={award.url} target="_blank" rel="noopener noreferrer" className="ml-1 underline hover:text-primary">
                                     (Link <Icons.externalLink className="inline ml-0.5 h-3 w-3" />) {/* Link indicator */}
                                </a>
                            </>
                        )}
                    </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
      </section>


      {/* Optional Footer */}
      <footer className="text-center mt-12 py-4 border-t">
          <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Tuan Anh Dang. All rights reserved.
          </p>
      </footer>
    </div>
  );
}
