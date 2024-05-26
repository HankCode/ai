"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import useNavigation from "@/hooks/useNavigation";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Home, UserIcon } from "lucide-react";
import Link from "next/link";

const DesktopNav = () => {
  const paths = useNavigation();
  return (
    <Card className="hidden lg:flex lg:h-[calc(100vh-40px)] lg:flex-col lg:justify-between lg:items-center lg:w-16 lg:px-2 lg:py-4">
      <nav>
        <ul className="flex flex-col items-center gap-4">
          <li className="relative">
            <Link href="/">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon">
                      <Home />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Home</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </li>
          {paths.map((path) => (
            <li key={path.href} className="relative">
              <Link href={path.href}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant={path.active ? "default" : "outline"}>
                        {path.icon}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{path.name}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col items-center gap-4">
        <Button variant="outline" size="icon">
          <UserIcon />
        </Button>
      </div>
    </Card>
  );
};

export default DesktopNav;
