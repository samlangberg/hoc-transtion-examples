import List from "./List";
import React from "react";
import withExampleQuery from "./withExampleQuery";

type Props = {
  queryData: DataInterface;
  isLoading: any;
};

const UseQueryHookConsumer = (): JSX.Element => {
  const { queryData, isLoading } = useExampleQueryHook();
  return <List data={queryData} isLoading={isLoading} />;
};

export default UseQueryHookConsumer;
