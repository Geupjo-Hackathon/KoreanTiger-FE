import Image from 'next/image';

import * as Styled from './style';

const userInfo = {
  part: '학생',
  name: '김학생',
};

export default function Header() {
  return (
    <Styled.HeaderContainer>
      <Image
        src={'/v5/images/common/navigation/SideNavigation/img-logo.svg'}
        alt="서비스 로고"
        width={48}
        height={26}
        priority={false}
      />

      <Styled.ProfileContainer>
        <Image
          src={
            '/v5/images/common/navigation/SideNavigation/img-dummy-profile.png'
          }
          alt="학교 로고"
          width={45}
          height={45}
          priority={false}
        />
        <div>
          <Styled.PartText>{userInfo.part}</Styled.PartText>
          <Styled.NameText>{userInfo.name} 님</Styled.NameText>
        </div>
      </Styled.ProfileContainer>
    </Styled.HeaderContainer>
  );
}
