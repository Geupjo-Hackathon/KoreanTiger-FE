import Image from 'next/image';

import * as Styled from './style';

export default function LogoutButton() {
  const onClickLogout = () => {
    console.log('logout');
  };

  return (
    <Styled.LogoutButton onClick={onClickLogout}>
      <Image
        src={'/v5/images/common/navigation/sideNavigation/icon-logout.svg'}
        alt="서비스 로고"
        width={16}
        height={16}
      />
      로그아웃
    </Styled.LogoutButton>
  );
}
