import { MessageSquareIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useNavigation = () => {
  const pathname = usePathname();

  const paths = useMemo(
    () => [
      {
        name: "Dashboard",
        href: "/portal",
        icon: <MessageSquareIcon />,
        active: pathname === "/portal",
      },
      {
        name: "My states",
        href: "/portal/desires",
        icon: <MessageSquareIcon />,
        active: pathname === "/portal",
      },
      {
        name: "Third link",
        href: "#",
        icon: <MessageSquareIcon />,
        active: pathname === "/portal",
      },
    ],
    [pathname]
  );

  return paths;
};

export default useNavigation;
