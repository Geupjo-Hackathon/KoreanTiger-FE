import Image from 'next/image';

import * as Styled from './style';

const userName = 'tester';

export default function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.InnerContainer>
        <Styled.LeftSide>
          <Image src={''} alt="프로필" width={48} height={48} />
          <Styled.TextWrap>
            <Styled.Title>{userName}</Styled.Title>
            <Styled.SubTitle>LV_AREA</Styled.SubTitle>
          </Styled.TextWrap>
        </Styled.LeftSide>
        <Styled.RightSide>
          <Styled.DateText>
            Today <strong>2022.12.27</strong>
          </Styled.DateText>
          <Styled.NewQuestion>
            <Styled.NewQuestionText>새로운 질문</Styled.NewQuestionText>
            <Styled.Badge>4</Styled.Badge>
          </Styled.NewQuestion>
        </Styled.RightSide>
      </Styled.InnerContainer>
    </Styled.HeaderContainer>
  );
}
