import React from "react";
import DesktopNav from "./nav/DesktopNav";
import MobileNav from "./nav/Mobilenav";
import { buttonVariants } from "../ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

type Props = React.PropsWithChildren<{}>;

const SidebarWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <div className="p-4 flex flex-col lg:flex-row gap-4">
        <MobileNav />
        <DesktopNav />
        <main className="h-screen lg:h-full w-full flex gap-4">{children}</main>
      </div>
    </div>
  );
};

export default SidebarWrapper;

// h-[calc(100%-80px)]
