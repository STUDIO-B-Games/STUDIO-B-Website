import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "./UI";

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
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase">
        {title}
      </h2>
      {action && (
        <Link href="#">
          <Button
            className="font-medium"
            color={{ text: "#FFFFFF", background: "#FFFFFF" }}
            icon={{
              icon: <FaArrowRight className="size-4" />,
              position: "right",
              animate: true,
            }}
            size="small"
            type="text"
          >
            {action.label}
          </Button>
        </Link>
      )}
    </div>
  );
}
