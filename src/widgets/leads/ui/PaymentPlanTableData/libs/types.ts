type TListType = {
  id: number;
  title: string;
};

export type TListTableRow = {
  id: number;
  part: number;
  amount: number;
  dueDate: any;
  dueType: string;
  months: number;
  days: number;
  createdAt: string;
  type: TListType;
  completeness: number;

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
