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

const ExampleAccessingImmutableViaDestructor = (): JSX.Element => {
  const { name, filters } = useSelector((state: State) => state.floor);

  return (
    <div>
      {name} has {filters.length} Active Filters
    </div>
  );
};

export default ExampleAccessingImmutableViaDestructor;
