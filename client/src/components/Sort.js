import React from 'react';
import { useFilterContext } from '../context/filterContext';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import styled from 'styled-components';

const Sort = () => {
  const {
    filteredPlayers: players,
    gridView,
    setGridView,
    setListView,
    sort,
    updateSort
  } = useFilterContext();

  return (
    <Wrapper>
      <div className='toolbar-left'>
        <div className='btn-container'>
          <button
            type='button'
            className={gridView ? 'active' : ''}
            onClick={setGridView}
            aria-label='Grid view'
          >
            <BsFillGridFill />
          </button>
          <button
            type='button'
            className={!gridView ? 'active' : ''}
            onClick={setListView}
            aria-label='List view'
          >
            <BsList />
          </button>
        </div>
        <p className='count'>
          <strong>{players.length}</strong> players found
        </p>
      </div>
      <form className='sort-form'>
        <label htmlFor='sort'>Sort by</label>
        <select
          name='sort'
          id='sort'
          value={sort}
          onChange={updateSort}
        >
          <option value='marketValue-lowest'>Value (lowest)</option>
          <option value='marketValue-highest'>Value (highest)</option>
          <option value='name-a'>Name (A–Z)</option>
          <option value='name-z'>Name (Z–A)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem 1.25rem;
  background: var(--clr-white);
  border: 1px solid var(--clr-grey-8);
  border-radius: var(--radius-lg);
  box-shadow: var(--light-shadow);

  .toolbar-left {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }

  .count {
    margin: 0;
    font-size: 0.95rem;
    color: var(--clr-grey-4);

    strong {
      color: var(--clr-grey-1);
    }
  }

  .btn-container {
    display: flex;
    gap: 0.35rem;
    padding: 0.2rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      background: transparent;
      border: none;
      border-radius: calc(var(--radius) - 2px);
      color: var(--clr-grey-5);
      cursor: pointer;
      transition: var(--transition);

      svg {
        font-size: 1.1rem;
      }

      &.active {
        background: var(--clr-white);
        color: var(--clr-grey-1);
        box-shadow: var(--light-shadow);
      }
    }
  }

  .sort-form {
    display: flex;
    align-items: center;
    gap: 0.65rem;

    label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--clr-grey-5);
      white-space: nowrap;
    }

    select {
      padding: 0.5rem 2rem 0.5rem 0.75rem;
      font-family: var(--font-sans);
      font-size: 0.9rem;
      color: var(--clr-grey-2);
      background: var(--clr-grey-10);
      border: 1px solid var(--clr-grey-8);
      border-radius: var(--radius);
      cursor: pointer;
    }
  }
`;

export default Sort;
