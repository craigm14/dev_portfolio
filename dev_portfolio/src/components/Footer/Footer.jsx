import { Section } from "../Section/section";
function Footer() {
  return (
    <Section className="pb-5">
      <p>
        <i>
          Built in Visual Studio Code by yours truly. Built with React and
          Tailwind CSS.
        </i>
      </p>
      <hr class=" h-px border-0 bg-white"></hr>
      <div className="grid grid-cols-2 max-w-3xl">
        <div className="text-left">
          <h3>Craig Moore</h3>
        </div>
        <div className="text-right">© Copyright 2026</div>
      </div>
    </Section>
  );
}

export default Footer;
