import Link from "next/link";

import * as Styled from "./style";

/*
공통 버튼 컴포넌트
*/

/**
 * @param {xs || sm || md} buttonProps.sizeStyles - 버튼 사이즈
 * @param {pink || hotPink || blue || violet || jade} buttonProps.height - 버튼 높이
 * @param {boolean=} buttonProps.disabled - disabled
 * @param {'button' | 'submit' | 'reset'=} buttonProps.type - type
 */

export default function button({ buttonProps }) {
  const {
    sizeStyles,
    themeStyle,
    disabled,
    onClick,
    href,
    type,
    target,
    buttonName,
    style,
  } = buttonProps;

  if (href) {
    return (
      <Link href={href} target={target} passHref>
        <Styled.Button
          style={style}
          sizeStyles={sizeStyles}
          themeStyle={themeStyle}
          disabled={disabled}
          onClick={onClick}
          type={type}
        >
          {buttonName}
        </Styled.Button>
      </Link>
    );
  }
  return (
    <Styled.Button
      style={style}
      sizeStyles={sizeStyles}
      themeStyle={themeStyle}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {buttonName}
    </Styled.Button>
  );
}
