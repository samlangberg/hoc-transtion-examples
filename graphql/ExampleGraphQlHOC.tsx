import { graphql } from '@apollo/client/react/hoc'
import compose from 'recompose/compose'
import type { HOC } from 'recompose'
import GraphQLQuery from 'GraphQLQuery.graphql'


const withExampleQuery = compose(
  graphql<_, any, _, _>(GraphQLQuery, {
    options: ({ input }) => ({
      variables: {
        id:input
      },
    }),
    props: ({ loading, data: { queryData } = {} }) => ({
      queryData,
      loading
    }),
    skip: ({ input }) => !input
  }),
) as HOC<any, any>

export default withExampleQuery