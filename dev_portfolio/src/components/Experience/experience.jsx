import { Section } from "../Section/section";
function Experience() {
  return (
    <Section>
      <h1 className="pb-3">Experience</h1>
      <ol class="border-s border-neutral-300 dark:border-neutral-500">
        <li>
          <div class="flex-start flex items-center pt-3">
            <div class="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p class="text-sm text-neutral-500 dark:text-neutral-300">
              01.09.2025 to 01.08.2026
            </p>
          </div>
          <div class="mb-6 ms-4 mt-2">
            <h4 class="mb-1.5 text-xl font-semibold">
              LGC - Website Coordinator
            </h4>
            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
              As Website Coordinator, I supported the end to end rebuild of the
              BRCGS website on the Umbraco platform, working closly with
              internal stakeholders and external agencies to ensure a successful
              delviery.
            </p>
          </div>
        </li>
        <li>
          <div class="flex-start flex items-center pt-3">
            <div class="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <a className="" href="../../assets/CraigMooreCV2026.docx">
              Click to see more...
            </a>
          </div>
          <div class="mb-6 ms-4 mt-2"></div>
        </li>
      </ol>
    </Section>
  );
}

export default Experience;
