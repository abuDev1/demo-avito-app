// library
import React from 'react'

// styles
import styled from 'styled-components'

const DropDownWrapper = styled.div`
  border: 1px solid black;
  width: 230px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;

`

const UlStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 10px;

  & li {
    padding: 8px;

    &:hover {
      background-color: #011765;
      color: white;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`

export const DropDownMenu = () => {
  return (
    <DropDownWrapper>
      <UlStyled>
        <li>Мои объявления</li>
        <li>Заказы</li>
        <li>Мои отзывы</li>
        <li>Избранное</li>
      </UlStyled>
      <hr />
      <UlStyled>
        <li>Сообщения</li>
        <li>Уведомления</li>
      </UlStyled>
      <hr />
      <UlStyled>
        <li>Кошелек</li>
        <li>Платные услуги</li>
        <li>Спецпредложения</li>
      </UlStyled>
      <hr />
      <UlStyled>
        <li>Управление профилем</li>
        <li>Защита профиля</li>
        <li>Настройки</li>
        <li>Lincode-Avito доставка</li>
      </UlStyled>
    </DropDownWrapper>
  )
}
