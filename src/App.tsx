import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Host/Dashboard/Dashboard";
import HostLayot from "./pages/Host/HostLayot";
import HostVans from "./pages/Host/HostVans/HostVans";
import Income from "./pages/Host/Income/Income";
import Reviews from "./pages/Host/Reviews/Reviews";
import Layout from "./pages/Layout";
import VanDetail from "./pages/Vans/VanDetail";
import Vans from "./pages/Vans/Vans";
import "./App.scss";
import Details from "./pages/Host/HostVans/HostVanDetail/Details";
import Photos from "./pages/Host/HostVans/HostVanDetail/Photos";
import Pricing from "./pages/Host/HostVans/HostVanDetail/Pricing";
import HostVanDetailLayout from "./pages/Host/HostVans/HostVanDetail/HostVanDetailLayout";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NoMatch />} />

        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="host" element={<HostLayot />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />

          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:vanId" element={<HostVanDetailLayout />}>
            <Route index element={<Details />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
          </Route>
        </Route>

        <Route path="vans">
          <Route index element={<Vans />} />
          <Route path=":id" element={<VanDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
