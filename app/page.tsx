import { Toaster } from "react-hot-toast";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <main>
      <Toaster position="top-center" />
      <Homepage />
    </main>
  );
}
