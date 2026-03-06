import { Section } from "../Section/section";
function Card() {
  return (
    <section className="flex flex-col gap-2 max-w-[700px] mx-auto pt-10 max-md:flex-col max-md:gap- max-md:mx-4">
      <h1 className="font-bold text-2xl ">Some projects to check out</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3 ">
        <div className="border p-2 border--card-border">
          <img className="w-2xl object-cover" src="../../img/pokemon.jpg"></img>
          <h2 className="pt-5 underline">Pokemon App</h2>
          <p>Small Pokemon app - work in progress</p>
        </div>
        <div className="border p-2 border--card-border">
          <img
            className="w-2xl  object-cover"
            src="../../img/pokemon.jpg"
          ></img>
          <h2 className="pt-5 underline">Three </h2>
          <p>
            I built this webpage as part of a coding course a while ago using
            HTML and SCSS. The goal was to replicate your chosen page as close
            as possible.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
