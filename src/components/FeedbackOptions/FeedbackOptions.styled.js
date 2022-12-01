import styled from "styled-components";

export const List = styled.ul`
display: flex;
justify-content: center;
align-items: center;
list-style: none;
gap: 10px;
padding: 0;
`

export const ListItem = styled.li`
display: flex;
justify-content: center;
align-items: center;
`

export const Button = styled.button`
  cursor: pointer;
  min-width: 50px;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  background-color: transparent;
  color: grey;
  font-weight: 700;
	border:1px solid #dcdcdc;
  &:hover,
  &:focus {
    box-shadow: 5px 5px rgba(0, 0, 255, 0.2), -1em 0 0.4em olive;
    color: olive;
  }
`