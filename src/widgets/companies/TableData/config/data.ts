export const data = [
  {
    id: 2,
    title: 'CSI BLACK INVESTMENT L.L.C',
    signatoryName: 'CSI BLACK INVESTMENT L.L.C',
    tradeLicense: '964829',
    registrationAt: '2021-06-29T19:00:00.000Z',
    entity: {
      id: 669,
      type: {
        id: 5,
        title: 'Company',
      },
      _count: {
        participants: 10,
      },
    },
  },
  {
    id: 1,
    title: 'Tuli Properties Middle East Holding Limited',
    signatoryName: 'Tuli Properties Middle East Holding Limited',
    tradeLicense: 'CL5247',
    registrationAt: '2021-11-23T19:00:00.000Z',
    entity: {
      id: 667,
      type: {
        id: 5,
        title: 'Company',
      },
      _count: {
        participants: 3,
      },
    },
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
