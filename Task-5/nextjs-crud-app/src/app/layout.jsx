import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "Next.js CRUD App",
  description: "A simple CRUD app using Next.js and Tailwind CSS.",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
