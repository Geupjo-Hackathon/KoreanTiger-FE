import Image from 'next/image';

import { LinkItemList } from 'data/home';
import * as Styled from './style';

export default function BottomQuickLinkList() {
  return (
    <Styled.Container>
      <Styled.LinkItems>
        {LinkItemList.map((item) => {
          return (
            <Styled.ItemLink key={item.title} href={item.linkUrl}>
              <div tw="pt-[10px]">
                <Styled.Title>{item.title}</Styled.Title>
                <Image
                  src={'/v5/images/home/icon-quickmenu-arrow.svg'}
                  width={20}
                  height={20}
                  tw="mt-[10px]"
                  alt="바로가기 화살표"
                  priority={true}
                />
              </div>
              <div>
                <Image
                  src={item.icon}
                  width={60}
                  height={60}
                  alt="바로가기 아이콘"
                />
              </div>
            </Styled.ItemLink>
          );
        })}
      </Styled.LinkItems>
    </Styled.Container>
  );
}
