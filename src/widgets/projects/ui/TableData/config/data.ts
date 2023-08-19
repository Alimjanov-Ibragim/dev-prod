export const data = [
  {
    id: 6,
    title: 'Biltmore Sufouh',
    community: 'Al Sufouh',
    completionAt: '2025-03-06T14:00:00.000Z',
    developer: {
      id: 4,
      title: 'GJ Real Estate',
    },
    entity: {
      id: 638,
      type: {
        id: 4,
        title: 'Project',
      },
    },
    _count: {
      total: 192,
      blocked: 61,
      available: 108,
      booked: 23,
      sold: 0,
    },
  },
  {
    id: 5,
    title: 'Terraces Marasi Drive',
    community: 'Business Bay',
    completionAt: '2024-06-29T09:00:00.000Z',
    developer: {
      id: 3,
      title: 'Key Mavens for Real Estate Development',
    },
    entity: {
      id: 556,
      type: {
        id: 4,
        title: 'Project',
      },
    },
    _count: {
      total: 120,
      blocked: 7,
      available: 17,
      booked: 92,
      sold: 4,
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
