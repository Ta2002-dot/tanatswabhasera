import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage:
          "radial-gradient(1200px 600px at 0% 100%, rgba(14,20,35,0.9) 0%, rgba(14,20,35,0) 60%), radial-gradient(1000px 500px at 100% 0%, rgba(8,12,24,0.9) 0%, rgba(8,12,24,0) 60%), linear-gradient(180deg, #0b1220 0%, #0e172a 100%)",
        backgroundColor: "#0b1220",
      }}
    >
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
