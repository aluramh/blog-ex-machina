import React, { CSSProperties, FC, useMemo } from 'react'
import { Link } from 'gatsby'
import { useTheme } from '../context/theme-context'

type Props = any

const CustomLink: FC<Props> = ({ children, ...props }) => {
  const { theme } = useTheme()

  const customStyle = useMemo(() => {
    let style: CSSProperties = { backgroundImage: 'none' }

    if (theme === 'dark') {
      style.textShadow = 'none'
    }

    return style
  }, [theme])

  return (
    <Link style={customStyle} {...props}>
      {children}
    </Link>
  )
}

export default CustomLink
