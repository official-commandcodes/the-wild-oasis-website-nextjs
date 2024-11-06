import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ display: "swap", subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s The Wild Oais",
    default: "Welcome / The Wild Oasis",
  },
  description: "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-primary-950 antialiased text-primary-100 min-h-screen ${josefin.className} flex flex-col`}>
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
