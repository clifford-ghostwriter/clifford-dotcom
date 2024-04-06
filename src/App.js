import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Error,
  EventsAndGallery,
  Home,
  Services,
  SharedLayout,
  Store,
  SingleProject,
} from "./pages";
// import { useEffect, useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/eventsandgallery" element={<EventsAndGallery />} />
          <Route path="/store" element={<Store />} />
          <Route path="products/:id" element={<SingleProject />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
