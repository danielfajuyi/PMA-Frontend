import { useState } from "react";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
const Review = () => {
  const navigate = useNavigate();
  const loc = useLocation();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (
      loc.pathname === "/modelpage/review" ||
      loc.pathname === "/modelpage/review/"
    )
      navigate(-1);
    setReady(true);
  }, [navigate, loc.pathname]);

  return (
    ready && (
      <motion.div>
        <Outlet />
      </motion.div>
    )
  );
};

export default Review;
