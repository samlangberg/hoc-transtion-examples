import type { HOC } from "recompose";
import compose from "recompose/compose";
import withProps from "recompose/withProps";

type Item = {
  id: string;
  name: string;
  children: Array<{ id: string; count: number }>;
};

const withPopulatedChildren = (items: Array<Item>) => {
  return items.filter(
    ({ children }) =>
      children.map(({ count }) => count).filter((count) => count > 0).length > 0
  );
};

const withSelectedChildren = (
  items: Array<Item>,
  selectedIds: Array<string>
) => {
  return items.filter(({ children }) =>
    children.find(({ id }) => selectedIds.includes(id))
  );
};

const withPopulatedItems = compose(
  withProps<any, any>(({ items }) => ({
    items: withPopulatedChildren(items),
  })),
  withProps<any, any>(({ items, selectedIds }) => ({
    selectedItems: withSelectedChildren(items, selectedIds),
  }))
) as HOC<any, any>;

export default withPopulatedItems;
