"use client";

import { Provider } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { store } from "../redux/store";
import "../styles/globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {/* Wrap the layout with the Redux Provider */}
        <Provider store={store}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
