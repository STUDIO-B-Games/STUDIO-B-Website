import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function SectionHeader({
  title,
  action,
}: {
  title: string;
  action?: {
    label: string;
    link: string;
  };
}) {
  return (
    <div className="flex flex-row items-center justify-between">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-wider uppercase">
        {title}
      </h2>
      {action && (
        <Link
          href={action.link}
          className="flex items-center justify-center gap-2 text-sm font-medium border border-white/50 hover:border-white rounded-full px-4 py-1.5 transition-colors"
        >
          {action.label}
          <FaArrowRight className="size-4" />
        </Link>
      )}
    </div>
  );
}
