import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import Attach from "./Attach";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const ImportIcons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

// const BlockIcon = styled.div`
//   position: absolute;
//   top: -10px;
//   right: 0px;
//   font-size: 10px;
//   color: #fc0909;
// `;

const BlockIcon = styled.div`
  position: absolute;
  top: 7px;
  left: 50%;
  font-size: 10px;
  color: #fc0909;
`; 

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        // const isImg = entry.icon.endsWith('.png') || entry.icon.endsWith('.jpg');
        const Icon = ImportIcons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
          const itemActive = entry.items.some((item) => item.href === location.pathname)

          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={itemActive}
            >
              {isPushed &&
                entry.items.map((item, index) => ( 
                  <MenuEntry key={`children-${item.href}-${index}`} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <MenuLink href={item.href} target={item.target}>
                      {item.label}
                    </MenuLink>
                  </MenuEntry>
                ))}
            </Accordion> 
          ); 
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick} target={entry.target}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
              {isPushed && <BlockIcon>{entry.att && <Attach att={entry.att} />}</BlockIcon>}
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
