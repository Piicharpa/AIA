// import {
//   NotificationsRounded,
//   LogoutRounded,
// } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav
      className="flex justify-between items-center w-full py-2 px-10 bg-white sticky top-0 left-0 z-10"
      style={{ boxShadow: "inset 0px -5px 16px rgba(0, 0, 0, 0.05)" }}
    >
    </nav>
  );
};
// export const Header = () => {
//   const navigate = useNavigate();
//   return (
   
//   );
// };

// export const Footer = () => {
//   return (
   
//   );
// };

// export const Topic= () => {
//   return (
    
//   );
// };
