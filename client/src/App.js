import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StoreService from "./services/StoreService";

import HomePage from "./components/home";
import ProfilePage from "./components/profile";

import Authenticated from "./auth/authenticated";

const store = StoreService.setup();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="profile" element={<Authenticated element={<ProfilePage />} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
