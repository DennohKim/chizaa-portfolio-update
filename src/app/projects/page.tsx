import Projects from "@/components/Projects";
import prisma from "@/utils/connect";

export default async function ProjectsPage() {
 
    const projects = await prisma.projects.findMany();
	console.log(projects);
  return (
    <Projects projects={projects}/>
  );
}
