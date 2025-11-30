// src/Button.tsx
import type { JSX } from 'solid-js'

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline'
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', ...rest } = props
  const className = () =>
    ['btn', variant === 'primary' ? 'btn-primary' : 'btn-outline', rest.class]
      .filter(Boolean)
      .join(' ')

  return <button {...rest} class={className()} />
}
