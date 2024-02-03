import Card from "../components/ui/Card";
import Main from "../components/ui/Main";

const Projects = () => {
  return (
    <Main>
      <div className="w-3/4 m-auto h-full grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Main>
  );
};

export default Projects;
