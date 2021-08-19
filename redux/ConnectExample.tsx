import React from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { exampleAction } from "manager/actions";

type Props = {
  filterTerm: string;
  onClick: () => void;
};

const ExampleConnect = ({ filterTerm, onClick }: Props) => {
  return (
    <Button onClick={() => onClick(filterTerm)}>Filter By {filterTerm}</Button>
  );
};

const mapStateToProps = ({
  viewConfiguration: {
    filter: { term },
  },
}) => ({
  filterTerm: term,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (item) => dispatch(exampleAction(item)),
});

export default compose(
  connect<any, any, _, _, _, _>(mapStateToProps, mapDispatchToProps)
)(ExampleConnect);
