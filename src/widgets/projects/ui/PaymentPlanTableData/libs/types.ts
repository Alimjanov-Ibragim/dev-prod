type TListType = {
  id: number;
  title: string;
};

export type TListTableRow = {
  days: number;
  dueType: string;
  months: number;
  part: number;
  percent: number;
  amount?: number;
  typeId: number;

  /** Worked with style type "highlighted", it's for set a bg color. */
  className?: string;
  checked: boolean;
};

export type TList = {
  id: number;
  title: string;
  community: string;
  brokerAgencyShare: number;
  agentShareForCompanyLead: number;
  agentShareForPersonalLead: number;
  blockable: boolean;
  completionAt: string;
  escrowAccount: any;
  corporateAccount: any;
  ibanAccount: any;
  swiftCode: any;
  bankName: any;
  address: string;
  deleted: boolean;
  city: TListType;
  paymentPlan: {
    id: number;
    title: string;
    // this is string which will be converted to array
    plan: string;
  };
  eoi: {
    id: number;
  };
  offer: {
    id: number;
  };
  reservation: {
    id: number;
  };
  spa: {
    id: number;
  };
  developer: TListType;
  entity: {
    id: number;
    type: TListType;
  };
};

export enum PaymentPartType {
  Payment = 1,
  DLDFee,
  BookingFee,
  SPAIssuing,
  Handover,
  AdminFee,
}
