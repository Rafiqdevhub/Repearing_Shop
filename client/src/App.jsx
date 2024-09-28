import { Route, Routes } from "react-router-dom";
import Public from "./components/Public";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./pages/Welcome";
import NotesList from "./notes/NotesList";
import UserList from "./users/UserList";
import EditNote from "./notes/EditNote";
import NewNote from "./notes/NewNote";
import EditUser from "./users/EditUser";
import NewUserForm from "./users/NewUserForm";
import Prefetch from "./pages/Prefetch";
import UsersList from "./users/UserList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route element={<Prefetch />}>
          <Route path="dash" element={<DashLayout />}>
            <Route index element={<Welcome />} />

            <Route path="users">
              <Route index element={<UsersList />} />
              <Route path=":id" element={<EditUser />} />
              <Route path="new" element={<NewUserForm />} />
            </Route>

            <Route path="notes">
              <Route index element={<NotesList />} />
              <Route path=":id" element={<EditNote />} />
              <Route path="new" element={<NewNote />} />
            </Route>
          </Route>
          {/* End Dash */}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
