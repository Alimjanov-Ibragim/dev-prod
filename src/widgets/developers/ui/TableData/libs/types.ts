export type TListTableRow = {
  id: number;
  title: string;
  address: any;
  website: any;
  paymentTypes: any[];

  /** Worked with style type "highlighted", it's for set a bg color. */
  className?: string;
  checked: boolean;
};
