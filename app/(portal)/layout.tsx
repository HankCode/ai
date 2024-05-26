import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awakened Imagination",
  description: "A practical integration of the law of attraction",
};

import SidebarWrapper from "@/components/sidebar/SidebarWrapper";

type Props = React.PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarWrapper>{children}</SidebarWrapper>
      </body>
    </html>
  );
};

export default Layout;
