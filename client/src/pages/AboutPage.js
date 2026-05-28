import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/epic.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='Football pitch' />
        <article>
          <p className='eyebrow'>Who we are</p>
          <div className='title'>
            <h2>Our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Are you tired of agents that are ripping you off with their fees and
            the value of the players is most of the time questionable? We are
            offering an alternative where you can check everything about a
            player before making the decision to buy him. You have full control
            of the information received about a player, instead of agents
            presenting only what is suitable for them.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-9);
  padding-bottom: 3rem;

  display: grid;
  gap: 2rem;

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius-lg);
    height: min(420px, 50vh);
    object-fit: cover;
    box-shadow: var(--dark-shadow);
  }

  article {
    background: var(--clr-white);
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius-lg);
    padding: 2rem;
    box-shadow: var(--card-shadow);
  }

  .eyebrow {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--clr-primary-4);
    margin-bottom: 0.5rem;
  }

  .title {
    text-align: left;
    margin-bottom: 1rem;
  }

  .underline {
    margin-left: 0;
  }

  p {
    line-height: 1.75;
    color: var(--clr-grey-4);
    margin: 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export default AboutPage;
