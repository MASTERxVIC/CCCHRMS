// src/components/layouts/MainLayout.jsx
import Navbar from "../components/common/Navbar";
import Sidebars from "../components/common/Sidebars";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebars />
        <div className="flex-1 overflow-auto p-4 bg-[#f2f7fb]">
          {children}
        </div>
      </div>
    </div>
  );
}
