import List from "./List";
import React from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";
import lifecycle from "recompose/lifecycle";
import { refreshList } from "manager/actions";

type Props = {
  queryData: DataInterface;
  isLoading: any;
};

const WithLifeCycleExample = ({ queryData, isLoading }: Props) => {
  return <List data={queryData} isLoading={isLoading} />;
};

const mapStateToProps = (props) => props;

const mapDispatchToProps = (dispatch) => ({
  refreshList: (item) => dispatch(refreshList()),
});

export default compose(
  connect<any, any, _, _, _, _>(mapStateToProps, mapDispatchToProps),
  lifecycle({
    shouldComponentUpdate({ queryData, isLoading, refreshList }) {
      const shouldRefetch = !isLoading && !queryData;

      if (shouldRefetch) {
        refreshList();
      }

      return !shouldRefetch;
    },
  })
)(WithLifeCycleExample);
