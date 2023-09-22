import styled, { css } from "styled-components";

/**
 * 버튼 기본 스타일
 */
export const buttonBaseStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  border-radius: 50%;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  -webkit-appearance: none;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;
`;

/**
 * 버튼의 크기(width, padding), 폰트지정
 */
export const sizeStyles = {
  xs: css`
    width: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 10px;
    font-size: 12px;
  `,
  sm: css`
    width: auto;
    min-width: 30px;
    height: 30px;
    padding: 0 10px;
    font-size: 15px;
  `,
  md: css`
    width: auto;
    min-width: 40px;
    padding: 0 10px;
    height: 40px;
    font-size: 15px;
  `,
};

/**
 * 버튼 스타일 (bg-color, border-color, font-color)
 */
export const variantStyles = {
  default: {
    pink: css`
      background-color: #f6c8fb;
      color: #ffffff;
      &:hover {
        background-color: #fef3ff;
        color: #000000;
      }
      &:disabled {
        background-color: #eeeeee;
        color: #cccccc;
        pointer-events: none;
      }
    `,
  },
  hotPink: css`
    background-color: #e784f2;
    color: #ffffff;
    &:hover {
      background-color: #e5afeb;
      color: #000000;
    }
    &:disabled {
      border-color: #eeeeee;
      color: #cccccc;
      pointer-events: none;
    }
  `,
};

export const StyledButton = styled.button`
  ${buttonBaseStyle}
  ${(props) => sizeStyles[props.size]}
  ${(props) => variantStyles.default[props.colorTheme]}
`;
