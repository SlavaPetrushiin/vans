import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Host/Dashboard/Dashboard";
import HostLayot from "./pages/Host/HostLayot";
import Details from "./pages/Host/HostVans/HostVanDetail/Details";
import HostVanDetailLayout, {loader as hostVanDetailLoader} from "./pages/Host/HostVans/HostVanDetail/HostVanDetailLayout";
import Photos from "./pages/Host/HostVans/HostVanDetail/Photos";
import Pricing from "./pages/Host/HostVans/HostVanDetail/Pricing";
import HostVans, { loader as hostVansLoader }  from "./pages/Host/HostVans/HostVans";
import Income from "./pages/Host/Income/Income";
import Reviews from "./pages/Host/Reviews/Reviews";
import Layout from "./pages/Layout";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />

    <Route path="host" element={<HostLayot />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Reviews />} />

      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route path="vans/:vanId" element={<HostVanDetailLayout />} loader={hostVanDetailLoader}>
        <Route index element={<Details />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="photos" element={<Photos />} />
      </Route>
    </Route>

    <Route path="vans" >
      <Route
        index
        loader={vansLoader}
        element={<Vans />}
      />
      <Route
        path=":id"
        loader={vanDetailLoader}
        element={<VanDetail />}
      />
    </Route>

    <Route path="*" element={<NoMatch />} />
  </Route>
))

