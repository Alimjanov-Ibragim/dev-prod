type TListUser = {
  id: number;
  displayName: string;
  firstName: string;
  lastName: string;
};

type TListType = {
  id: number;
  title: string;
};

type TListContacts = {
  id: number;
  type: TListType;
  emailContact: {
    email: string;
  };
};

export type TListTableRow = {
  id: number;
  displayName: string;
  avatar: null;
  role: TListType;
  agency: TListType;
  entity: {
    id: number;
    type: TListType;
    contacts: TListContacts[];
    _count: {
      participants: number;
    };
  };
  createdAt: string;
  /** Worked with style type "highlighted", it's for set a bg color. */
  className?: string;
  checked: boolean;
};
