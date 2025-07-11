import heroImage from "../images/tobi.png";
const Hero = () => {
  return (
    <div className="bg-silver grid gap-8 sm:flex px-8 py-6">
      <div className="m-1.5">
        <p className="text-[20px]">Lessons and Insights</p>
        <p className="text-[20px]">from 8 years</p>
        <p className="mt-6">
          Where to grow your business as a photographer site or social media?
        </p>
        <button className="mt-5">Register</button>
      </div>
      <div className="sm:col-span-10 min-h-[100px]">
        <img src={heroImage} />
      </div>
    </div>
  );
};

export default Hero;
