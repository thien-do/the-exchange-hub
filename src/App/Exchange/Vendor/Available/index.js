import React from 'react';
import styled from 'styled-components';

import Vendor from 'Vendor';
import Money from 'Money';
import arrow from './arrow.svg';

const Container = styled.button`
  padding: 18px 12px 18px 72px;
  position: relative;
  width: 100%;

  color: hsla(0, 0%, 62%, 1);

  background: hsla(0, 0%, 96%, 1);
  &:focus { box-shadow: 0 0 0 2px hsla(187, 72%, 71.0%, 1.0) inset; };
  &:active { background: hsla(0.0, 0.0%, 93%, 1.0); };
`;
const Arrow = styled.img`
  position: absolute;
  top: 0; bottom: 0; right: 12px;
  margin: auto;
`;
const Info = styled.span`display: block;`;
const Title = styled.span`display: block;`;
const TitleHiglight = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: hsla(0, 0%, 13%, 0.9);
`;
const TitleChange = styled.span`
  text-decoration: underline;
`;

const ExchangeVendorAvailable = ({ frm, to, vendor, markets, action }) => {
  // for "rate" and "fee"
  const detail = markets[frm.currency][to.currency]
    .find(v => v.name === vendor);
  // (frm.amount * rate) + (frm.amount * rate * detail.fee) = to.amount
  // (frm.amount * rate) * (1 + detail.fee) = to.amount
  // TODO: the fee and rate here is actually reversed engineer from amounts
  // we need to calculate all the thing from top and pass only
  const rate = to.amount / ((1 + detail.fee) * frm.amount);
  const fee = frm.amount * rate * detail.fee;
  return (
    <Container type="button" onClick={action}>
      <Title>
        <TitleHiglight>At: <Vendor value={vendor} /> </TitleHiglight>
        (<TitleChange>Change</TitleChange>)
      </Title>
      <Info>
        <span>{frm.currency}/{to.currency} rate: </span>
        <Money currency={to.currency} value={rate} display="symbol" />
      </Info>
      <Info>
        <span>Fee: </span>
        <Money currency={to.currency} value={fee} display="symbol" />
        <span> or {detail.fee}%</span>
      </Info>
      <Arrow src={arrow} />
    </Container>
  );
};

export default ExchangeVendorAvailable;
