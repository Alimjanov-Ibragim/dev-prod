export enum UnitStatusType {
  Unreleased = 1,
  Available,
  Blocked,
  Booked,
  Sold,
}

export enum UnitType {
  Apartment = 1,
  Villa,
  Penthouse,
  Townhouse,
  HalfFloor,
  FullFloor,
  CommercialProperty,
  Plot,
  HotelApartment,
}

export const unitsStatusesColorSwitch = (id: number) => {
  switch (id) {
    case UnitStatusType.Unreleased:
      return 'gray';
    case UnitStatusType.Available:
      return 'green';
    case UnitStatusType.Blocked:
      return 'dark';
    case UnitStatusType.Booked:
      return 'yellow';
    case UnitStatusType.Sold:
      return 'blue';
    default:
      return 'gray';
  }
};
