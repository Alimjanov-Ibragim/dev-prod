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
