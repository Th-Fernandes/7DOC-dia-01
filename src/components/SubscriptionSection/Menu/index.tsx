import { StyledMenu } from "./styled"

export function Menu() {
  const navItems = [
   'Como fazer',
    'Ofertas',
    'Depoimentos',
    'Videos',
    'Meu Carrinho',
  ]

  return (
    <StyledMenu.Container>
      <h1>
        <img src="/logo-full.svg" alt="" />
      </h1>

      <StyledMenu.Nav>
        <ul className="list">
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
      </StyledMenu.Nav>
    </StyledMenu.Container>
  )
}