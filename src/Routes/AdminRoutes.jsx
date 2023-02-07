import { Route } from "react-router";

import AdminPage from "../UI/Admin-UI/AdminPage/admin_page";
import AdminDashboard from "../UI/Admin-UI/AdminPage/dashboard/dashboard";

export const AdminRoutes = (showNavbar, setShowNavbar) => {
  return (
    <Route
      path="/adminpage"
      element={
        <AdminPage showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      }
    >
      <Route path="dashboard" element={<AdminDashboard />} />
    </Route>
  );
};
