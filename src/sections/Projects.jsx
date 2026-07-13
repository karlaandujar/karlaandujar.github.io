import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
export default Projects;

function Projects() {
  return (
    <section id="projects">
    <h2>Projects</h2>

    {projects.map((project) => (
      <ProjectCard key={project.title} project={project} />
    ))}

    </section>
  );
}