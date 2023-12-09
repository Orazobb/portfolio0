import Prj1 from "../assets/ss.png";
const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-[52px] font-semibold mb-20 leading-normal text-red-500">
        Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <img
          height={300}
          width={300}
          className="flex items-center justify-center rounded-lg border-2 border-red-500 p-1"
          src={Prj1}
          alt=""
        />
        <img
          height={300}
          width={300}
          className="flex items-center justify-center rounded-lg border-2 border-red-500 p-1"
          src={Prj1}
          alt=""
        />
        <img
          height={300}
          width={300}
          className="flex items-center justify-center rounded-lg border-2 border-red-500 p-1"
          src={Prj1}
          alt=""
        />
        <img
          height={300}
          width={300}
          className="flex items-center justify-center rounded-lg border-2 border-red-500 p-1"
          src={Prj1}
          alt=""
        />
        <img
          height={300}
          width={300}
          className="flex items-center justify-center rounded-lg border-2 border-red-500 p-1"
          src={Prj1}
          alt=""
        />
        <img
          height={300}
          width={300}
          className="flex items-center justify-center rounded-lg border-2 border-red-500 p-1"
          src={Prj1}
          alt=""
        />
      </div>
    </div>
  );
};

export default Projects;
