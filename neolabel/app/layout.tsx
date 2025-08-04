import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import NavBar from "@/app/ui/homepage/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NavBar />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
