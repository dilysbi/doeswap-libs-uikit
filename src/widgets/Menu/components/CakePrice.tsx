import React from "react";
import styled from "styled-components";
// import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.div`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const WraperLogo = styled.span`
  border-radius: 50%;
  background: red;
  width: 24px;
  height: 24px;
  margin-right: 8px;

  img {
    width: 100%;
    height: auto;
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink>
      <WraperLogo>
        <img src="/images/logo/logo.png" alt="logo" width="24px" />
      </WraperLogo>
      <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
