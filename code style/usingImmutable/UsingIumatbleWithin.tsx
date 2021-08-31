import type { List, RecordOf } from "immutable";

import React from "react";
import { useSelector } from "redux";

type State = {
  floor: RecordOf<{
    name: string;
    id: string;
    active: boolean;
    filters: List<string>;
  }>;
};

const ExampleAccessingImmutableViaMethods = (): JSX.Element => {
  const floor = useSelector((state: State) => state.floor);

  return (
    <div>
      {floor.get("name")} has {floor.filters.size} Active Filters
    </div>
  );
};

export default ExampleAccessingImmutableViaMethods;
