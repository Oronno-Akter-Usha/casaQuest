import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Properties from "./Properties/Properties";

const Home = () => {
  return (
    <div className="md:max-w-6xl mx-5 md:mx-6 lg:mx-auto mt-24">
      <Helmet>
        <title>Casa Quest</title>
        <link rel="" href="/" />
      </Helmet>
      <Banner></Banner>
      <Properties></Properties>
    </div>
  );
};

export default Home;

// This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

// Currently, two official plugins are available:

// - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
// - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
