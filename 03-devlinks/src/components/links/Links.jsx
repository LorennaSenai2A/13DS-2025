import styles from './Links.module.css'

const Links = ({children, links}) => {
  return (
<li>
    <a href={links}>{children}</a>
</li>
  )
}

export default Links;
