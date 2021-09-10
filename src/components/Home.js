import Helmet from 'react-helmet';
import Hero from './Hero';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Liberzen</title>
      </Helmet>
      <Hero />
    </>
  );
};

export default Home;
