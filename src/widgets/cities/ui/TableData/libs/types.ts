type TListType = {
  id: number;
  title: string;
};

export type TListTableRow = {
  id: number;
  title: string;
  country: TListType;

  /** Worked with style type "highlighted", it's for set a bg color. */
  className?: string;
  checked: boolean;
};
