import React from 'react';
import styled from 'styled-components';

import Vendor from 'Vendor';
import Money from 'Money';
import arrow from './arrow.svg';

const Container = styled.button`
  padding: 18px 12px 18px 72px;
  position: relative;
  width: 100%;

  background: hsla(0, 0%, 96%, 1);
  &:focus { box-shadow: 0 0 0 2px hsla(187, 72%, 71.0%, 1.0) inset; };
  &:active { background: hsla(0.0, 0.0%, 93%, 1.0); };
`;
const Arrow = styled.img`
  position: absolute;
  top: 0; bottom: 0; right: 12px;
  margin: auto;
`;
const Info = styled.span`
  display: block;
  color: hsla(0, 0%, 62%, 1);
`;
const Title = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
`;
const TitleSub = styled.span`
  font-weight: 400;
  color: hsla(0, 0%, 62%, 1);
  text-decoration: underline;
`;

const ExchangeVendorAvailable = ({ frm, to, vendor, markets, action }) => {
  // for "rate" and "fee"
  const detail = markets[frm.currency][to.currency]
    .find(v => v.name === vendor);
  // (frm.amount * rate) + (frm.amount * rate * detail.fee) = to.amount
  // (frm.amount * rate) * (1 + detail.fee) = to.amount
  const rate = to.amount / ((1 + detail.fee) * frm.amount);
  const fee = frm.amount * rate * detail.fee;
  return (
    <Container type="button" onClick={action}>
      <Title>
        <span>At: <Vendor value={vendor} /> </span>
        <TitleSub>(Change)</TitleSub>
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
