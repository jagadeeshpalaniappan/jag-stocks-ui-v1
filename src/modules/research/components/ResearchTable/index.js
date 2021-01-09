import { Paper } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import Table from './ResearchTable';

export const ResearchTable = props => {
  console.log('ResearchTableIdx');
  return (
    <div>
      <Table />
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ResearchTable);
