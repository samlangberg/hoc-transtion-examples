import List from "./List";
import Loader from "./List";
import React from "react";
import withExampleQuery from "./withExampleQuery";

const UseQueryHookConsumer = (): JSX.Element | null => {
  const { queryData, isLoading } = useExampleQueryHook();
  if (!queryData && !isLoading) {
    return null;
  }
  if (isLoading) {
    return <Loader />;
  }

  return <List data={queryData} isLoading={isLoading} />;
};

export default UseQueryHookConsumer;
