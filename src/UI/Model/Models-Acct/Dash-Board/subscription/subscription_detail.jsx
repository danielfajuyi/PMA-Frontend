import "./subscription_detail.scss";

const SubscriptionDetail = () => {
  return (
    <div id="subscription_detail">
      <header>Subscription Data</header>
      <div id="body">
        <span>Subscription Name</span> <span>Model Portfolio</span>
        <span>Duration</span> <span>365 Days</span>
        <span>Price</span> <span>2,000</span>
        <span>Status</span> <span>Active</span>
        <span>Currency Code</span> <span>NGN</span>
        <span id="note">
          This is your current Subscription. Expires in 365 days. You can renew.
        </span>
      </div>
      <footer>
        <button>PAY NOW</button>
      </footer>
    </div>
  );
};

export default SubscriptionDetail;
