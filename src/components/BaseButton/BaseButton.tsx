/******************
  BaseButton
*******************/

// js
import React, { CSSProperties, ReactElement, ReactEventHandler } from "react"
import "./BaseButton.scss"

// components

// assets

// styles

interface IOwnProps {
  className?: string | "button--naked" | "button--outline"
  onClick?: ReactEventHandler
  onKeyDown?: ReactEventHandler
  label?: string
  style?: CSSProperties
  children?
  type?: "submit" | "reset" | "button"
  disabled?: boolean
}

function BaseButton({
  className,
  onClick,
  onKeyDown,
  label,
  style,
  children,
  type,
  disabled,
}: IOwnProps): ReactElement {
  const root = "BaseButton"

  return (
    <button
      type={type ?? "button"}
      disabled={disabled}
      className={`${root}${className ? " " + className : ""}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      style={style}
    >
      {label}
      {children}
    </button>
  )
}

export default BaseButton
