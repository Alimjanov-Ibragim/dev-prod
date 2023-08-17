export const data = [
  {
    id: 235,
    title: 'Palestine',
    nationality: 'Palestinian',
  },
  {
    id: 234,
    title: 'Tonga',
    nationality: 'Tongan',
  },
  {
    id: 233,
    title: 'Tokelau',
    nationality: 'Tokelauan',
  },
  {
    id: 232,
    title: 'Samoa',
    nationality: 'Samoan',
  },
  {
    id: 231,
    title: 'Wallis and Futuna',
    nationality: 'Wallis and Futuna Islander',
  },
  {
    id: 230,
    title: 'Kiribati',
    nationality: 'I-Kiribati',
  },
  {
    id: 229,
    title: 'Nauru',
    nationality: 'Nauruan',
  },
  {
    id: 228,
    title: 'Marshall Islands',
    nationality: 'Marshallese',
  },
  {
    id: 227,
    title: 'Tuvalu',
    nationality: 'Tuvaluan',
  },
  {
    id: 226,
    title: 'Fiji',
    nationality: 'Fijian',
  },
  {
    id: 225,
    title: 'New Zealand',
    nationality: 'New Zealander',
  },
  {
    id: 224,
    title: 'New Caledonia',
    nationality: 'New Caledonian',
  },
  {
    id: 223,
    title: 'Solomon Islands',
    nationality: 'Solomon Islander',
  },
  {
    id: 222,
    title: 'Vanuatu',
    nationality: 'Ni-Vanuatu',
  },
  {
    id: 221,
    title: 'Northern Mariana Islands',
    nationality: 'American',
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
