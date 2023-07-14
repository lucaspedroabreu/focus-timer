import { HTMLAttributes, ReactNode } from "react"

type ButtonProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...rest }: ButtonProps) {

  return (
  <button className={`${className} btn btn-primary`} {...rest}>
    {children}
  </button>
  )
}