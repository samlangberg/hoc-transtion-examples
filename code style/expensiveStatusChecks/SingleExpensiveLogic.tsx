import List from "./List";
import ListItem from "./ListItem";
import type { OutputSelector } from "reselect";
import React from "react";
import type {ReactNode} from "react";
import { createSelector } from "reselect";
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

type ItemProps = {
  items: Array<Item>;
  children?: ReactNode | undefined
  onClick: (id: string) => void;
};

type Output = Array<string>;

const populatedItemsSelector: OutputSelector<State, any, Output> =
  createSelector(
    ({ items }) => items,
    ({ activeChildIds }) => activeChildIds,
    (items, activeChildIds) => {
      const activeIds = items.reduce<Array<string>>((accumulator, item) => {
        const hasActiveChild = item.children.find((child) =>
          activeChildIds.includes(child.id)
        );

        if (hasActiveChild) {
          accumulator.push(item.id);
        }

        return accumulator;
      }, []);

      return activeIds;
    }
  );

const Item = ({ onClick, id, children, isActive }: ) => {
  if (isActive) {
    return <ListItem onClick={() => onClick(id)}>{children}</ListItem>;
  }
  return <ListItem disabled>{children}</ListItem>;
};

const ExampleExpensiveIteration = ({ items, onClick }: Props): JSX.Element => {
  const activeIds = useSelector(populatedItemsSelector);
  return (
    <List>
      {items.map(({ id, name }) => {
        return (
          <Item
            key={id}
            onClick={onClick}
            value={id}
            isActive={activeIds.includes(id)}
          >
            {name}
          </Item>
        );
      })}
    </List>
  );
};

export default ExampleExpensiveIteration;
