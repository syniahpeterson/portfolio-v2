import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import SectionHeading from "../components/ui/SectionHeading";

function Home() {
  return (
    <Container className="py-24">
      <SectionHeading
        number="01"
        eyebrow="Selected Work"
        title="Websites and applications I've built."
        description="A selection of projects demonstrating web development, modernization, responsive design, accessibility, and more."
      />

      <div className="mt-8 flex flex-wrap gap-4">
        <Button to="/work">View My Work</Button>

        <Button variant="secondary" to="/resume">
          View Resume
        </Button>

        <Button variant="ghost" to="/contact">
          Get In Touch →
        </Button>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Badge>Client Project</Badge>
        <Badge>React</Badge>
        <Badge>Responsive</Badge>
      </div>
    </Container>
  );
}

export default Home;
