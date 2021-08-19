import List from "./List";
import Loader from "./Loader";
import React from "react";
import branch from "recompose/branch";
import compose from "recompose/compose";
import renderComponent from "recompose/renderComponent";
import renderNothing from "recompose/renderNothing";

type Props = {
  queryData: DataInterface;
  isLoading: any;
};

const BranchExample = ({ queryData, isLoading }: Props) => {
  return <List data={queryData} isLoading={isLoading} />;
};

export default compose(
  branch<any, any>(
    ({ isLoading, queryData }) => !queryData && !isLoading,
    renderNothing
  ),
  branch<any, any>(({ isLoading }) => isLoading, renderComponent(Loader))
)(BranchExample);
