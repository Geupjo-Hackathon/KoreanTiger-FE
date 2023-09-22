import { theme, styled } from 'twin.macro';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Container = styled.div`
  flex: 1 0 auto;
  position: relative;
  margin-top: 10px;
`;

export const SwiperContainer = styled(Swiper)`
  display: flex;
  min-height: 256px;
  height: 100% !important;

  .swiper-wrapper {
    height: 100%;
  }
`;

export const SwiperSlideContainer = styled(SwiperSlide)`
  display: flex;
  align-items: flex-end;
`;

export const CardLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 20px);
  padding: 20px 20px 24px;
  background-color: ${({ bgcolor }) => bgcolor};
  border-radius: 5px;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-20px);
  }
`;

export const CardLabel = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 23px;
  width: 95px;
  padding: 0 10px;
  background-color: ${theme`colors.white_op15`};
  border-radius: 50px;
  font: ${theme`typography.b_13`};
  color: ${theme`colors.white`};
`;
export const CardTitle = styled.h3`
  margin-top: 10px;
  font: ${theme`typography.t_18_bold`};
  color: ${theme`colors.white`};
`;
export const CartTextButton = styled.p`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
  font: ${theme`typography.b_15`};
  color: ${theme`colors.white`};
`;
export const SlideNavigationWrap = styled.div`
  position: absolute;
  top: -45px;
  right: 20px;
  display: inline-flex;
  align-items: center;
`;
export const SlideNavigationButton = styled.button``;
