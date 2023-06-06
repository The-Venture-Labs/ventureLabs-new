import Client from "../components/Client";
import Hero from "../components/Hero";
import OurExpertise from "../components/OurExpertise";
import OurService from "../components/OurService";
import Team from "../components/Team";

function Home() {
  return (
    <>
      <Hero />
      <OurExpertise />
      <OurService />
      <Team/>
      {/* <Client /> */}
    </>
  );
}

export default Home;
