import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: [], weight: '500' });

export const metadata = {
  title: "NotePlus",
  description: "NotePlus, can make your notes as simple as possible",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>

          <Navbar />
          <div className="mt-8">{children}</div>

      </body>
    </html>
  );
}
