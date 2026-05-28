import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import solo from '../assets/solo.jpeg';
import epic from '../assets/epic.jpeg';

const Hero = () => {
  return (
    <Wrapper>
      <div className='hero-inner section-center'>
        <article className='content'>
          <p className='eyebrow'>Football transfer marketplace</p>
          <h1>
            Find your next
            <br />
            <span className='highlight'>dream player</span>
          </h1>
          <p className='lead'>
            Browse featured talent, filter by position and value, and complete a
            secure demo checkout with Auth0 and Stripe.
          </p>
          <div className='actions'>
            <Link to='/players' className='btn hero-btn'>
              Browse players
            </Link>
            <Link to='/about' className='btn-secondary'>
              How it works
            </Link>
          </div>
        </article>
        <article className='img-container'>
          <img src={solo} alt='Professional football player' className='main-img' />
          <img src={epic} alt='Football action' className='accent-img' />
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: radial-gradient(
      ellipse 90% 70% at 85% 15%,
      rgba(16, 185, 129, 0.14),
      transparent 55%
    ),
    var(--clr-grey-10);

  .hero-inner {
    min-height: 70vh;
    display: grid;
    gap: 2.5rem;
    padding: 2.5rem 0 3.5rem;
    align-items: center;
    text-align: left;
  }

  .content {
    max-width: 36rem;
  }

  .img-container {
    display: none;
  }

  .eyebrow {
    display: inline-block;
    margin-bottom: 1rem;
    padding: 0.35rem 0.85rem;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--clr-primary-3);
    background: var(--clr-primary-10);
    border-radius: 999px;
    border: 1px solid var(--clr-primary-8);
  }

  h1 {
    font-size: clamp(2.25rem, 5vw, 3.25rem);
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  .highlight {
    color: var(--clr-primary-4);
  }

  .lead {
    max-width: 34rem;
    margin-bottom: 1.75rem;
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--clr-grey-4);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    padding: 0.65rem 1.35rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--clr-grey-2);
    background: var(--clr-white);
    border: 1px solid var(--clr-grey-8);
    border-radius: 999px;
    transition: var(--transition);

    &:hover {
      border-color: var(--clr-primary-6);
      color: var(--clr-primary-3);
    }
  }

  @media (min-width: 992px) {
    .hero-inner {
      min-height: calc(100vh - 4.5rem);
      grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
      gap: 4rem;
      padding: 3rem 0 4rem;
    }

    .content {
      max-width: 32rem;
      justify-self: start;
    }

    .img-container {
      display: block;
      position: relative;
      justify-self: end;
      width: 100%;
      max-width: 520px;
    }

    .main-img {
      width: 100%;
      height: min(520px, 72vh);
      object-fit: cover;
      border-radius: var(--radius-xl);
      box-shadow: var(--dark-shadow);
    }

    .accent-img {
      position: absolute;
      bottom: -1.25rem;
      left: -1.5rem;
      width: clamp(140px, 28%, 200px);
      height: clamp(140px, 28%, 200px);
      object-fit: cover;
      border-radius: var(--radius-lg);
      border: 4px solid var(--clr-white);
      box-shadow: var(--card-shadow);
    }
  }

  @media (min-width: 1200px) {
    .hero-inner {
      gap: 5rem;
    }

    .content {
      max-width: 36rem;
    }

    .img-container {
      max-width: 560px;
    }
  }
`;

export default Hero;
