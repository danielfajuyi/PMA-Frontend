import "./topbar.scss";

import { BiEnvelope, BiSearch } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import useMediaQuery from "../../../custom_hooks/useMediaQuery";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";

const DashboardTopbar = ({
  setSidebarVisibility,
  sidebarVisibility,
  lastItem,
  setToggleNotice,
  notice,
}) => {
  let mQ = useMediaQuery("(min-width: 540px)");

  return (
    <nav id="topbar">
      <div id="left">
        <FaBars id="bars" size={26} onClick={() => setSidebarVisibility(!sidebarVisibility)} />
        <div id="search_bar">
          <BiSearch id="search_icon" size={18} />
          <input type="text" name="topbar_search" id="topbar_search" placeholder="Search" />
        </div>
      </div>

      <IconContext.Provider value={{ size: mQ ? 32 : 26 }}>
        <div id="icons_holder">
          <motion.div whileTap={{ scale: 0.8 }}>
            <BiSearch color="white" display={mQ ? "none" : "inline"} />
          </motion.div>
          <motion.div whileTap={{ scale: 0.8 }}>
            <BiEnvelope color="white" />
          </motion.div>
          <motion.div
            id="notification"
            whileTap={{ scale: 0.8 }}
            onClick={() => setToggleNotice((prev) => !prev)}>
            <IoNotifications
              id="icon"
              color="white"
              onClick={() => setToggleNotice((prev) => !prev)}
            />
            <span id="data">{notice.length}</span>
          </motion.div>
          {lastItem}
        </div>
      </IconContext.Provider>
    </nav>
  );
};

export default DashboardTopbar;
