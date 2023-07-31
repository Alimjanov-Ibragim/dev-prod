import React, { ReactSVG } from 'react';

import { Button } from 'shared/ui';
import { Icon } from 'shared/ui';

export const LeadsPage = () => {
  return (
    <div
      className='flex justify-center flex-col items-center gap-2'
      style={{
        textAlign: 'center',
      }}
    >
      <h1>Leads page</h1>
      <Button
        size='default'
        // disabled
        typeStyle='solid'
        // color='light'
        leadingIcon={'check'}
        leadingIconColor='light'
        // badgeText={'2'}
        // badgeColor='bg-red-700'
      >
        btn
      </Button>

      <Icon
        size='default'
        icon='check'
        styleType='default'
        shape='circular'
        color='green'
      />
      <Icon
        // size='xs'
        icon='plus'
        styleType='soft'
        shape='circular'
        color='green'
      />
      <Icon
        size='xs'
        icon='download'
        styleType='soft'
        shape='circular'
        color='green'
      />
      <Icon
        size='small'
        icon='arrow-bar-left'
        styleType='soft'
        shape='circular'
        color='green'
      />
    </div>
  );
};
