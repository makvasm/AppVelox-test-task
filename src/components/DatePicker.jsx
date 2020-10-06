import React, { useState } from 'react';
import { Wrapper, Header, Body, Day, WeekDay } from './styles/DatePicker';
import { DatePickerArrow } from './styles/Icons';
import Button from './styles/Button';

const Week = () => (
  <>
    <WeekDay>Пн</WeekDay>
    <WeekDay>Вт</WeekDay>
    <WeekDay>Ср</WeekDay>
    <WeekDay>Чт</WeekDay>
    <WeekDay>Пт</WeekDay>
    <WeekDay>Сб</WeekDay>
    <WeekDay>Вс</WeekDay>
  </>
);

export default function DatePicker() {
  const [date, setDate] = useState(new Date().toLocaleDateString().split('.').reverse().join('-'));

  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  // Возвращает количество дней в месяце
  // При передаче 0 в конструктор возвращается последний день идущего перед переданным месяцем,
  // поэтому в функцию нужно передавать следующий за текущим месяц
  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  }

  // getDay возвращает сдвиг относительно воскресенья, поэтому отнимаем 1, чтобы получить сдвиг относительно понедельника.
  // Если свдиг меньше 0 - возвращаем сдвиг на 6 дней (до воскресенья)
  const weekShift = (month, year) => {
    let shift = new Date(year, month, 1).getDay() - 1;
    return shift >= 0 ? shift : 6;
  }

  // Рендер дней месяца
  const CalendarMonth = () => {
    // Так как месяцы в конструкторе Date индексируются с 0 - отнимаем от передаваемого значения 1
    let shift = weekShift(getMonth() - 1, getYear());
    let forRender = [];
    for (let i = 0; i < daysInMonth(getMonth(), getYear()) + shift; i++) {
      if (i < shift) {
        forRender.push(
          <div key={i}></div>
        );
      } else {
        forRender.push(
          <Day key={i}>{i - shift + 1}</Day>
        );
      }
    }
    return forRender;
  };

  // Возвращает массив вида [год, месяц, день]
  const getDate = () => {
    let _date = date.split('-');
    return [parseInt(_date[0], 10), parseInt(_date[1], 10), parseInt(_date[2], 10)];
  }

  const getYear = () => {
    return getDate()[0];
  }
  // Возвращает число от 1 до 12
  const getMonth = () => {
    return getDate()[1];
  }
  const getDay = () => {
    return getDate()[2];
  }
  // Возвращает название месяца. Так как getMonth возвращает число от 1 до 12 - отнимаем от этого значения 1
  const getMonthName = () => {
    let month = getMonth();
    return months[month - 1];
  }

  const changeYear = (direction) => {
    let year = getYear();
    return direction > 0 ? ++year : --year;
  }

  const changeMonth = (direction) => {
    let _date = getDate();
    let month = _date[1];
    if (direction > 0) {
      if (++month > 12) {
        _date[0] = changeYear(1);
        month = 1;
      }
    } else {
      if (--month < 1) {
        _date[0] = changeYear(-1);
        month = 12;
      }
    }
    _date[1] = month < 10 ? '0' + month : month;
    setDate(_date.join('-'));
  }

  return (
    <Wrapper>
      <Header>
        <Button onClick={() => changeMonth(-1)}>
          {DatePickerArrow('left')}
        </Button>
        <p>{`${getMonthName()}, ${getYear()}`}</p>
        <Button onClick={() => changeMonth(1)}>
          {DatePickerArrow('right')}
        </Button>
      </Header>
      <Body>
        <Week />
        {CalendarMonth()}
      </Body>
    </Wrapper>
  )
}
