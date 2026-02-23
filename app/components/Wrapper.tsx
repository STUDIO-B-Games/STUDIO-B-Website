export default function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`w-full ${className}`}>
      <div className="flex flex-col gap-6 px-8 py-8 md:px-16 max-w-350 mx-auto">
        {children}
      </div>
    </section>
  );
}
