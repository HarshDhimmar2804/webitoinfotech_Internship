const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
          About This Application
        </h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Welcome to our Next.js application! Built with modern technologies and
          styled using the power of Tailwind CSS, this app is designed for
          seamless performance and user experience. Explore the app to find out
          more about its intuitive features and functionalities.
        </p>
        <p className="text-gray-600 text-md">
          Whether you're here to explore the CRUD features, manage your data, or
          learn more about web development, we’ve created an easy-to-navigate
          platform with a clean, responsive design to enhance your journey.
        </p>
      </div>
    </div>
  );
};

export default About;
