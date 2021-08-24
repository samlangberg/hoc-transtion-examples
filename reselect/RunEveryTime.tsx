import List from "./List";
import React from "react";
import compose from "recompose/compose";
import withPopulatedItems from "withPopulatedItems";

type Item = {
  id: string;
  name: string;
  children: Array<{ id: string; count: number }>;
};

type Props = {
  selectedIds: Array<string>;
  items: Array<Item>;
  selectedItems: Array<Item>;
};

const WithComplexRenderExample = ({ items, selectedItems }: Props) => {
  return (
    <>
      <List data={items} title="Populated Items" />
      <List data={selectedItems} title="Selected" />
    </>
  );
};

export default compose(withPopulatedItems())(WithComplexRenderExample);
