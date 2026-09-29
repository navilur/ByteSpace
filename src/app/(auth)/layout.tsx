import type { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main
      className="min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/auth_bg.png')",
      }}
    >
      {children}
    </main>
  );
};

export default AuthLayout;
