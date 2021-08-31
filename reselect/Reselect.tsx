import List from "./List";
import React from "react";
import itemsSelector from "./itemsSelector";

type Props = {
  items: Array<Item>;
  selectedIds: Array<string>;
};

const WithReselectExample = (props: Props) => {
  const { selectedItems, populatedItems } = itemsSelector(props);
  return (
    <>
      <List data={populatedItems} title="Populated Items" />
      <List data={selectedItems} title="Selected" />
    </>
  );
};

export default WithReselectExample;
