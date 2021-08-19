import List from "./List";
import React from "react";
import compose from "recompose/compose";
import withProps from "recompose/withProps";

type Props = {
  selectedIds: Array<string>;
  items: Array<{ id: string; name: string }>;
  filtered: boolean;
};

const WithPropsExample = ({ items, filtered }: Props) => {
  return <List data={items} isFiltered={filtered} />;
};

export default compose(
  withProps<any, any>(({ selectedIds, items }) => ({
    items: items.filter(({ id }) => selectedIds.includes(id)),
    filtered: selectedIds.length === 0,
  }))
)(WithPropsExample);
