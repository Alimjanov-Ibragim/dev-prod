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
  title: string;
  displayName: string;
  firstName: string;
  lastName: string;
  user: TListUser;
  entity: {
    id: number;
    type: TListType;
    contacts: TListContacts[];
    _count: {
      participants: number;
    };
  };
  /** Worked with style type "highlighted", it's for set a bg color. */
  className?: string;
  checked: boolean;
};
