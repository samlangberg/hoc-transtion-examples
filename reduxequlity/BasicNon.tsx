import React from "react";
const ExampleReduxHooks = (): JSX.Element => {
  const { filterTerm } = useSelector(
    ({
      viewConfiguration: {
        filter: { term },
      },
    }) => ({
      filterTerm: term,
    })
  );

  return <div>Filter By {filterTerm}</div>;
};

export default ExampleReduxHooks;
