import {useEffect} from 'react';
import {useState} from 'react';

const Mobile = () => {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const initBackground = () => {
      setInterval(() => {
        randombg();
      }, 3000);
    };
    initBackground();
    const randombg = () => {
      const randomNumber = Math.ceil(Math.random() * 5);
      if (randomNumber === number) {
        return number + 1;
      }
      if (randomNumber === 5) {
        return 1;
      }
      setNumber(randomNumber);
    };
    window.onload = randombg();
  }, []);

  return <img src={`img/${number}.png`} alt="home-img" />;
};

export default Mobile;
