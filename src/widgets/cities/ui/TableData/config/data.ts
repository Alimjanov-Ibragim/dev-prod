export const data = [
  {
    id: 1610,
    title: 'Sant Petersburg',
    country: {
      id: 149,
      title: 'Russia',
    },
  },
  {
    id: 1609,
    title: 'Swieqi',
    country: {
      id: 109,
      title: 'Malta',
    },
  },
  {
    id: 1608,
    title: 'Arad',
    country: {
      id: 146,
      title: 'Romania',
    },
  },
  {
    id: 1607,
    title: 'Glasgow',
    country: {
      id: 82,
      title: 'United Kingdom',
    },
  },
  {
    id: 1606,
    title: 'Virginia',
    country: {
      id: 3,
      title: 'United States',
    },
  },
  {
    id: 1605,
    title: 'Ohonua',
    country: {
      id: 234,
      title: 'Tonga',
    },
  },
  {
    id: 1604,
    title: 'Pangai',
    country: {
      id: 234,
      title: 'Tonga',
    },
  },
  {
    id: 1603,
    title: 'Neiafu',
    country: {
      id: 234,
      title: 'Tonga',
    },
  },
  {
    id: 1602,
    title: 'Lapaha',
    country: {
      id: 234,
      title: 'Tonga',
    },
  },
  {
    id: 1601,
    title: 'Nukualofa',
    country: {
      id: 234,
      title: 'Tonga',
    },
  },
  {
    id: 1600,
    title: 'Fale old settlement',
    country: {
      id: 233,
      title: 'Tokelau',
    },
  },
  {
    id: 1599,
    title: 'Nukunonu',
    country: {
      id: 233,
      title: 'Tokelau',
    },
  },
  {
    id: 1598,
    title: 'Atafu Village',
    country: {
      id: 233,
      title: 'Tokelau',
    },
  },
  {
    id: 1597,
    title: 'Leulumoega',
    country: {
      id: 232,
      title: 'Samoa',
    },
  },
  {
    id: 1596,
    title: 'Afega',
    country: {
      id: 232,
      title: 'Samoa',
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
