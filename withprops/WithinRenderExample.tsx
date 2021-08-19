import React, { useMemo } from "react";

import List from "./List";

type Props = {
  selectedIds: Array<string>;
  items: Array<{ id: string; name: string }>;
};

const WithinRenderExample = ({ items, selectedIds }: Props) => {
  const filteredItems = useMemo(
    () => items.filter(({ id }) => selectedIds.includes(id)),
    [items, selectedIds]
  );
  return <List data={items} isFiltered={!!filteredItems.length} />;
};

export default WithinRenderExample;
