import "./globals.css";

export const metadata = {
  title: "First Meetup",
  description: "MERN First Meetup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[url('/background.svg')] bg-cover bg-no-repeat min-h-screen">
        {children}
      </body>
    </html>
  );
}
