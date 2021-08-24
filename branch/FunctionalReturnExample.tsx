import List from "./List";
import Loader from "./Loader";
import React from "react";
import useExampleQueryHook from "./useExampleQueryHook";

const FunctionalReturnExample = (): JSX.Element | null => {
  const { queryData, isLoading } = useExampleQueryHook();
  if (!queryData && !isLoading) {
    return null;
  }
  if (isLoading) {
    return <Loader />;
  }

  return <List data={queryData} />;
};

export default FunctionalReturnExample;
