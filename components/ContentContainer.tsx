import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PropTypes = {
  className?: string;
  children: ReactNode;
  name?: string;
  page?: { title: string };
};

const ContentContainer = ({ className, children, page }: PropTypes) => {
  return (
    <div
      className={cn(
        className,
        "mx-auto max-w-screen-xl w-full md:px-20 sm:px-10 px-4",
        page && "mt-16 sm:mt-28 "
      )}
    >
      {page && <h1 className="md:mb-10 mb-6">{page.title}</h1>}
      {children}
    </div>
  );
};

export default ContentContainer;
