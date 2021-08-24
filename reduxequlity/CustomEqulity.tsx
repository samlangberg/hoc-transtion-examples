import type { List } from "immutable";
import React from "react";
import { is } from "immutable";
import { useSelector } from "redux";

type State = {
  filters: List<string>;
};

const checkReduxEquality = (
  { filters: prevList }: State,
  { filters: currentList }: State
) => is(prevList, currentList);

const ExampleCustomEqualityReduxHooks = (): JSX.Element => {
  const items = useSelector((state) => state.list, checkReduxEquality);
  return <div>{items.size} Total Items</div>;
};

export default ExampleCustomEqualityReduxHooks;
