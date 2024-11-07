import { Montserrat } from 'next/font/google'
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: "First Meetup",
  description: "MERN First Meetup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="bg-[url('/background.svg')] bg-cover bg-no-repeat min-h-screen">
        {children}
      </body>
    </html>
  );
}
