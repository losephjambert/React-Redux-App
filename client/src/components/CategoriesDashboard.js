import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../actions";

const CategoriesDashboard = props => {
  const { fetchCategories } = props;
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <>
      <h1>Public Api Explorer</h1>
      <section>
        <h2>Available Categories</h2>
        <ul>
          <li>cat 1</li>
          <li>cat 2</li>
          <li>cat 3</li>
          <li>cat 4</li>
        </ul>
      </section>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { fetchCategories }
)(CategoriesDashboard);
