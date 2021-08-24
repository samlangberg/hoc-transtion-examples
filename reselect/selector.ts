import type { OutputSelector } from "reselect";
import { createSelector } from "reselect";

type Item = {
  id: string;
  name: string;
  children: Array<{ id: string; count: number }>;
};

type State = {
  items: Array<Item>;
  selectedIds: Array<string>;
};

type FirstOutput = {
  items: Array<Item>;
  selectedIds: Array<Item>;
};

const populatedItemsSelector: OutputSelector<State, any, FirstOutput> =
  createSelector(
    ({ items }) => items,
    (items) => {
      const populatedItems = items.filter(
        ({ children }) =>
          children.map(({ count }) => count).filter((count) => count > 0)
            .length !== 0
      );

      return populatedItems;
    }
  );

type SecondOutput = {
  items: Array<Item>;
  selectedItems: Array<Item>;
};

const withPopulatedItemsSelector: OutputSelector<State, any, SecondOutput> =
  createSelector(
    populatedItemsSelector,
    ({ selectedIds }) => selectedIds,
    (populatedItems, selectedIds) => ({
      selectedItems: populatedItems.filter(({ children }) =>
        children.find(({ id }) => selectedIds.includes(id))
      ),
      populatedItems,
    })
  );

export default withPopulatedItemsSelector;
