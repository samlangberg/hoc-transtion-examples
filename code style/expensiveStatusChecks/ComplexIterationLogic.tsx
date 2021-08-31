import List from "./List";
import ListItem from "./ListItem";
import React from "react";
import { useSelector } from "redux";

type Item = {
  color: string;
  id: string;
  name: string;
  children: Array<{ name: string; id: string }>;
};

type State = {
  items: Array<Item>;
  activeChildIds: Array<string>;
};

type Props = {
  items: Array<Item>;
  onClick: (id: string) => void;
};

const Item = ({ onClick, id, children }) => {
  const isActive = useSelector(
    ({ items, activeChildIds }: State) =>
      items.map(({ children }) =>
        children.map(({ id: childId }) => activeChildIds.includes(childId))
      ).length > 0
  );

  if (isActive) {
    return <ListItem onClick={() => onClick(id)}>{children}</ListItem>;
  }
  return <ListItem disabled>{children}</ListItem>;
};

const ExampleExpensiveIteration = ({ items, onClick }: Props) => (
  <List>
    {items.map(({ id, name }) => {
      return (
        <Item key={id} onClick={onClick} value={id}>
          {name}
        </Item>
      );
    })}
  </List>
);

export default ExampleExpensiveIteration;
