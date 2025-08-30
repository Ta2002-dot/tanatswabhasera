import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage:
          "radial-gradient(circle at 12% 100%, rgba(255,226,176,0.6) 0%, rgba(255,226,176,0) 45%), radial-gradient(circle at 95% -15%, rgba(218,77,241,0.25) 10%, rgba(218,77,241,0) 40%), radial-gradient(100% 100% at 100% 50%, rgba(196,245,233,0.45) 10%, rgba(196,245,233,0) 40%)",
        backgroundColor: "#fafbff",
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
