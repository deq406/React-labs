import React, { Component } from "react";
import classnames from "classnames";
import * as calendar from "./calendar";

import "./index.css";

function hocCalendar(Note) {
  return class Calendar extends React.Component {
    static defaultProps = {
      date: new Date(),
      years: [
        2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
        2022,
      ],
      monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      onChange: Function.prototype,
    };

    state = {
      date: this.props.date,
      currentDate: new Date(),
      selectedDate: null,
      prevMonth: this.props.date.getMonth() - 1,
      newNote: false,
    };

    get year() {
      return this.state.date.getFullYear();
    }

    get month() {
      return this.state.date.getMonth();
    }

    get day() {
      return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
      const date = new Date(this.year, this.month - 1);

      this.setState({ date: date, prevMonth: date });
    };

    handleNextMonthButtonClick = () => {
      const date = new Date(this.year, this.month + 1);

      this.setState({ date: date, prevMonth: date });
    };

    handleSelectChange = () => {
      const year = this.yearSelect.value;
      const month = this.monthSelect.value;

      const date = new Date(year, month);

      this.setState({ date });
    };

    handleDayClick = (date) => {
      this.setState({ selectedDate: date });

      this.props.onChange(date);
    };
    handleDoubleClick = (date) => {
      this.setState({ selectedDate: date, newNote: true });

      this.props.onChange(date);
      console.log(this.state.newNote);
    };

    render() {
      const { years, monthNames, weekDayNames } = this.props;
      const { currentDate, selectedDate, date, newNote } = this.state;

      const monthData = calendar.getMonthData(this.year, this.month);

      return (
        <div className="calendar">
          <header>
            <button onClick={this.handlePrevMonthButtonClick}>{"<"}</button>

            <select
              ref={(element) => (this.monthSelect = element)}
              value={this.month}
              onChange={this.handleSelectChange}
            >
              {monthNames.map((name, index) => (
                <option key={name} value={index}>
                  {name}
                </option>
              ))}
            </select>

            <select
              ref={(element) => (this.yearSelect = element)}
              value={this.year}
              onChange={this.handleSelectChange}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <button onClick={this.handleNextMonthButtonClick}>{">"}</button>
          </header>

          <table>
            <thead>
              <tr>
                {weekDayNames.map((name) => (
                  <th key={name}>{name}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {monthData.map((week, index) => (
                <tr key={index} className="week">
                  {week.map((Date, index) =>
                    Date ? (
                      <td
                        key={index}
                        className={classnames("day", {
                          today: calendar.areEqual(Date, currentDate),
                          selected: calendar.areEqual(Date, selectedDate),
                          prevMonthDay: calendar.areNotEqual(Date, date),
                        })}
                        onClick={() => this.handleDayClick(Date)}
                      >
                        {Date.getDate()}
                      </td>
                    ) : (
                      <td key={index} />
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <Note></Note>
        </div>
      );
    }
  };
}
export default hocCalendar;
