import React, { useState } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash-es';
import { setFilterAction } from '../../state/filter/actions';

export const Search = ({ search, searchStock }) => {
  const [searchState, setSearchState] = useState(search || '');
  const onSearch = e => {
    setSearchState(e.target.value);
    searchStock({ search: e.target.value });
  };

  return (
    <input
      type="text"
      className="form-control bg-transparent my-2"
      id="searchStock"
      placeholder="Search"
      value={searchState}
      onChange={onSearch}
    />
  );
};

const mapStateToProps = state => ({
  search: state.stockState.filter.search
});

const mapDispatchToProps = dispatch => {
  const searchStockDebounced = debounce((...args) => {
    dispatch(setFilterAction(...args));
  }, 500);
  return {
    searchStock: searchStockDebounced
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
