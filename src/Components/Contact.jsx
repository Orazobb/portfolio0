const Contact = () => {
  return (
    <div
      id="Contact"
      className="p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-[52px] font-semibold mb-20 leading-normal text-red-500">
        Contact Me
      </h1>
      <form action="" className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-6">
          <input
            className="w-full lg:my-3  my-4 rounded-lg text-xl text-white bg-slate-800 p-4 border-2 border-red-500"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full lg:my-3  my-4 rounded-lg text-xl text-white bg-slate-800 p-4 border-2 border-red-500"
            type="email"
            placeholder="Your e-mail"
          />
        </div>
        <textarea
          className="w-full lg:my-3  my-4 rounded-lg text-xl text-white bg-slate-800 p-4 border-2 border-red-500"
          name=""
          id=""
          cols="20"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <button
          type="submit"
          className="neno-button text-xl font-semibold text-white border-2 hover:bg-red-600 border-red-700 rounded-lg py-4 px-8 relative overflow-hidden"
        >
          Sent
        </button>
      </form>
    </div>
  );
};

export default Contact;
