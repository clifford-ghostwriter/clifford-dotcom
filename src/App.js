import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Error,
  EventsAndGallery,
  Home,
  Services,
  SharedLayout,
  Store,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/eventsandgallery" element={<EventsAndGallery />} />
          <Route path="/store" element={<Store />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
