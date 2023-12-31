import Projects from "@/components/Projects";
import prisma from "@/utils/connect";
export const dynamic = 'force-dynamic';



async function ProjectsPage() {
 
    const projects = await prisma.projects.findMany();
	console.log(projects);
  return (
    <Projects projects={projects}/>
  );
}

export default ProjectsPage;