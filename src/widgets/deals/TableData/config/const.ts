export enum LeadStatusType {
  new = 1,
  noAnswer,
  contacted,
  optionsSent,
  warm,
  hot,
  customer,
  canceled,
  junk,
  unsuccessful,
}

export enum DealStatusType {
  Draft = 1,
  ReservationAgreementSent,
  ReservationAgreementSigned,
  SPASent,
  SPASigned,
  OQOODInitiated,
  OQOODIssued,
  Completed,
  Cancelation,
  Canceled,
  Unsuccessful,
}

export const dealStatusesColorSwitch = (id: number) => {
  switch (id) {
    case DealStatusType.Draft:
      return 'gray';
    case DealStatusType.ReservationAgreementSent:
      return 'yellow';
    case DealStatusType.ReservationAgreementSigned:
      return 'blue';
    case DealStatusType.SPASent:
      return 'yellow';
    case DealStatusType.SPASigned:
      return 'blue';
    case DealStatusType.OQOODInitiated:
      return 'dark';
    case DealStatusType.OQOODIssued:
      return 'dark';
    case DealStatusType.Completed:
      return 'green';
    case DealStatusType.Cancelation:
      return 'gray';
    case DealStatusType.Canceled:
      return 'red';
    case DealStatusType.Unsuccessful:
      return 'red';
    default:
      return 'gray';
  }
};

export const leadStatusesColorSwitch = (id: number) => {
  switch (id) {
    case LeadStatusType.new:
      return 'blue';
    case LeadStatusType.noAnswer:
      return 'gray';
    case LeadStatusType.contacted:
      return 'yellow';
    case LeadStatusType.optionsSent:
      return 'yellow';
    case LeadStatusType.warm:
      return 'yellow';
    case LeadStatusType.hot:
      return 'green';
    case LeadStatusType.customer:
      return 'green';
    case LeadStatusType.canceled:
      return 'dark';
    case LeadStatusType.junk:
      return 'dark';
    case LeadStatusType.unsuccessful:
      return 'red';

    default:
      return 'gray';
  }
};
