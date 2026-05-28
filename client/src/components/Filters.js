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
      <h4 className='panel-title'>Filters</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='form-control'>
          <label htmlFor='search'>Search</label>
          <input
            type='text'
            id='search'
            name='text'
            placeholder='Player name...'
            className='search-input'
            value={text}
            onChange={updateFilters}
          />
        </div>

        <div className='form-control'>
          <h5>Category</h5>
          <div className='chip-group'>
            {categories.map((c, index) => (
              <button
                key={index}
                onClick={updateFilters}
                type='button'
                name='category'
                className={`chip ${
                  category === c.toLowerCase() ? 'active' : ''
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className='form-control'>
          <label htmlFor='positions'>Position</label>
          <select
            id='positions'
            name='positions'
            value={positions}
            onChange={updateFilters}
          >
            {position.map((c, index) => (
              <option key={index} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className='form-control'>
          <label htmlFor='foot'>Preferred foot</label>
          <select id='foot' name='foot' value={foot} onChange={updateFilters}>
            {feet.map((f, index) => (
              <option key={index} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>

        <div className='form-control'>
          <label htmlFor='marketValue'>Max value</label>
          <p className='price'>{formatMarketValue(marketValue)}</p>
          <input
            type='range'
            id='marketValue'
            name='marketValue'
            onChange={updateFilters}
            min={min_Value}
            max={max_Value}
            value={marketValue}
          />
        </div>

        <div className='form-control injury'>
          <label htmlFor='injured'>Available only (not injured)</label>
          <input
            type='checkbox'
            name='injured'
            id='injured'
            onChange={updateFilters}
            checked={!injured}
          />
        </div>
      </form>
      <button type='button' className='clear-btn' onClick={clearFilters}>
        Clear filters
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  background: var(--clr-white);
  border: 1px solid var(--clr-grey-8);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--card-shadow);
  height: fit-content;

  @media (min-width: 768px) {
    position: sticky;
    top: 5.5rem;
  }

  .panel-title {
    margin-bottom: 1.25rem;
    font-size: 1.1rem;
    text-transform: none;
  }

  .form-control {
    margin-bottom: 1.25rem;

    label,
    h5 {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--clr-grey-5);
    }
  }

  .search-input,
  select {
    width: 100%;
    padding: 0.6rem 0.85rem;
    font-family: var(--font-sans);
    font-size: 0.95rem;
    color: var(--clr-grey-2);
    background: var(--clr-grey-10);
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    transition: var(--transition);

    &:focus {
      outline: none;
      border-color: var(--clr-primary-5);
      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
    }
  }

  .chip-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .chip {
    padding: 0.35rem 0.75rem;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: capitalize;
    color: var(--clr-grey-4);
    background: var(--clr-grey-10);
    border: 1px solid var(--clr-grey-8);
    border-radius: 999px;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      border-color: var(--clr-primary-6);
      color: var(--clr-primary-3);
    }

    &.active {
      color: var(--clr-white);
      background: var(--clr-primary-5);
      border-color: var(--clr-primary-5);
    }
  }

  .price {
    margin-bottom: 0.5rem;
    font-weight: 700;
    color: var(--clr-primary-4);
  }

  input[type='range'] {
    width: 100%;
    accent-color: var(--clr-primary-5);
  }

  .injury {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;

    label {
      margin: 0;
      text-transform: none;
      font-size: 0.9rem;
      color: var(--clr-grey-3);
    }
  }

  .clear-btn {
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.6rem;
    font-family: var(--font-sans);
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--clr-grey-3);
    background: transparent;
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      border-color: var(--clr-red-dark);
      color: var(--clr-red-dark);
      background: #fef2f2;
    }
  }
`;

export default Filters;
