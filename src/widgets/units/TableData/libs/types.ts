type TListType = {
  id: number;
  title: string;
};

export type TListTableRow = {
  id: number;
  title: string;
  unitNumber: number;
  project: TListType;
  type: {
    title: string;
  };
  price: number;
  floor: number;
  bedrooms: number;
  totalArea: number;
  view: string;
  status: TListType;
  createdAt: string;

  /** Worked with style type "highlighted", it's for set a bg color. */
  className?: string;
  checked: boolean;
};
