export const data = [
  {
    id: 4,
    title: 'GJ Real Estate',
    address: null,
    website: null,
    paymentTypes: [],
  },
  {
    id: 3,
    title: 'Key Mavens for Real Estate Development',
    address: null,
    website: null,
    paymentTypes: [],
  },
  {
    id: 2,
    title: 'Structure Real Estate Development',
    address: null,
    website: null,
    paymentTypes: [],
  },
  {
    id: 1,
    title: 'Continental Investments (L.L.C)',
    address: null,
    website: null,
    paymentTypes: [],
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
