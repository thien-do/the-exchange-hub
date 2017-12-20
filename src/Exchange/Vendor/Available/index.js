import React from 'react';
import styled from 'styled-components';

import Vendor from 'Vendor';
import Money from 'Money';

const InfoP = styled.p`color: hsla(0, 0%, 62%, 1);`;
const InfoSpan = styled.span`color: hsla(0, 0%, 62%, 1);`;

const ExchangeVendorAvailable = ({ frm, to, vendor, markets }) => {
  // for "+3 others" message
  const vendors = markets[frm.currency][to.currency];
  const exchangeSuffix = vendors.length > 1
    ? <InfoSpan> (+{vendors.length - 1} others)</InfoSpan>
    : null;
  // for "rate" and "fee"
  const detail = vendors.find(v => v.name === vendor);
  // (frm.amount * rate) + (frm.amount * rate * detail.fee) = to.amount
  // (frm.amount * rate) * (1 + detail.fee) = to.amount
  const rate = to.amount / ((1 + detail.fee) * frm.amount);
  const fee = frm.amount * rate * detail.fee;
  return (
    <div>
      <p>Exchange: <Vendor value={vendor} />{exchangeSuffix}</p>
      <InfoP>
        <span>{frm.currency}/{to.currency} rate: </span>
        <Money currency={to.currency} value={rate} display="symbol" />
      </InfoP>
      <InfoP>
        <span>Fee: </span>
        <Money currency={to.currency} value={fee} display="symbol" />
        <span> ({detail.fee}%)</span>
      </InfoP>
    </div>
  );
};

export default ExchangeVendorAvailable;
