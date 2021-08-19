import GraphQLQuery from "GraphQLQuery.graphql";
import type { ViewConfigurationType } from "manager/components/ViewConfiguration/types";
import { useQuery } from "@apollo/client";

type Data = {
  queryData?: DataInterface;
  loading: boolean;
};

type Return = {
  queryData?: DataInterface;
  loading: boolean;
};

type Variables = {
  id: string;
};

const useExampleQueryHook = (input: string): Return => {
  const { loading, data } = useQuery<Data, Variables>(GraphQLQuery, {
    variables: {
      id: input,
    },
    skip: !input,
  });

  if (loading || !data) {
    return {
      queryData: undefined,
      loading,
    };
  }

  const { queryData } = data;

  return {
    queryData,
    loading,
  };
};

export default useExampleQueryHook;
