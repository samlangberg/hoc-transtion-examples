import React, { useEffect } from "react";
import { useDispatch, useSelector } from "redux";

import List from "./List";
import { refreshList } from "manager/actions";
import withExampleQuery from "./withExampleQuery";

const UseEffectExample = (): JSX.Element => {
  const { queryData, isLoading } = useExampleQueryHook();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && !queryData) {
      dispatch(refreshList());
    }
  }, [queryData, isLoading]);

  return <List data={queryData} isLoading={isLoading} />;
};

export default UseEffectExample;
