import { useRef } from 'react';
import Image from 'next/image';
import { theme } from 'twin.macro';
import 'swiper/css';
import 'swiper/css/navigation';

import * as Styled from './style';

const linkItemData = [
  {
    label: 'tag',
    title: 'name_a',
    linkUrl: '/',
    bgColor: theme`colors.pink_F6C8FB`,
  },
  {
    label: 'tag',
    title: 'name_b',
    linkUrl: '/',
    bgColor: theme`colors.hotpink_E784F2`,
  },
  {
    label: 'tag',
    title: 'name_b',
    linkUrl: '/',
    bgColor: theme`colors.blue_718DF2`,
  },
  {
    label: 'tag',
    title: 'name_b',
    linkUrl: '/',
    bgColor: theme`colors.violet_9740F6`,
  },
];

export default function LinkSlider() {
  const swiperRef = useRef();

  return (
    <Styled.Container>
      <Styled.SwiperContainer
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={12}
        slidesPerView={3}
        slidesOffsetBefore={30}
        slidesOffsetAfter={30}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 4.5,
          },
        }}
        style={{ display: 'flex', alignItems: 'flex-end', height: '256px' }}
      >
        {linkItemData.map((item) => {
          return (
            <Styled.SwiperSlideContainer key={item.title}>
              <Styled.CardLink href="/" bgcolor={item.bgColor}>
                <Styled.CardLabel>{item.label}</Styled.CardLabel>
                <Styled.CardTitle>{item.title}</Styled.CardTitle>
                <Styled.CartTextButton>
                  function_def
                  <Image
                    src="/v5/images/home/icon-card-plus.svg"
                    alt="플러스 아이콘"
                    width={14}
                    height={14}
                    tw="ml-[10px]"
                  />
                </Styled.CartTextButton>
              </Styled.CardLink>
            </Styled.SwiperSlideContainer>
          );
        })}
      </Styled.SwiperContainer>
      <Styled.SlideNavigationWrap>
        <Styled.SlideNavigationButton
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image
            src="/v5/images/home/icon-main-slider-prev.svg"
            alt="이전버튼 아이콘"
            width={40}
            height={40}
          />
        </Styled.SlideNavigationButton>

        <Styled.SlideNavigationButton
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image
            src="/v5/images/home/icon-main-slider-next.svg"
            alt="다음버튼 아이콘"
            width={40}
            height={40}
          />
        </Styled.SlideNavigationButton>
      </Styled.SlideNavigationWrap>
    </Styled.Container>
  );
}
