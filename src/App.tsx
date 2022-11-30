import { lazy } from "solid-js";
import { Routes, Route, A } from "@solidjs/router"
const Count = lazy(() => import("./Count"));
const Home = lazy(() => import("./Home"));

export default function App() {
  return <>
    {/* <h1>My Site with Lots of Pages</h1>
    <nav>
      <A href="/about">About</A>
      <A href="/">Home</A>
    </nav> */}
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/count" component={Count} />
      <Route path="/about" element={<div>This site was made with Solid</div>} />
    </Routes>
  </>
}
