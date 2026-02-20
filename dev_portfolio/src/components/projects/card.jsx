function Card() {
  return (
    <section className="flex flex-col gap-2 max-w-[700px] mx-auto pt-10 max-md:flex-col max-md:gap- max-md:mx-4">
      <h1 className="font-bold text-2xl ">Some projects to check out</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <img className="w-2xl object-cover" src="../../img/pokemon.jpg"></img>
          <h2 className="pt-5">Pokemon App</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.{" "}
          </p>
        </div>
        <div className="">
          <img
            className="w-2xl  object-cover"
            src="../../img/pokemon.jpg"
          ></img>
          <h2 className="pt-5">Pokemon App</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
