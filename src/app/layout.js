import { Header } from "@/components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import { Footer } from "@/components/Footer/Footer";

export const metadata = {
  title: "SeJu",
  description: "Semana de la Juventud",
  name: "viewport",
  content: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100 text-bg-light">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
