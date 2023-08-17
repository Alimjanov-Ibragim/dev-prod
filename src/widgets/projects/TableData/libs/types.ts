type TListType = {
  id: number;
  title: string;
};

export type TListTableRow = {
  id: number;
  title: string;
  community: string;
  completionAt: string;
  developer: TListType;
  entity: {
    id: number;
    type: TListType;
  };
  _count: {
    total: number;
    blocked: number;
    available: number;
    booked: number;
    sold: number;
  };

  /** Worked with style type "highlighted", it's for set a bg color. */
  className?: string;
  checked: boolean;
};
