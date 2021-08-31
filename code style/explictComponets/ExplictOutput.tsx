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

const ExampleExplicitAssignment = ({ items, onClick }: Props) => (
  <List>
    {items.map(({ id, children, color, name }) => {
      const isActive = !!children.length;

      if (isActive) {
        return (
          <ListItem
            onClick={() => onClick(id)}
            icon={<OutlinedCircle color={color} />}
          >
            {name}
          </ListItem>
        );
      }
      return (
        <ListItem icon={<SolidCircle color={color} />} disabled>
          {name}
        </ListItem>
      );
    })}
  </List>
);

export default ExampleExplicitAssignment;
