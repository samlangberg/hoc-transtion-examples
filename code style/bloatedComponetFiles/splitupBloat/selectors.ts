import type { Item, ListTypes } from "./types";

import type { OutputSelector } from "reselect";
import { createSelector } from "reselect";

type State = {
  items: Array<Item>;
  type: ListTypes;
};

export const activeItemsSelector: OutputSelector<
  State,
  any,
  Array<Item>
> = createSelector(
  ({ items }) => items,
  ({ activeIds }) => activeIds,
  (items, activeIds) => {
    return items.filter((item) => activeIds.includes(item.id));
  }
);
