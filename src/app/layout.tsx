import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presentation",
  description: "StockSensAI Final Presentation"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://revealjs.com/css/print/pdf.css" media="print" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
