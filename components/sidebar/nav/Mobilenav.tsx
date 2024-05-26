"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import useNavigation from "@/hooks/useNavigation";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { UserIcon } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  const paths = useNavigation();
  return (
    <Card className="lg:hidden fixed bottom-4 w-[calc(100vw-32px)] flex items-center h-16 p-2">
      <nav className="w-full">
        <ul className="flex justify-evenly items-center">
          {paths.map((path) => (
            <li key={path.href} className="relative">
              <Link href={path.href}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant={path.active ? "default" : "outline"} size="icon">
                        {path.icon}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{path.name}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </li>
          ))}
          <li>
            <Button variant="outline" size="icon">
              <UserIcon />
            </Button>
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default MobileNav;
