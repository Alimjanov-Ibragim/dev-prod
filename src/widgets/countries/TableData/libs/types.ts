export type TListTableRow = {
  id: number;
  title: string;
  nationality: string;

  /** Worked with style type "highlighted", it's for set a bg color. */
  className?: string;
  checked: boolean;
};
