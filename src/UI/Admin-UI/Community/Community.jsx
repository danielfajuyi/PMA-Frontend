import Header from "../Community/Component/Header/header";
import Layout from "../Community/Component/Layout/layout";

import "./Community.scss";
const Community = ({ displayNav }) => {
  displayNav(false);
  return (
    <>
      <section>
        <header>
          <Header />
        </header>
        <Layout />
      </section>
    </>
  );
};

export default Community;
