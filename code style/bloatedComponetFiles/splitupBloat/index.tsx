import { Item, ListTypes } from "./types";

import ChildrenStats from "./ChildrenStats";
import ItemStats from "./ItemStats";
import List from "./List";
import ListItem from "./ListItem";
import { activeItemsSelector } from "./selectors";

type Props = {
  items: Array<Item>;
  type: ListTypes;
  onClick: (id: string) => void;
};

const generateStats = ({
  count,
  type,
}: {
  count?: number;
  type: ListTypes;
}): string => {
  if (!count) {
    return null;
  }
  if (type === "items") {
    return <ItemStats />;
  }
  return <ChildrenStats />;
};

const ExampleLeanComponentFile = (props: Props): JSX.Element => {
  const activeItems = activeItemsSelector(props);
  const { onClick, type } = props;
  return (
    <>
      {type === "children" ? <h2>Children List</h2> : <h2>Item List</h2>}
      <List>
        {activeItems.map(({ id, type, children }) => {
          return (
            <ListItem
              key={id}
              count={children.length}
              value={id}
              onClick={onClick}
              stats={generateStats({ count: children.length, type })}
            />
          );
        })}
      </List>
    </>
  );
};

export default ExampleLeanComponentFile;
