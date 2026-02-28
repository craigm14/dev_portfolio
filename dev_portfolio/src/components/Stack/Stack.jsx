function Card() {
  return (
    <section className="flex flex-col gap-2 max-w-[700px] mx-auto pt-10 max-md:flex-col max-md:gap- max-md:mx-4">
      <h1 className="font-bold text-2xl ">Some projects to check out</h1>
      <div
        style={{ color: "var(--primary-color)" }}
        className="grid grid-cols-3 md:grid-cols-3 gap-6 pt-5 text-center"
      >
        <div className="border border--card-border">
          <img className=" object-cover" src="../../img/HTML.jpg"></img>
          <h2 className="pt-5 text-white">Pokemon App</h2>
        </div>
        <div className="border border--card-border">
          <img className=" object-cover" src="../../img/CSS.jpg"></img>
          <h2 className="pt-5 text-white">Pokemon App</h2>
        </div>
        <div className="border border--card-border ">
          <img className=" object-cover" src="../../img/React.jpg"></img>
          <h2 className="pt-5 text-white ">Pokemon App</h2>
        </div>
      </div>
    </section>
  );
}

export default Card;
