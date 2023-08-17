type TListType = {
  id: number;
  title: string;
};

export type TListTableRow = {
  id: number;
  title: string;
  signatoryName: string;
  tradeLicense: string;
  registrationAt: string;
  entity: {
    id: number;
    type: TListType;
    _count: {
      participants: number;
    };
  };

  /** Worked with style type "highlighted", it's for set a bg color. */
  className?: string;
  checked: boolean;
};
