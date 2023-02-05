import { useState } from "react";
import FadeIn from "../../../../Components/FadeIn/fade_in";
import "./subscription.scss";
import SubscriptionDetail from "./subscription_detail";

const ModelSubscription = () => {
  const [showDetails, setShowDetails] = useState(false);
  const openDetails = () => {
    setShowDetails(true);
  };
  const removeDetails = (e) => {
    if (e.target.id === "bg") setShowDetails(false);
  };

  return (
    <FadeIn>
      <div id="model_subscription">
        <h3>Subscription</h3>
        <div id="container">
          <header>Available Subscriptions</header>
          <table>
            <thead>
              <tr>
                <th># ID</th>
                <th>Subscription Name</th>
                <th>Price</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  #123 <span>model</span>
                </td>
                <td>Model Portfolio</td>
                <td>2,000</td>
                <td>365 Days</td>
                <td className="active">Active</td>
                <td>
                  <button onClick={openDetails}>View</button>
                </td>
              </tr>
              <tr>
                <td>
                  #245 <span>model</span>
                </td>
                <td>Featured</td>
                <td>1,000</td>
                <td>120 Days</td>
                <td className="active">Active</td>
                <td>
                  <button onClick={openDetails}>View</button>
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>

        {showDetails && (
          <div id="bg" onClick={removeDetails}>
            <SubscriptionDetail />
          </div>
        )}
      </div>
    </FadeIn>
  );
};

export default ModelSubscription;
