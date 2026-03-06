import { Section } from "../Section/section";
function about() {
  return (
    <Section>
      <div>
        <h1 className="font-bold text-2xl text-white">About Me</h1>
        <p className="pt-5">
          I'm a digital specialist with hands-on experience in website builds,
          CMS management and quality assurance across enterprise platforms. I've
          supported page builds, content migrations and full deployment testing.
        </p>
        <br />
        <p>
          I've worked on high profile website deployments, product launches,
          ensuring content accuracy & functaionlity and smooth deployment
          testing across platforms like Umbraco and many others. I work in Agile
          teams connecting the gap between content, development and marketing to
          deliver web experinces.
        </p>
      </div>
    </Section>
  );
}

export default about;
