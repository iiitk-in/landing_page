/* eslint-disable @next/next/no-img-element */
const ProjectComponent = (props: any) => {
  const {
    projectName,
    projectLink,
    projectDescription,
    projectCreator,
    projectThumbnail,
    projectPermissions,
  } = props;
  return (
    <div className="border border-1 rounded-lg px-12 py-4">
      <h1 className="text-3xl font-bold">{projectName}</h1>
      <p>{projectDescription}</p>
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        {projectLink}
      </a>
      <p>{projectCreator}</p>
      <img src={projectThumbnail} alt={projectName} />
      <p>{projectPermissions}</p>
    </div>
  );
};
export default ProjectComponent;
