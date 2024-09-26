import { Route, Routes } from "react-router-dom";
import Public from "./components/Public";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./pages/Welcome";
import NotesList from "./notes/NotesList";
import UserList from "./users/UserList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path="notes">
            <Route index element={<NotesList />} />
          </Route>
          <Route path="users">
            <Route index element={<UserList />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
