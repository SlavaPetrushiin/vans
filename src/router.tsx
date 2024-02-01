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
import HostVanDetailLayout, { loader as hostVanDetailLoader } from "./pages/Host/HostVans/HostVanDetail/HostVanDetailLayout";
import Photos from "./pages/Host/HostVans/HostVanDetail/Photos";
import Pricing from "./pages/Host/HostVans/HostVanDetail/Pricing";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans/HostVans";
import Income from "./pages/Host/Income/Income";
import Reviews from "./pages/Host/Reviews/Reviews";
import Layout from "./pages/Layout";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import ErrorComponet from "./components/ErrorComponet";
import Login, {loader as loaderLogin} from "./pages/Login/Login";
import { requireAuth } from "./utils";


export const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<ErrorComponet />}>
    <Route
      index
      element={<Home />}
      loader={async () => {
        return null
      }}

    />
    <Route
      path="about"
      element={<About />}
      loader={async () => {
        return null
      }}
    />

    <Route
      path="host"
      element={<HostLayot />}
    >
      <Route
        index
        element={<Dashboard />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="income"
        element={<Income />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async () => await requireAuth()}
      />

      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route
        path="vans/:vanId"
        element={<HostVanDetailLayout />}
        loader={hostVanDetailLoader}
      >
        <Route index element={<Details />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="pricing"
          element={<Pricing />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="photos"
          element={<Photos />}
          loader={async () => await requireAuth()}
        />
      </Route>
    </Route>

    <Route path="vans">
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

    <Route
      path="login"
      element={<Login />}
      loader={loaderLogin}
    />

    <Route path="*" element={<NoMatch />} />
  </Route>
))

