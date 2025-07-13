// import {
//   NotificationsRounded,
//   LogoutRounded,
// } from "@mui/icons-material";
import { Menu } from "lucide-react";

export const Header = () => {
  const navLinks = [
    { name: "หน้าแรก", href: "/" },
    { name: "บริการ", href: "/services" },
    { name: "เกี่ยวกับเรา", href: "/about" },
    { name: "ติดต่อ", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-gray-800">MySite</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu className="w-6 h-6 text-gray-700" />
        </div>
      </div>
    </header>
  );
};

// export const Footer = () => {
//   return (
   
//   );
// };

// export const Topic= () => {
//   return (
    
//   );
// };
