import type { List } from "immutable";
import React from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { is } from "immutable";

type State = {
  filters: List<string>;
};

type Props = {
  filters: List<string>;
};

const ExampleCustomEqualityReduxHOC = ({ filters }: Props): JSX.Element => {
  return <div>{filters.size} Total Filters</div>;
};

const mapStateToProps = ({ filters }) => filters;

const areStatesEqual = (previousState, state) =>
  is(previousState.list, state.list);

export default compose(
  connect<any, any, _, _, _, _>(mapStateToProps, undefined, {
    areStatesEqual,
  })
)(ExampleCustomEqualityReduxHOC);
