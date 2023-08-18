export type TSelectItem = {
  label: string;
  value: string;
};

export type TParticipantItem = {
  id: number;
  avatarUrl: string;
  textTitle: string;
  textBody: string;
  rolesType: TSelectItem[];
};

export type IFormInput = {
  leadType: string;
  interactiveType: string;
  searchText: string;
  unit: TSelectItem[];
  leadIDBitrix: TSelectItem[];
  userRolesType: TSelectItem;
  participants?: TParticipantItem[];
};
