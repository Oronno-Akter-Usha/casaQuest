import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="mt-20 mx-5">
      <Helmet>
        <title>Casa Quest-About page</title>
        <link rel="" href="/" />
      </Helmet>
      <h2 className="text-2xl md:text-3xl font-bold">About Us</h2>
      <p className="mt-3 md:mt-6">
        At CasaQuest, we believe that finding the perfect home is not just about
        square footage and amenities; it is about discovering a place where
        memories are made, dreams are realized, and lives are enriched. With a
        passion for real estate and a commitment to exceptional service,
        CasaQuest is your dedicated partner on the journey to finding your ideal
        residence. Founded with the vision of providing personalized guidance
        and expert advice, CasaQuest brings together a team of experienced
        professionals who are deeply invested in the well-being and satisfaction
        of our clients. Whether you are a first-time buyer, seasoned investor,
        or relocating to a new city, we are here to support you every step of
        the way. Our approach is built on integrity, transparency, and a genuine
        desire to exceed expectations. We take the time to understand your
        unique preferences, priorities, and goals, ensuring that each property
        we present aligns perfectly with your vision of home. At CasaQuest, we
        do not just help you find a place to live; we help you find your
        sanctuary, your haven, your Casa. Let us be your guide as you embark on
        this exciting journey of discovery and fulfillment. Welcome to
        CasaQuest, where your dream home becomes a reality.
      </p>
    </div>
  );
};

export default About;
