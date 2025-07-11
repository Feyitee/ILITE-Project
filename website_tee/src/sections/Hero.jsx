import backgroundImage from "../images/background.jpg";

const Hero = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat text-white flex flex-col"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Navbar */}
      <nav className="w-full p-6 flex justify-between items-center bg-black/60 backdrop-blur-sm">
        <h1 className="text-2xl font-bold">Logo</h1>
        <ul className="flex gap-8 text-lg font-medium">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Work</li>
          <li className="hover:underline cursor-pointer">Open an account</li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="flex-grow flex items-center justify-center px-4 text-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Platform
          </h2>
          <p className="text-lg md:text-xl">
            We help you do amazing things with ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
