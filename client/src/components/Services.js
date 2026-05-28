import React from 'react';
import styled from 'styled-components';
import { services } from '../utils/constants';

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>
            scouting players <br />
            only for your needs
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
            congue nisl. Mauris ullamcorper nisl ut tortor mattis, sed feugiat
            tortor euismod. Quisque tincidunt lorem ut blandit finibus. Donec
            nunc ante, laoreet a laoreet sed, eleifend nec nisl. Ut dolor metus,
            euismod id fringilla sit amet, pharetra quis enim. Sed varius
            volutpat magna, ac eleifend tellus vestibulum ut. Vestibulum risus
            massa, facilisis ac sodales et, imperdiet vitae mi. Phasellus
            molestie sit amet tellus non sagittis. Aenean a lobortis mi.
          </p>
        </article>
        <div className='services-center'>
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className='service'>
                <span className='icon' aria-hidden='true'>
                  {icon}
                </span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0;
  background: var(--clr-grey-10);

  .header h3 {
    margin-bottom: 1.25rem;
  }

  .header p {
    line-height: 1.75;
    color: var(--clr-grey-4);
  }

  .services-center {
    margin-top: 3rem;
    display: grid;
    gap: 1.5rem;
  }

  .service {
    text-align: center;
    padding: 2rem 1.5rem;
    background: var(--clr-white);
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius-lg);
    box-shadow: var(--card-shadow);
    transition: var(--transition);

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--dark-shadow);
    }

    h4 {
      margin-bottom: 0.75rem;
      color: var(--clr-grey-1);
    }

    p {
      margin: 0;
      font-size: 0.95rem;
      color: var(--clr-grey-5);
    }
  }

  span.icon {
    width: 3.5rem;
    height: 3.5rem;
    display: grid;
    margin: 0 auto 1rem;
    place-items: center;
    border-radius: var(--radius);
    background: var(--clr-primary-10);
    color: var(--clr-primary-4);

    svg {
      font-size: 1.75rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
  }

  @media (min-width: 992px) {
    padding: 5rem 0;

    .services-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
export default Services;
