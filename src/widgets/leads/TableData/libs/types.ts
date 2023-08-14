type TParticipant = {
  id: number;
  role: string;
  entity: {
    id: number;
    type: {
      id: number;
      title: string;
    };
    user: any;
    company: any;
    client: any;
    agency: any;
  };
};

type TUnit = {
  id: number;
  title: string;
  blockedFor: any;
  project: {
    title: string;
    entity: {
      id: number;
    };
  };
  status: {
    title: string;
  };
};

export type TListTableRow = {
  id: number;
  title: string;
  amount: number;
  createdAt: string;
  deal: any;
  status: {
    id: number;
  };
  type: {
    id: number;
    title: string;
  };
  sourceType: {
    id: number;
  };
  participants: TParticipant[];
  unit: TUnit;
  jobs: any[];
  /** Worked with style type "highlighted", it's for set a bg color. */
  className?: string;
  checked: boolean;
};
