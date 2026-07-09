import NavBar from "../components/NavBar";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="bg-black">
      <NavBar />
      <Contact variant="full" />
    </div>
  );
}
