import styles from "./Menu.module.scss"

export function Menu() {
  const navItems = [
   'Como fazer',
    'Ofertas',
    'Depoimentos',
    'Videos',
    'Meu Carrinho',
  ]

  return (
    <header className={styles.menu}>
      <h1>
        <img src="/logo-full.svg" alt="" />
      </h1>

      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          {
            navItems.map((navItem, index) => {
              if(navItems.length  === index + 1) return <li><a href="">{navItem}</a></li>
              return (
                <>
                  <li><a href="#">{navItem}</a></li>
                  <span> /</span>
                </>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}