import ListItem from "./ListItem";
import type { ListTypes } from "./types";
import pluralize from "pluralize";

const pluralizeCount = ({
  count,
  type,
}: {
  count?: number;
  type: ListTypes;
}): string => {
  const counted = pluralize(type, count);
  if (!count) {
    return `No ${counted} Found`;
  }
  return counted;
};

type ItemProps = {
  count: number;
  value: string;
  type: ListTypes;
  stats: JSX.Element;
  onClick: (id: string) => void;
};

const CountItem = ({
  onClick,
  value,
  stats,
  count,
  type,
}: ItemProps): JSX.Element => {
  return (
    <ListItem stats={stats} onClick={() => onClick(value)}>
      {pluralizeCount({ type, count })}
    </ListItem>
  );
};
export default CountItem;
