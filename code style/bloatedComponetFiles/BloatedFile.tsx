import ChildrenStats from "./ChildrenStats";
import type { Item } from "./types";
import ItemStats from "./ItemStats";
import ListItem from "./ListItem";
import type { OutputSelector } from "reselect";
import React from "react";
import { createSelector } from "reselect";
import pluralize from "pluralize";

type Item = {
  color: string;
  id: string;
  name: string;
  children: Array<{ name: string; id: string }>;
};

type ListTypes = "items" | "children";

type Props = {
  items: Array<Item>;
  type: ListTypes;
  onClick: (id: string) => void;
};

type CountItemProps = {
  item: Item;
  type: ListTypes;
  onClick: (id: string) => void;
};

const pluralizeCount = ({
  count,
  type,
}: {
  count?: number;
  type: ListTypes;
}): string => {
  const counted = pluralize(type, count);
  if (!count) {
    return `No ${counted} Found`;
  }
  return counted;
};

const generateStats = ({
  count,
  type,
}: {
  count?: number;
  type: ListTypes;
}): string => {
  if (!count) {
    return null;
  }
  if (type === "items") {
    return <ItemStats />;
  }
  return <ChildrenStats />;
};

const CountItem = ({ onClick, item, type }: CountItemProps): JSX.Element => {
  const count = item.children?.length || 0;
  return (
    <ListItem
      stats={generateStats({ type, count })}
      onClick={() => onClick(item.id)}
    >
      {pluralizeCount({ type, count })}
    </ListItem>
  );
};

const activeItemsSelector: OutputSelector<
  Props,
  any,
  Array<Item>
> = createSelector(
  ({ items }) => items,
  ({ activeIds }) => activeIds,
  (items, activeIds) => {
    return items.filter((item) => activeIds.includes(item.id));
  }
);

const ExampleBloatedComponentFile = (props: Props): JSX.Element => {
  const activeItems = activeItemsSelector(props);
  const { onClick, type } = props;

  const ChildrenHeading = () => <h2>Children List</h2>;
  const ItemHeading = () => <h2>Item List</h2>;

  return (
    <>
      {type === "children" ? ChildrenHeading() : ItemHeading()}
      <List>
        {activeItems.map((item) => {
          const { id } = item;
          return <CountItem key={id} onClick={onClick} type={type} />;
        })}
      </List>
    </>
  );
};

export default ExampleBloatedComponentFile;
