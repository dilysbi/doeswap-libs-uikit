/* eslint-disable import/no-dynamic-require */
import React from "react";
import styled, { keyframes } from "styled-components";
import iconSvg from "../../../assets/images/tag/icon-hot.svg";

interface Props {
  att: string;
}

const flickerAnimation = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const BoxWrapper = styled.div`
  img {
    width: 28px;
    position: absolute;
    top: -10px;
    right: -60px;
    animation: ${flickerAnimation} 1s infinite;
  }
`;

const Attach: React.FC<Props> = ({ att, ...otherProps }) => {
  const isIcon = att?.startsWith("icon");

  return (
    <>
      {isIcon ? (
        <BoxWrapper>
          <img src={iconSvg} alt="hot" width={50} />
        </BoxWrapper>
      ) : (
        <div {...otherProps}>{att}</div>
      )}
    </>
  );
};

export default Attach;
