import { Route, Routes } from "react-router-dom";
import Public from "./components/Public";
import Layout from "./components/Layout";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
