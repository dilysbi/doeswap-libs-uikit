import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { MenuEntryNav } from "./MenuEntry";
import MenuLink from "./MenuLink";

const WrapperGuide = styled.div`
  display: block;
`;

const Guide: React.FC = () => {
  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const guideLink: any = {
    "/home": "https://docs.soupsswap.io/guide",
    "/swap": "https://docs.soupsswap.io/ecosystem/soup-swap/how-to-swap-on-soup-swap",
    "/pool": "https://docs.soupsswap.io/token/spw-lp-token",
  };

  let linkto = guideLink["/home"];
  switch (location?.pathname) {
    case "/swap":
      linkto = guideLink["/swap"];
      break;
    case "/pool":
      linkto = guideLink["/pool"];
      break;

    default:
      linkto = guideLink["/home"];
      break;
  }

  return (
    <WrapperGuide>
      <MenuEntryNav key="guide" secondary>
        <MenuLink href={linkto} target="_blank">
          GUIDE
        </MenuLink>
      </MenuEntryNav>
    </WrapperGuide>
  );
};

export default Guide;
