export type Item = {
  color: string;
  id: string;
  name: string;
  children: Array<{ name: string; id: string }>;
};

export type ListTypes = "items" | "children";
