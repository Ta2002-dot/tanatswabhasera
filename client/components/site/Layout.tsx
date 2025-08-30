import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ThreeBackground from "./ThreeBackground";

export default function Layout() {
  return (
    <div className="dark min-h-screen flex flex-col relative overflow-hidden glossy-bg">
      <div className="glossy-overlay" />
      <ThreeBackground />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
