import Navbar from "../components/Navbar";
import ProjectComponent from "../components/ProjectComponent";

const Projects = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-900 to-gray-800 flex-col">
      <Navbar />
      <div>
        <h1 className="text-4xl font-semibold text-center mb-6 mt-10 ">
          Projects on{" "}
          <span className="font-bold bg-gradient-to-r from-cyan-400 via-blue-800 to-green-600 text-transparent bg-clip-text bg-300% animate-gradient">
            IIITK.in
          </span>
        </h1>
        {/* Later get all this data via project API */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 flex gap-4 ml-8 mr-8 my-10 gap-y-10  ">
          <ProjectComponent
            projectName="Project Name"
            projectDescription="Project Description Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
            projectLink="Project Link"
            projectCreator="Project Creator"
            projectThumbnail="Project Thumbnail"
            projectPermissions="Project Permissions"
            projectTags={["Tag1", "Tag2", "Tag3"]}
          />
          <ProjectComponent
            projectName="Project Name"
            projectDescription="Project Description"
            projectLink="Project Link"
            projectCreator="Project Creator"
            projectThumbnail="Project Thumbnail"
            projectPermissions="Project Permissions"
            projectTags={["Tag1", "Tag2", "Tag3"]}
          />
          <ProjectComponent
            projectName="Project Name"
            projectDescription="Project Description"
            projectLink="Project Link"
            projectCreator="Project Creator"
            projectThumbnail="Project Thumbnail"
            projectPermissions="Project Permissions"
            projectTags={["Tag1", "Tag2", "Tag3"]}
          />
          <ProjectComponent
            projectName="Project Name"
            projectDescription="Project Description"
            projectLink="Project Link"
            projectCreator="Project Creator"
            projectThumbnail="Project Thumbnail"
            projectPermissions="Project Permissions"
            projectTags={["Tag1", "Tag2", "Tag3"]}
          />
          <ProjectComponent
            projectName="Project Name"
            projectDescription="Project Description"
            projectLink="Project Link"
            projectCreator="Project Creator"
            projectThumbnail="Project Thumbnail"
            projectPermissions="Project Permissions"
            projectTags={["Tag1", "Tag2", "Tag3"]}
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
