import List from "./List";
import React from "react";
import compose from "recompose/compose";
import withExampleQuery from "./withExampleQuery";
import withViewConfiguration from "manager/components/WithViewConfiguration";

type Props = {
  queryData: DataInterface;
  isLoading: any;
};

const GraphHOCConsumer = ({ queryData, isLoading }: Props) => {
  return <List data={queryData} isLoading={isLoading} />;
};

export default compose(withExampleQuery())(GraphHOCConsumer);
