import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filterContext';
import { getUniqueValues, formatMarketValue } from '../utils/helpers';

const Filters = () => {
  const {
    filters: {
      text,
      category,
      positions,
      foot,
      min_Value,
      max_Value,
      marketValue,
      injured
    },
    updateFilters,
    clearFilters,
    allPlayers
  } = useFilterContext();

  const categories = getUniqueValues(allPlayers, 'category');
  const position = getUniqueValues(allPlayers, 'positions');
  const feet = getUniqueValues(allPlayers, 'foot');

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* {search input} */}
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='search'
              className='search-input'
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* {end search input} */}
          {/* categories */}
          <div className='form-control'>
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='category'
                    className={`${
                      category === c.toLowerCase() ? 'active' : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end ofcategories */}
          {/* positions */}
          <div className='form-control'>
            <h5>position</h5>
            <select
              name='positions'
              value={positions}
              onChange={updateFilters}
              className='positions'
            >
              {position.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of positions */}
          {/* foot */}
          <div className='form-control'>
            <h5>Preferred foot</h5>
            <select
              name='foot'
              value={foot}
              onChange={updateFilters}
              className='positions'
            >
              {feet.map((f, index) => {
                return (
                  <option key={index} value={f}>
                    {f}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of foot */}
          {/* value */}
          <div className='form-control'>
            <h5>value</h5>
            <p className='price'>{formatMarketValue(marketValue)}</p>
            <input
              type='range'
              name='marketValue'
              onChange={updateFilters}
              min={min_Value}
              max={max_Value}
              value={marketValue}
            />
          </div>
          {/* end of value */}
          {/* injured */}
          <div className='form-control injury'>
            <label htmlFor='injured'>not Injured</label>
            <input
              type='checkbox'
              name='injured'
              id='injured'
              onChange={updateFilters}
              checked={!injured}
            />
          </div>
          {/* end of injured */}
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          {' '}
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .positions {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .injury {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
