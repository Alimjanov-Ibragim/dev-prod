export const data = [
  {
    id: 3100,
    title: 'Unlock unit',
    args: null,
    type: {
      id: 1,
      title: 'System',
    },
    deal: null,
    lead: {
      id: 1149,
      title: 'Biltmore Sufouh, 1811',
    },
    accessRoles: [
      {
        id: 1,
        title: 'Director',
      },
      {
        id: 2,
        title: 'Superadmin',
      },
    ],
    deadline: '2023-07-05T14:00:00.000Z',
    status: {
      id: 1,
      title: 'Assigned',
    },
    systemJobType: 'UnblockUnit',
    disabled: false,
    editable: true,
    createdAt: '2023-06-05T20:06:31.354Z',
    file: null,
  },
  {
    id: 2988,
    title: 'Unlock unit',
    args: null,
    type: {
      id: 1,
      title: 'System',
    },
    deal: null,
    lead: {
      id: 1111,
      title: 'Biltmore Sufouh, 1004',
    },
    accessRoles: [
      {
        id: 1,
        title: 'Director',
      },
      {
        id: 2,
        title: 'Superadmin',
      },
    ],
    deadline: '2023-07-04T14:00:00.000Z',
    status: {
      id: 1,
      title: 'Assigned',
    },
    systemJobType: 'UnblockUnit',
    disabled: false,
    editable: true,
    createdAt: '2023-06-05T02:08:52.239Z',
    file: null,
  },
  {
    id: 1761,
    title: 'Unlock unit',
    args: null,
    type: {
      id: 1,
      title: 'System',
    },
    deal: null,
    lead: {
      id: 662,
      title: 'Terraces Marasi Drive, 601',
    },
    accessRoles: [
      {
        id: 1,
        title: 'Director',
      },
      {
        id: 2,
        title: 'Superadmin',
      },
    ],
    deadline: '2023-05-24T14:00:00.000Z',
    status: {
      id: 1,
      title: 'Assigned',
    },
    systemJobType: 'UnblockUnit',
    disabled: false,
    editable: true,
    createdAt: '2023-05-18T00:16:45.274Z',
    file: null,
  },
  {
    id: 1360,
    title: 'Receive Proof Of Funds For DLD Fee',
    args: null,
    type: {
      id: 1,
      title: 'System',
    },
    deal: {
      id: 92,
      title: 'Terraces Marasi Drive, 1707',
    },
    lead: null,
    accessRoles: [
      {
        id: 1,
        title: 'Director',
      },
      {
        id: 2,
        title: 'Superadmin',
      },
    ],
    deadline: null,
    status: {
      id: 1,
      title: 'Assigned',
    },
    systemJobType: 'ReceiveProofOfFundsForDLDFee',
    disabled: false,
    editable: true,
    createdAt: '2023-04-11T07:16:02.230Z',
    file: null,
  },
  {
    id: 853,
    title: 'Receive Proof Of Funds For DLD Fee',
    args: null,
    type: {
      id: 1,
      title: 'System',
    },
    deal: {
      id: 53,
      title: 'Terraces Marasi Drive, 807',
    },
    lead: null,
    accessRoles: [
      {
        id: 1,
        title: 'Director',
      },
      {
        id: 2,
        title: 'Superadmin',
      },
    ],
    deadline: null,
    status: {
      id: 1,
      title: 'Assigned',
    },
    systemJobType: 'ReceiveProofOfFundsForDLDFee',
    disabled: false,
    editable: true,
    createdAt: '2023-04-11T07:15:53.451Z',
    file: null,
  },
  {
    id: 437,
    title: 'Receive Proof Of Funds For DLD Fee',
    args: null,
    type: {
      id: 1,
      title: 'System',
    },
    deal: {
      id: 21,
      title: 'Terraces Marasi Drive, 203',
    },
    lead: null,
    accessRoles: [
      {
        id: 1,
        title: 'Director',
      },
      {
        id: 2,
        title: 'Superadmin',
      },
    ],
    deadline: null,
    status: {
      id: 1,
      title: 'Assigned',
    },
    systemJobType: 'ReceiveProofOfFundsForDLDFee',
    disabled: false,
    editable: true,
    createdAt: '2023-04-11T07:15:46.363Z',
    file: null,
  },
];

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
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
