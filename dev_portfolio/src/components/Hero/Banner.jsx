import heroimg from "../../assets/profile.jpg";
import { RiFileDownloadLine } from "@remixicon/react";
import { RiLinkedinBoxFill } from "@remixicon/react";
import { RiGithubFill } from "@remixicon/react";
function Banner() {
  return (
    <section className="flex flex-col gap-2 max-w-[700px] mx-auto pt-10 max-md:flex-col max-md:gap-4 max-md:mx-4">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-4">
          <img
            className="w-30 h-32 rounded-2xl"
            src={heroimg}
            alt="Profile picture - Craig"
          />
          <div className="intro">
            <h1 className="font-bold text-2xl">Craig Moore</h1>
            <h2 style={{ color: "var(--primary-color)" }}>
              Website coordinator
            </h2>
            <h3>Glasgow, UK</h3>
            <span>
              <a
                href="https://www.linkedin.com/in/cmoore14/"
                target="_blank"
              ></a>
            </span>
          </div>
        </div>
        <div className="flex self-end">
          <RiFileDownloadLine />
          <a href="" className="align-self flex-end hover:underline text-bold">
            Download CV
          </a>
        </div>
      </div>
      <div>
        <section className="max-w-[700px] mx-auto px-7 py-3 border-b border-white"></section>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-left pt-2">
            <a href="mailto:craig-moore22@outlook.com">
              craig-moore22@outlook.com
            </a>
          </div>{" "}
          <div className="text-right pt-2">
            <a
              href=""
              className="inline-flex items-center gap-1 text-white mx-2 hover:underline"
            >
              <RiLinkedinBoxFill color="rgba(255,255,255,1)" />
              LinkedIn
            </a>
            <a
              href=""
              className="inline-flex items-center gap-1 text-white hover:underline "
            >
              <RiGithubFill color="rgba(255,255,255,1)" />
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
