import {Helmet} from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Estate from "../../components/Estate/Estate";
import Testimonial from "../../components/Testimonial/Testimonial";
import WhySection from "../../components/WhySection/WhySection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Elysian Estates | Home</title>
      </Helmet>
      <Banner></Banner>
      <Estate></Estate>
      <WhySection></WhySection>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
