import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchCategories } from '../actions';

const CategoriesDashboard = ({ categories }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <section className='categories__section'>
        <h2 className='categories__header'>Available Categories To Explore</h2>
        <ul className='categories__list'>
          {categories.categoriesList.map((category, i) => (
            <li className='categories__list__item' key={i}>
              <span>{category}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(
  mapStateToProps,
  // { fetchCategories }
)(CategoriesDashboard);
