type TStyleType =
  | 'base'
  | 'bordered'
  | 'bordered-next/prev-buttons'
  | 'pagination-pager'
  | 'pager';

type TShape = 'rounded' | 'circular';

export type TPaginationProps = {
  onChange: (event: { selected: number }) => void;
  previousLabel?: string | React.ReactNode | undefined;
  nextLabel?: string | React.ReactNode | undefined;
  breakLabel?: string | React.ReactNode | undefined;
  styleType?: TStyleType;
  shape?: TShape;
  perPageAmount?: boolean;
  perPageAmountOnTheLeftside?: boolean;
  pageRangeDisplayed?: number;
  /** Amount of elements */
  pageCount: number;
  wrapperClassname?: string;
};
