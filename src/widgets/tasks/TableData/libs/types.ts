type TListType = {
  id: number;
  title: string;
};

export type TListTableRow = {
  id: number;
  title: string;
  args: any;
  type: TListType;
  deal: any;
  lead: TListType;
  accessRoles: TListType[];
  deadline: string;
  status: TListType;
  systemJobType: string;
  disabled: boolean;
  editable: boolean;
  createdAt: string;
  file: any;

  /** Worked with style type "highlighted", it's for set a bg color. */
  className?: string;
  checked: boolean;
};
