import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
