import React from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";

type State = {
  filters: Array<{ id: string; active: boolean }>;
};

type Props = {
  filters: Array<{ id: string; active: boolean }>;
};

const ExampleCustomEqualityReduxHOC = ({ filters }: Props): JSX.Element => {
  return <div>{filters.length} Active Filters</div>;
};

const mapStateToProps = ({ filters }) => filters.filter(({ active }) => active);

const areStatesEqual = (
  { filters: prevList }: State,
  { filters: currentList }: State
) => {
  const current = currentList.map(({ id }) => id);
  const prev = prevList.map(({ id }) => id);
  return current.every((id) => prev.includes(id));
};

export default compose(
  connect<any, any, _, _, _, _>(mapStateToProps, undefined, {
    areStatesEqual,
  })
)(ExampleCustomEqualityReduxHOC);
