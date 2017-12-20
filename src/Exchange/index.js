import React from 'react';

import Panel from 'Panel';
import Input from './Input';

const Exchange = () => (
  <Panel>
    <form>
      <Input
        legend="Spend exactly:" currency="JPY"
        value={4000000} balance={47378200}
      />
      <div>abc</div>
      <Input
        legend="Receive approximately:" currency="BTC"
        value={1.80866545} balance={4.37295763}
      />
    </form>
  </Panel>
);

export default Exchange;
