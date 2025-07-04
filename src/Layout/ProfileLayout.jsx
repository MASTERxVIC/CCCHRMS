// src/components/layouts/ProfileLayout.jsx
import Header from "../components/common/Header";
import Sidebars from "../components/common/Sidebars";
import ProfileBottomNav from "../components/common/ProfileBottomNav";

export default function ProfileLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header name="Vishal Saraiwal" employeeId="CCC02072" />
      <div className="flex flex-1 overflow-hidden">
        <Sidebars />
        <div className="flex-1 overflow-auto p-4 bg-[#f2f7fb]">{children}</div>
      </div>
      <ProfileBottomNav />
    </div>
  );
}
