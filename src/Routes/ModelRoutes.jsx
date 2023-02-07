import { Route } from "react-router";
import ModelPage from "../UI/Model/ModelPage/model_page";
import ModelDashboard from "../UI/Model/ModelPage/dashboard/dashboard";
import MyWallet from "../UI/Model/ModelPage/wallet/my_wallet";
import Review from "../UI/Model/ModelPage/review/review";
import Reviews from "../UI/Model/ModelPage/review/view_reviews";
import WriteReview from "../UI/Model/ModelPage/review/write_review";
import ModelSubscription from "../UI/Model/ModelPage/subscription/subscription";

export const ModelRoutes = (showNavbar, setShowNavbar) => {
  return (
    <Route
      path="/modelpage"
      element={
        <ModelPage showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      }
    >
      <Route path="dashboard" element={<ModelDashboard />} />
      <Route path="mywallet" element={<MyWallet />} />
      <Route path="review" element={<Review />}>
        <Route path="writereview" element={<WriteReview />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="subscription" element={<ModelSubscription />} />
    </Route>
  );
};
