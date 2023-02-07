import { Route } from "react-router";
import MyWallet from "../UI/Client/ClientPage/wallet/my_wallet";
import Review from "../UI/Client/ClientPage/review/review";
import Reviews from "../UI/Client/ClientPage/review/view_reviews";
import WriteReview from "../UI/Client/ClientPage/review/write_review";
import ClientPage from "../UI/Client/ClientPage/client_page";
import ClientDashboard from "../UI/Client/ClientPage/dashboard/dashboard";

export const ClientRoutes = (showNavbar, setShowNavbar) => {
  return (
    <Route
      path="/clientpage"
      element={
        <ClientPage showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      }
    >
      <Route path="dashboard" element={<ClientDashboard />} />
      <Route path="mywallet" element={<MyWallet />} />
      <Route path="review" element={<Review />}>
        <Route path="writereview" element={<WriteReview />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Route>
  );
};
