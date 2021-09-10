import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import data from './data';

function About() {
  const [people] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="supreme">
        <h1 className="supreme-title">LIBERZEN</h1>
        <h3 className="supreme-ceo">CEO | 서 미 령</h3>
        <h3 className="supreme-found">Found | 2021 . 08</h3>
        <h3 className="supreme-define">
          <div className="active"> liberty (자유) + Citizen(시민)</div> <br />
          자유를 추구하는 현대 도시인을 위한 옷을 만듭니다.
        </h3>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const {id, image, name} = person;
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default About;
