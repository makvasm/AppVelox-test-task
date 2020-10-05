import React from 'react';
import { SideMenu as Menu, SideMenuLogo as Logo, SideMenuElement as Element, SideMenuLink as Link } from './styles/SideMenu';
import { Heart, Stethoscope, Messages, Book, Test } from './styles/Icons';
import Button from './styles/Button';

export default function SideMenu() {

  return (
    <Menu>
      <Logo></Logo>
      <Element>
        <Link href="profile">
          <Heart />
          <div>Профиль</div>
        </Link>
      </Element>
      <Element>
        <Link href="messages">
          <Messages />
          <div>Сообщения</div>
        </Link>
      </Element>
      <Element>
        <Link href="doctors">
          <Stethoscope  />
          <div>Врачи и клиники</div>
        </Link>
      </Element>
      <Element>
        <Link href="testing">
          <Test />
          <div>Тестирование</div>
        </Link>
      </Element>
      <Element>
        <Link href="information">
          <Book />
          <div>Полезно знать</div>
        </Link>
      </Element>
      <Element>
        <Button>Подать заявку</Button>
      </Element>
    </Menu>
  )
}
