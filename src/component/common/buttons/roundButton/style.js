import { theme, styled, css } from "twin.macro";

/**
 * 버튼 기본 스타일
 */
export const buttonBaseStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  border-radius: 5px;
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
    min-width: 90px;
    height: 34px;
    padding: 0 10px;
    font: ${theme`typography.medium_12`};
  `,
  sm: css`
    width: auto;
    min-width: 120px;
    height: 34px;
    padding: 0 10px;
    font: ${theme`typography.medium_15`};
  `,
  md: css`
    width: auto;
    min-width: 180px;
    padding: 0 10px;
    height: 40px;
    font: ${theme`typography.medium_15`};
  `,
};

/**
 * 버튼스타일 (bg-color, border-color, font-color)
 */
const variantStyles = {
  default: {
    pink: css`
      background-color: ${theme`colors.pink_F6C8FB`};
      color: ${theme`colors.basic_FFFFFF`};
      &:hover {
        background-color: ${theme`colors.hover_FEF3FF`};
        color: ${theme`colors.basic_000000`};
      }

      &:disabled {
        background-color: ${theme`colors.dis_EEEEEE`};
        color: ${theme`colors.dis_CCCCCC`};
        pointer-events: none;
      }
    `,
    hotPink: css`
      background-color: ${theme`colors.hotpink_E784F2`};
      color: ${theme`colors.basic_FFFFFF`};

      &:hover {
        background-color: ${theme`colors.hover_E5AFEB`};
        color: ${theme`colors.basic_000000`};
      }

      &:disabled {
        border-color: ${theme`colors.dis_EEEEEE`};
        color: ${theme`colors.dis_CCCCCC`};
        pointer-events: none;
      }
    `,
    blue: css`
      background-color: ${theme`colors.blue_718DF2`};
      color: ${theme`colors.basic_FFFFFF`};

      &:hover {
        border-color: ${theme`colors.BCC6EC`};
        color: ${theme`colors.basic_FFFFFF`};
      }

      &:disabled {
        border-color: ${theme`colors.dis_EEEEEE`};
        color: ${theme`colors.dis_CCCCCC`};
        pointer-events: none;
      }
    `,
    jade: css`
      background-color: ${theme`colors.jade_84FCED`};
      color: ${theme`colors.basic_FFFFFF`};

      &:hover {
        border-color: ${theme`colors.hover_C7EEE9`};
        color: ${theme`colors.basic_FFFFFF`};
      }

      &:disabled {
        border-color: ${theme`colors.dis_EEEEEE`};
        color: ${theme`colors.dis_CCCCCC`};
        pointer-events: none;
      }
    `,
    violet: css`
      background-color: ${theme`colors.violet_9740F6`};
      color: ${theme`colors.basic_FFFFFF`};

      &:hover {
        border-color: ${theme`colors.hover_D9C3F1`};
        color: ${theme`colors.basic_FFFFFF`};
      }

      &:disabled {
        border-color: ${theme`colors.dis_EEEEEE`};
        color: ${theme`colors.dis_CCCCCC`};
        pointer-events: none;
      }
    `,
  },
};

export const Button = styled.button`
  /* base style */
  ${buttonBaseStyle}
  /* size Style */
  ${(props) => sizeStyles[props.size]}
  /* variant Style */
  ${(props) => variantStyles[props.colorTheme][props.variant]}
`;
