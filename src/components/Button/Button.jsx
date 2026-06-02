import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

/**
* Reusable Button.
* Props:
*  - variant: 'primary' | 'secondary' | 'ghost' | 'outline'  (default 'primary')
*  - size: 'sm' | 'md' | 'lg'  (default 'md')
*  - to: string -> renders as react-router Link
*  - href: string -> renders as <a>
*  - otherwise renders <button>
*  - icon: ReactNode -> prepended
*  - iconRight: ReactNode -> appended
*  - fullWidth: boolean
*/
function Button({
 variant = 'primary',
 size = 'md',
 to,
 href,
 icon,
 iconRight,
 fullWidth = false,
 className = '',
 children,
 ...rest
}) {
 const classes = [
   styles.btn,
   styles[variant],
   styles[size],
   fullWidth ? styles.fullWidth : '',
   className
 ].filter(Boolean).join(' ')

 const inner = (
   <>
     {icon && <span className={styles.icon}>{icon}</span>}
     <span className={styles.label}>{children}</span>
     {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
   </>
 )

 if (to) return <Link to={to} className={classes} {...rest}>{inner}</Link>
 if (href) return <a href={href} className={classes} {...rest}>{inner}</a>
 return <button className={classes} {...rest}>{inner}</button>
}

export default Button
