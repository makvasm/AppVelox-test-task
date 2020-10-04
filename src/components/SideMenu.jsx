import React from 'react';
import { SideMenu as Menu, SideMenuLogo as Logo, SideMenuElement as Element } from './styles/SideMenu';
import { Heart, Stethoscope, Messages, Book, Test } from './styles/Icons';

export default function SideMenu() {

  return (
    <Menu>
      <Logo></Logo>
      <Element href="profile">
        <Heart />
        <div>Профиль</div>
      </Element>
      <Element href="messages">
        <Messages />
        <div>Сообщения</div>
      </Element>
      <Element href="doctors">
        <Stethoscope />
        <div>Врачи и клиники</div>
      </Element>
      <Element href="testing">
        <Test />
        <div>Тестирование</div>
      </Element>
      <Element href="information">
        <Book />
        <div>Полезно знать</div>
      </Element>
    </Menu>
  )
}
