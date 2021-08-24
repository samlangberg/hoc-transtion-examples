import Button from "@material-ui/core/Button";
import React from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { exampleAction } from "manager/actions";
import withHandlers from "recompose/withHandlers";

type Props = {
  onNotify: (content: string) => void;
};

const ExampleWithHandlers = ({ onNotify }: Props) => {
  return <Button onClick={onNotify}>Fire Event</Button>;
};

const mapStateToProps = ({
  viewConfiguration: {
    filter: { term },
  },
}) => ({
  filterTerm: term,
});

const mapDispatchToProps = (dispatch) => ({
  onDispatch: (term) => dispatch(exampleAction(term)),
});

export default compose(
  connect<any, any, _, _, _, _>(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onNotify: ({ filterTerm, onDispatch }) => onDispatch(filterTerm),
  })
)(ExampleWithHandlers);
