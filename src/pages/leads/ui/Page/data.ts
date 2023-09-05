export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export interface RoleOptionItem {
  value: string;
  label: string;
}

export interface RoleOption {
  id: number;
  avatarUrl: string;
  textTitle: string;
  textBody: string;
  rolesType: RoleOptionItem;
}

export const colourOptions: readonly ColourOption[] = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

export const userRoles: ColourOption[] = [
  { value: 'client', label: 'Client', color: '#00B8D9', isFixed: true },
  { value: 'agent', label: 'Agent', color: '#0052CC', isDisabled: false },
  { value: 'manager', label: 'Manager', color: '#5243AA' },
  { value: 'head_of_off_plan', label: 'Head of Off-Plan', color: '#5243AA' },
  { value: 'referral', label: 'Referral', color: '#5243AA' },
];

export const unitStatuses: ColourOption[] = [
  { value: 'unreleased', label: 'Unreleased', color: '#00B8D9', isFixed: true },
  { value: 'available', label: 'Available', color: '#00B8D9', isFixed: true },
  { value: 'blocked', label: 'Blocked', color: '#0052CC', isDisabled: false },
  { value: 'booked', label: 'Booked', color: '#5243AA' },
  { value: 'sold', label: 'Sold', color: '#5243AA' },
];

export const participants: RoleOption[] = [
  {
    id: 1,
    avatarUrl: '',
    textTitle: 'Edward King',
    textBody: 'edward@gmail.com',
    rolesType: {
      label: 'Client',
      value: 'client',
    },
  },
  {
    id: 2,
    avatarUrl: '',
    textTitle: 'Steve King 2',
    textBody: 'edward@gmail.com 2',
    rolesType: {
      label: 'Agent',
      value: 'agent',
    },
  },
  {
    id: 3,
    avatarUrl: '',
    textTitle: 'May King 3',
    textBody: 'edward@gmail.com 3',
    rolesType: {
      label: 'Head of Off-Plan',
      value: 'head_of_off_plan',
    },
  },
  {
    id: 4,
    avatarUrl: '',
    textTitle: 'Kobe King 4',
    textBody: 'edward@gmail.com 4',
    rolesType: {
      label: 'Agent',
      value: 'agent',
    },
  },
  {
    id: 5,
    avatarUrl: '',
    textTitle: 'Edward King 5',
    textBody: 'edward@gmail.com 5',
    rolesType: {
      label: 'Manager',
      value: 'manager',
    },
  },
];
