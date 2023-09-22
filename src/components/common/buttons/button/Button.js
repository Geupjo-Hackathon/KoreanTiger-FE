import React from "react";
import Link from "next/link";
import { StyledButton } from "./style";

export default function Button({
  sizeStyles,
  themeStyle,
  disabled,
  onClick,
  href,
  type,
  target,
  buttonName,
  style,
}) {
  if (href) {
    return (
      <Link href={href} passHref>
        <StyledButton
          style={style}
          sizeStyles={sizeStyles}
          colorTheme={themeStyle}
          disabled={disabled}
          onClick={onClick}
          type={type}
        >
          {buttonName}
        </StyledButton>
      </Link>
    );
  }
  return (
    <StyledButton
      style={style}
      sizeStyles={sizeStyles}
      colorTheme={themeStyle}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {buttonName}
    </StyledButton>
  );
}
