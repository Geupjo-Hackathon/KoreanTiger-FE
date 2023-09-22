import { useRouter } from 'next/router';

import { menuData } from 'data/common';
import * as Styled from './style';

export default function Menu() {
  const { asPath } = useRouter();

  return (
    <Styled.MenuContainer>
      {menuData.map((menuItemGroup) => {
        return (
          <Styled.MenuItemGroup key={menuItemGroup.id}>
            {menuItemGroup.label && (
              <Styled.MenuLabel>{menuItemGroup.label}</Styled.MenuLabel>
            )}
            {menuItemGroup.menu.map((menuItem) => {
              return (
                <Styled.MenuItem key={menuItem.id}>
                  <Styled.MenuLink href={menuItem.url}>
                    {menuItem.title}
                    {asPath === menuItem.url && <Styled.Dot />}
                  </Styled.MenuLink>
                  {menuItem.subMenu &&
                    menuItem.subMenu.map((subMenuItem) => {
                      return (
                        <Styled.SubMenuItem key={subMenuItem.id}>
                          <Styled.SubMenuLink
                            href={subMenuItem.url}
                            isactive={
                              asPath === subMenuItem.url ? 'true' : 'false'
                            }
                          >
                            {subMenuItem.title}
                          </Styled.SubMenuLink>
                        </Styled.SubMenuItem>
                      );
                    })}
                </Styled.MenuItem>
              );
            })}
          </Styled.MenuItemGroup>
        );
      })}
    </Styled.MenuContainer>
  );
}
