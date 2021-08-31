import React from "react";
import { useSelector } from "redux";

type State = {
  filters: Array<{ id: string; active: boolean }>;
};

const checkReduxEquality = (
  { filters: prevList }: State,
  { filters: currentList }: State
) => {
  const current = currentList.map(({ id }) => id);
  const prev = prevList.map(({ id }) => id);
  return current.every((id) => prev.includes(id));
};

const ExampleFailedEqualityReduxHooks = (): JSX.Element => {
  const filters = useSelector(
    (state: State) => state.filters.filter(({ active }) => active),
    checkReduxEquality
  );

  return <div>{filters.length} Active Filters</div>;
};

export default ExampleFailedEqualityReduxHooks;
