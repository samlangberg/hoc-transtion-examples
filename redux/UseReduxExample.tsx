import { useDispatch, useSelector } from "redux";

import React from "react";

const ExampleConnectReduxHooks = (): JSX.Element => {
  const { filterTerm } = useSelector(
    ({
      viewConfiguration: {
        filter: { term },
      },
    }) => ({
      filterTerm: term,
    })
  );
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(exampleAction(filterTerm))}>
      Filter By {filterTerm}
    </Button>
  );
};

export default ExampleConnect;
