import "./sidebar.scss";
import logo from "../../../Images/dashboard/logo.png";

const DashboardSidebar = (props) => {
  const topList = props.top.map((item, i) => {
    return (
      <li key={item.name} id={i === 0 ? "active_li" : ""}>
        {item.icon}
        <span>{item.name}</span>
      </li>
    );
  });

  const bottomList = props.bottom?.map((item, i) => {
    return (
      <li key={item.name} id={i === 0 ? "bottom" : ""}>
        {item.icon}
        <span>{item.name}</span>
      </li>
    );
  });

  return (
    <nav id="dashboard_sidebar">
      <div id="logo_holder">
        <img src={logo} alt="Premium Model" />
      </div>
      <ul id="nav_list">
        {topList}
        {bottomList}
      </ul>
    </nav>
  );
};

export default DashboardSidebar;
