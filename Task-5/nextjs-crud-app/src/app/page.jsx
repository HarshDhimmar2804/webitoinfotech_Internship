const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
          Welcome to the Home Page
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">Basic Home Page</p>
        {/* <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to a sleek and responsive Next.js application powered by
          Tailwind CSS. Explore intuitive features and enjoy a design crafted
          for simplicity and elegance.
        </p> */}
        <div className="mt-8 space-x-4">
          <a
            href="/about"
            className="bg-slate-900 text-white px-6 py-3 rounded-full shadow-lg text-lg font-medium hover:bg-slate-700 transition duration-300"
          >
            Learn More
          </a>
          <a
            href="/crud"
            className="bg-gray-200 text-slate-900 px-6 py-3 rounded-full shadow-lg text-lg font-medium hover:bg-gray-300 transition duration-300"
          >
            CRUD Features
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
