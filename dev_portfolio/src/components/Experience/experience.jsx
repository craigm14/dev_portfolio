function Experience() {
  return (
    <section className="flex flex-col gap-2 max-w-[700px] mx-auto pt-10 max-md:flex-col max-md:gap- max-md:mx-4">
      <h1 className="font-bold text-2xl ">Experience</h1>
      <ol class="border-s border-neutral-300 dark:border-neutral-500">
        <li>
          <div class="flex-start flex items-center pt-3">
            <div class="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p class="text-sm text-neutral-500 dark:text-neutral-300">
              01.07.2021
            </p>
          </div>
          <div class="mb-6 ms-4 mt-2">
            <h4 class="mb-1.5 text-xl font-semibold">Title of section 1</h4>
            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              scelerisque diam non nisi semper, et elementum lorem ornare.
              Maecenas placerat facilisis mollis. Duis sagittis ligula in
              sodales vehicula.
            </p>
          </div>
        </li>
        <li>
          <div class="flex-start flex items-center pt-3">
            <div class="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p class="text-sm text-neutral-500 dark:text-neutral-300">
              01.07.2021
            </p>
          </div>
          <div class="mb-6 ms-4 mt-2">
            <h4 class="mb-1.5 text-xl font-semibold">Title of section 1</h4>
            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              scelerisque diam non nisi semper, et elementum lorem ornare.
              Maecenas placerat facilisis mollis. Duis sagittis ligula in
              sodales vehicula.
            </p>
          </div>
          <div class="mb-6 ms-4 mt-2">
            <a className="" href="../../assets/CraigMooreCV2026.docx">
              Click to see more...
            </a>
          </div>
        </li>
      </ol>
    </section>
  );
}

export default Experience;
