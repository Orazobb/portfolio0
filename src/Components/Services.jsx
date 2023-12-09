const Services = () => {
  return (
    <div
      id="Services"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-[52px] font-semibold mb-20 leading-normal text-red-500">
        Services
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20 text-white">
        <h2
          data-aos="fade-right"
          className="text-[26px] flex items-center justify-center font-semibold rounded-3xl h-16 w-44 border-2 border-red-500"
        >
          HTML
        </h2>
        <h2
          data-aos="fade-up"
          className="text-[26px] flex items-center justify-center font-semibold rounded-3xl h-16 w-44 border-2 border-red-500"
        >
          CSS
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] flex items-center justify-center font-semibold rounded-3xl h-16 w-44 border-2 border-red-500"
        >
          JavaScript
        </h2>
        <h2
          data-aos="fade-left"
          className="text-[26px] flex items-center justify-center font-semibold rounded-3xl h-16 w-44 border-2 border-red-500"
        >
          React
        </h2>
      </div>
    </div>
  );
};

export default Services;
