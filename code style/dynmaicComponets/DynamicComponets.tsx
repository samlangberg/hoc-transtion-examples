import React from "react";
import compose from "recompose/compose";
import withProps from "recompose/withProps";

const componentLookUp = {
  h1: ({ id, content, classes }) => (
    <h1 id={id} className={classes}>
      {content}
    </h1>
  ),
  h2: ({ id, content }) => <h2 id={id}>{content}</h2>,
  h3: ({ id, content }) => <h3 id={id}>{content}</h3>,
  h4: ({ id, content }) => <h4 id={id}>{content}</h4>,
};

type Props = {
  id: string;
  classes?: Record<string, any>;
  level: keyof typeof componentLookUp;
  content: JSX.Element;
  heading: JSX.Element;
};

const DynamicComponentExample = ({ heading, content, id, classes }: Props) => {
  return <heading content={content} id={id} classes={classes} />;
};

export default compose(
  withProps<any, any>(({ level }) => ({
    heading: componentLookUp[level],
  }))
)(DynamicComponentExample);
