import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import solo from '../assets/solo.jpeg';
import epic from '../assets/epic.jpeg';

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          Find your <br />
          dream player!
        </h1>
        <p>
          Finding the best player to fit your team has never been easier. NO
          hidden agent fees! NO hidden information or medical records of the
          players. YOU are 100% responsible of your next player purchase. Want
          to build a dream team? Wait no more!
        </p>
        <Link to='/players' className='btn hero-btn'>
          buy now
        </Link>
      </article>
      <article className='img-container'>
        <img src={solo} alt='pro player' className='main-img' />
        <img src={epic} alt='not so pro player' className='accent-img' />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
