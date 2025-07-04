import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import BgBottomLeft from "../../assets/image/LoginWave.svg"; // optional

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.email || !formData.password) {
        alert("Please fill in all fields.");
        return;
      }

      if (formData.email === "hr@ccc.com" && formData.password === "cloud123") {
        localStorage.setItem("auth", "true");
        if (formData.remember) {
          localStorage.setItem("remember", "true");
        }

        navigate("/dashboard");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Top Section (Left Side) */}
      <div className="hidden md:flex w-1/2 bg-[#111827] flex-col relative px-10 py-6">
        {/* Logo at Top Left */}
        <div className="flex items-center gap-2 mb-4">
          <img src={Logo} alt="CCC HRMS" className="w-12" />
          <h3 className="text-white font-bold text-2xl">CCC HRMS</h3>
        </div>

        {/* Background Bottom Decoration */}
        <img
          src={BgBottomLeft}
          alt="bottom-left-decor"
          className="absolute bottom-0 left-0 w-1/2 opacity-10"
        />

        {/* Main Content Centered Vertically */}
        <div className="flex-1 flex flex-col justify-center text-white relative z-10 pr-12 md:pr-20 lg:pr-28">
          {/* Welcome Box */}
          <div className="border-2 border-white px-4 py-2 inline-block text-white mb-4">
            <div className="uppercase text-lg tracking-wider text-gray-300">
              Welcome to
            </div>
            <h2 className="text-4xl font-extrabold">CloudCentric HRMS</h2>
          </div>
          {/* Description */}
          <p className="text-md text-gray-300 max-w-md mb-6">
            Your all-in-one HR companion — seamlessly manage attendance,
            payroll, leaves, onboarding, and everything in between.
          </p>

          {/* CTA Button */}
          <button className="w-36 tracking-wider uppercase bg-white text-black font-semibold py-2 text-sm rounded hover:bg-gray-200 transition">
            Visit Website
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 md:px-20 py-12">
        <h3 className="text-sm font-medium text-gray-600 mb-1">LOGIN TO</h3>
        <h1 className="text-2xl font-bold mb-8">Your HRMS Dashboard</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Company Email Id"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember this Device
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white py-2 rounded font-semibold hover:from-blue-600 hover:to-blue-500 transition"
          >
            Login Now
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          Need Help?{" "}
          <a href="#" className="text-orange-500 font-medium">
            Contact HR!
          </a>
        </p>
      </div>
    </div>
  );
}
