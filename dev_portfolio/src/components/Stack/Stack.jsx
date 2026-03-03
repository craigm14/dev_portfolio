import { Section } from "../Section/section";
function Card() {
  return (
    <Section>
      <h1 className="font-bold text-2xl ">Stack</h1>
      <div
        style={{ color: "var(--primary-color)" }}
        className="grid grid-cols-3 md:grid-cols-3 gap-6 pt-5 text-center"
      >
        <div className="border border--card-border">
          <img className=" object-cover" src="../../img/HTML.jpg"></img>
          <h2 className="pt-5 text-white">HTML</h2>
        </div>
        <div className="border border--card-border">
          <img className=" object-cover" src="../../img/CSS.jpg"></img>
          <h2 className="pt-5 text-white">CSS</h2>
        </div>
        <div className="border border--card-border ">
          <img className=" object-cover" src="../../img/js.jpg"></img>
          <h2 className="pt-5 text-white ">JS</h2>
        </div>
        <div className="border border--card-border ">
          <img className=" object-cover" src="../../img/react.jpg"></img>
          <h2 className="pt-5 text-white ">React</h2>
        </div>
        <div className="border border--card-border">
          <img className=" object-cover" src="../../img/tailwind.jpg"></img>
          <h2 className="pt-5 text-white ">Tailwind</h2>
        </div>
      </div>
    </Section>
  );
}

export default Card;
