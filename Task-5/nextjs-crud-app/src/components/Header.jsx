import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/crud" className="hover:text-gray-300">
              CRUD Operations
            </Link>
          </li>
          <li>
            <Link href="/user" className="hover:text-gray-300">
              User Detail's
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
