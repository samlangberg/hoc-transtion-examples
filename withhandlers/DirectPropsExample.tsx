import { useDispatch, useSelector } from "redux";

import Button from "@material-ui/core/Button";
import React from "react";
import { exampleAction } from "manager/actions";

const ExampleReduxHooks = (): JSX.Element => {
  const { term } = useSelector((state) => state.viewConfiguration.filter);
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(exampleAction(term))}>Fire Event</Button>
  );
};

export default ExampleReduxHooks;
