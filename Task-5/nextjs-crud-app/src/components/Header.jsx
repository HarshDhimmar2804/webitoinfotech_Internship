import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-900 shadow-md">
      <nav className="container mx-auto p-4">
        <ul className="flex justify-center items-center space-x-6">
          <li>
            <Link
              href="/"
              className="text-white text-lg font-medium hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white text-lg font-medium hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/crud"
              className="text-white text-lg font-medium hover:text-gray-300 transition duration-300"
            >
              CRUD Operations
            </Link>
          </li>
          <li>
            <Link
              href="/user"
              className="text-white text-lg font-medium hover:text-gray-300 transition duration-300"
            >
              User Detail's
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
