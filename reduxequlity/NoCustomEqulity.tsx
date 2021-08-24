import type { List } from "immutable";
import React from "react";
import { useSelector } from "redux";

type State = {
  list: List<string>;
};

const ExampleFailedEqualityReduxHooks = (): JSX.Element => {
  const items = useSelector((state: State) => state.list);

  return <div>{items.size} Total Items</div>;
};

export default ExampleFailedEqualityReduxHooks;
