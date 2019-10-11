import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';

const CategoriesDashboard = ({ fetchCategories, categories }) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <>
      <section>
        <h2>Available Categories</h2>
        <ul>
          {categories.categoriesList.map((category, i) => (
            <li key={i}>{category}</li>
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
  { fetchCategories }
)(CategoriesDashboard);
