import heroimg from "../../assets/profile.jpg";
function Banner() {
  return (
    <section className="max-w-[700px] mx-auto pt-10">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-4">
          <img
            className="w-30 h-32 rounded-2xl"
            src={heroimg}
            alt="Profile picture - Craig"
          />
          <div className="intro">
            <h1
              className="font-bold text-2xl"
              style={{ color: "var(--primary-color)" }}
            >
              Craig Moore
            </h1>
            <h2>Website coordinator</h2>
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
          <a href="" className="align-self flex-end">
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
              />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <section className="max-w-[700px] mx-auto px-7 py-3 border-b border-white"></section>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-left pt-2">
            <p>craig-moore22@outlook.com</p>
          </div>
          <div className="text-right pt-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
