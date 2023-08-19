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
  licenseNumber: string;
  bankAccount: string;
  orn: string;
  licenseExpireAt: string;
  registrationDate: string;
  address: string;
  type: TListType;
  country: any;
  city: any;
  contactPerson: any;
  entity: {
    id: number;
    type: TListType;
    contacts: TListContacts[];
  };

  /** Worked with style type "highlighted", it's for set a bg color. */
  className?: string;
  checked: boolean;
};
