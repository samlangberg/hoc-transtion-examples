import React from "react";
import { useSelector } from "redux";

type State = {
  filters: Array<{ id: string; active: boolean }>;
};

const ExampleFailedEqualityReduxHooks = (): JSX.Element => {
  const filters = useSelector((state: State) =>
    state.filters.filter(({ active }) => active)
  );

  return (
    <>
      <div>{filters.length} Active Filters</div>
    </>
  );
};

export default ExampleFailedEqualityReduxHooks;
