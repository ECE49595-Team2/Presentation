import { Metadata } from "next";

export const metadata: Metadata = {
  title: "StockSensAI",
  description: "StockSensAI Final Presentation"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
