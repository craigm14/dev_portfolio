import heroimg from "../../assets/profile.jpg";
function Banner() {
  return (
    <section class="flex justify-center items-center pt-6">
      <div class="grid grid-cols-3 gap-3">
        <div>
          <img class="w-30 h-32" src={heroimg} alt="Profile picture" />
        </div>

        <div class="intro">
          <h1>Craig Moore</h1>
          <h2>Website coordinator</h2>
          <span>
            <a href="https://www.linkedin.com/in/cmoore14/" target="_blank"></a>
          </span>
        </div>
        <div>
          <a href="">Download CV</a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
