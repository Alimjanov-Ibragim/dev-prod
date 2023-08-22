type TListType = {
  id: number;
  title: string;
};

export type TListTableRow = {
  id: number;
  title: string;
  accessRoles: TListType[];
  type: TListType;

  /** Worked with style type "highlighted", it's for set a bg color. */
  className?: string;
  checked: boolean;
};

export enum PaymentPartType {
  Payment = 1,
  DLDFee,
  BookingFee,
  SPAIssuing,
  Handover,
  AdminFee,
}
