import styled from "styled-components";

const StyledMenus = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 128rem;
  padding-top: 1.2em;
  margin-inline: auto;
`

const StyledNav = styled.nav`
 .list {
    display: flex;
    list-style: none;
      
    > span {
      font-weight: 900;
      margin-inline: 1.6rem;
    }
  }
`


export const StyledMenu = {
  Container: StyledMenus,
  Nav: StyledNav
}