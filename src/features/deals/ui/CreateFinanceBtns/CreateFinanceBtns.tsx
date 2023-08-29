import { DealsFinanceCard } from 'entities/deals';
import { Button } from 'shared/ui';

export const CreateFinanceBtns = () => {
  return (
    <DealsFinanceCard
      typeHeadTitle='Payment for property'
      sourcePerson='Emaar'
      sourceRole='Developer'
      destinationPerson='AX Capital'
      destinationRole='Agency'
      mainPriceOnTheCenter='AED 100,000'
      paidLinePercent='10%'
      invoicedLinePercent='50%'
      leftPrice='AED 185,000'
      centerPrice='AED 500,000'
      rightPrice='AED 200,000'
      leftBtn={
        <>
          <Button leadingIcon='plus' leadingIconColor='light' typeStyle='link'>
            Create
          </Button>
        </>
      }
      rightBtn={
        <>
          <Button leadingIcon='plus' leadingIconColor='light' typeStyle='link'>
            Create
          </Button>
        </>
      }
    />
  );
};
