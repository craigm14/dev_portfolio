import heroimg from "../../assets/profile.jpg";
function Banner() {
  return (
    <section class="max-w-[700px] mx-auto px-14 py-6">
      <div class="flex items-start justify-between gap-6">
        <div class="flex items-start gap-4">
          <img
            class="w-30 h-32 rounded-2xl"
            src={heroimg}
            alt="Profile picture"
          />
          <div class="intro">
            <h1>Craig Moore</h1>
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
        <div class="flex self-end">
          <a href="" class="align-self flex-end">
            Download CV
          </a>
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
              d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
            />
          </svg>
        </div>
      </div>
      <section class="max-w-[700] mx-auto px-7 py-3 border-b border-white"></section>
    </section>
  );
}

export default Banner;
