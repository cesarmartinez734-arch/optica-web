import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full shadow-card">
      <TopBar />
      <Navbar />
    </header>
  );
}
