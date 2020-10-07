import React, { useState, useEffect } from 'react';
import { Wrapper, Header, Body, Day, WeekDay } from './styles/DatePicker';
import { DatePickerArrow } from './styles/Icons';
import Button from './styles/Button';

// Обозначение дней недели в верхушке календаря
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

  // Установить текущую дату
  const initDate = () => {
    let _date = {};
    [_date.day, _date.month, _date.year] = new Date().toLocaleDateString().split('.');
    Object.entries(_date).forEach(([key, value]) => _date[key] = parseInt(value, 10));
    // для нас месяц удобнее индексировать с нуля, поэтому отнимаем 1
    _date.month--;
    return _date;
  }

  const [date, setDate] = useState(initDate());

  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  // Возвращает количество дней в месяце
  // При передаче 0 в конструктор возвращается последний день идущего перед переданным месяца,
  // поэтому в функцию нужно передавать не текущий, а следующий за текущим месяц
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
    let shift = weekShift(date.month, date.year);
    let forRender = [];
    for (let i = 0; i < daysInMonth(date.month + 1, date.year) + shift; i++) {
      // Пока текущий индекс меньше сдвига - рендерим пустой div
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

  // Возвращает название месяца.
  const getMonthName = (ind) => {
    return months[ind];
  }

  const changeYear = (direction) => {
    let year = date.year;
    return direction > 0 ? ++year : --year;
  }

  // Изменить текущий месяц
  // Если месяц больше 11 или меньше 0 - переходим на следующий/предыдущий год
  const changeMonth = (direction) => {
    let year = date.year;
    let month = date.month;
    if (direction > 0) {
      if (++month > 11) {
        year = changeYear(1);
        month = 0;
      }
    } else {
      if (--month < 0) {
        year = changeYear(-1);
        month = 11;
      }
    }
    // переписываем значения текущего состояния на новые
    setDate({ ...date, year, month });
  }

  return (
    <Wrapper>
      <Header>
        <Button onClick={() => changeMonth(-1)}>
          {DatePickerArrow('left')}
        </Button>
        <p>{`${getMonthName(date.month)}, ${date.year}`}</p>
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
