import React from "react";

type HeadingLevelType = "h1" | "h2" | "h3" | "h4";

// eslint-disable-next-line no-shadow
export enum AggregatorTypes {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
}

type Props = {
  id: string;
  classes?: Record<string, any>;
  level: AggregatorTypes;
  content: JSX.Element;
};

const HeadingComponent = ({ level, content, id, classes }: Props) => {
  if (level === AggregatorTypes.H1) {
    return (
      <h1 id={id} className={classes}>
        {content}
      </h1>
    );
  }
  if (level === AggregatorTypes.H2) {
    return <h2 id={id}>{content}</h2>;
  }
  if (level === AggregatorTypes.H3) {
    return <h3 id={id}>{content}</h3>;
  }

  return <h4 id={id}>{content}</h4>;
};

const WithExplicitReturnExample = (props: Props) => {
  return <HeadingComponent {...props} />;
};

export default WithExplicitReturnExample;
