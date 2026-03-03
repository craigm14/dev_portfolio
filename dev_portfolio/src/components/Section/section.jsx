export function Section({ children, className = "" }) {
  return (
    <section
      className={`flex flex-col gap-2 max-w-[700px] mx-auto pt-10 max-md:mx-4 ${className}`}
    >
      {children}
    </section>
  );
}
