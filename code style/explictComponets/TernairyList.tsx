import List from "./List";
import ListItem from "./ListItem";
import OutlinedCircle from "./OutlinedCircle";
import React from "react";
import SolidCircle from "./SolidCircle";

type Item = {
  color: string;
  id: string;
  name: string;
  children: Array<{ name: string }>;
};

type Props = {
  items: Array<Item>;
  onClick: (id: string) => void;
};

const ActiveListItem = ({ onClick, value, icon }) => {
  return (
    <ListItem onClick={onClick} icon={icon}>
      {value}
    </ListItem>
  );
};

const InactiveListItem = ({ value }) => {
  return <ListItem disabled>{value}</ListItem>;
};

const ExampleTernaryAssignment = ({ items, onClick }: Props) => (
  <List>
    {items.map(({ id, children, color, name }) => {
      const ListItem = children.length > 0 ? ActiveListItem : InactiveListItem;
      const handleClick = children.length > 0 ? onClick : undefined;
      const Indicator = children.length > 0 ? OutlinedCircle : SolidCircle;

      return (
        <ListItem
          key={id}
          icon={<Indicator color={color} />}
          onClick={handleClick}
          value={id}
        >
          {name}
        </ListItem>
      );
    })}
  </List>
);

export default ExampleTernaryAssignment;
