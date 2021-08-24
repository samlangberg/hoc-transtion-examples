import type { List } from "immutable";
import type { OutputSelector } from "reselect";
import React from "react";
import { createSelector } from "reselect";
import { useSelector } from "redux";

type Item = {
  labels: List<string>;
  id: string;
  name: string;
};

type State = {
  filters: List<string>;
  items: Array<Item>;
};

const filteredItemsSelector = createSelector(
  ({ labels }) => labels.toJS(),
  ({ items }) => items,
  (labelsArray, items) => {
    return items.filter((item) => {
      const itemLabels = item.labels.toJS();
      var commonElements = itemLabels.filter(
        (el) => labelsArray.indexOf(el) > -1
      );
      return commonElements.length !== 0;
    });
  }
) as OutputSelector<State, unknown, Array<Item>>;

const ExampleSingleUseSelector = (): JSX.Element => {
  const items = useSelector(filteredItemsSelector);
  return <div>{items.length} Total Items</div>;
};

export default ExampleSingleUseSelector;
