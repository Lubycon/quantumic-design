import React from 'react';
import { Menu, menu } from 'constants/menu';
import { Link } from 'gatsby';
import { isLinkMenu } from 'utils/menu';
import { colors, Text } from '@lubycon/ui-kit';
import styled from '@emotion/styled';

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`;
const StyledListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = ({ menu }: { menu: Menu }) => {
  return isLinkMenu(menu) ? (
    <Link to={menu.link}>
      <Text css={{ cursor: 'pointer' }}>{menu.title}</Text>
    </Link>
  ) : (
    <div>
      <Text>{menu.title}</Text>
      <StyledList>
        {menu.children.map((childrenMenu, index) => (
          <StyledListItem
            key={index}
            css={{
              paddingLeft: 16,
              borderLeft: `1px solid ${colors.gray20}`,
              color: colors.gray70,
            }}
          >
            <Item menu={childrenMenu} />
          </StyledListItem>
        ))}
      </StyledList>
    </div>
  );
};

const GlobalSidebar = () => {
  return (
    <div css={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)', height: '100%', padding: 16 }}>
      <StyledList>
        {menu.map((item, index) => (
          <StyledListItem key={index} css={{ marginBottom: 8 }}>
            <Item menu={item} />
          </StyledListItem>
        ))}
      </StyledList>
    </div>
  );
};

export default GlobalSidebar;
