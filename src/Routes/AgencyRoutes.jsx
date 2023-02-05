import { Route } from "react-router";

import AgencyDashboard from "../UI/Agency/AgencyPage/dashboard/dashboard";
import AgencyPage from "../UI/Agency/AgencyPage/agency_page";

export const AgencyRoutes = (showNavbar, setShowNavbar) => {
  return (
    <Route
      path="/agencypage"
      element={
        <AgencyPage showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      }
    >
      <Route path="dashboard" element={<AgencyDashboard />} />
    </Route>
  );
};
