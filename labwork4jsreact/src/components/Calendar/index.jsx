import React from "react";
import classnames from "classnames";

import * as calendar from "./calendar";

import "./index.css";

export default class Calendar extends React.Component {
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

  render() {
    const { years, monthNames, weekDayNames } = this.props;
    const { currentDate, selectedDate, date } = this.state;

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
      </div>
    );
  }
}

/*import React, { Component } from "react";
import * as calendar from "./calendar";
import "./index.css";
import classnames from "classnames";
class Calendar extends Component {
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
    weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вc"],
    onChange: Function.prototype,
  };
  constructor(props) {
    super(props);
    this.handlePrevMonthButtonClick =
      this.handlePrevMonthButtonClick.bind(this);
    this.handleNextMonthButtonClick =
      this.handleNextMonthButtonClick.bind(this);
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
  }
  state = {
    date: this.props.date,
    CurrentDate: new Date(),
    selectedDate: null,
  };
  /*get year() {
    return this.state.date.getFullYear();
  }
  get month() {
    return this.state.date.getMonth();
  }
  handlePrevMonthButtonClick() {
    const date = new Date(
      this.state.date.getFullYear(),
      this.state.date.getMonth() - 1
    );
    console.log(date);
    this.setState({ date });
  }
  handleNextMonthButtonClick() {
    const date = new Date(
      this.state.date.getFullYear(),
      this.state.date.getMonth() + 1
    );
    console.log(date);
    this.setState({ date });
  }
  handleSelectedChange() {
    const year = this.yearSelect.value;
    const month = this.monthSelect.value;
    const date = new Date(year, month);
    console.log(date);
    this.setState({ date });
  }
  handleDayClick(date) {
    console.log(date);
    this.setState({ selectedDate: date });

    this.props.onChange(date);
  }
  render() {
    const { years, monthNames, weekDayNames } = this.props;
    const { CurrentDate, selectedDate } = this.props;
    const monthData = calendar.getMonthData(
      this.state.date.getFullYear(),
      this.state.date.getMonth()
    );
    return (
      <div className="calendar">
        <header>
          <button onClick={this.handlePrevMonthButtonClick}>{"<"}</button>
          <select
            value={this.state.date.getMonth()}
            ref={(element) => (this.monthSelect = element)}
            onChange={this.handleSelectedChange}
          >
            {monthNames.map((monthName, index) => (
              <option key={monthName} value={index}>
                {monthName}
              </option>
            ))}
          </select>
          <select
            defaultValue={this.state.date.getFullYear()}
            ref={(element) => (this.yearSelect = element)}
            onChange={this.handleSelectedChange}
          >
            {years.map((yearName) => (
              <option key={yearName} value={yearName}>
                {yearName}
              </option>
            ))}
          </select>
          <button onClick={this.handleNextMonthButtonClick}>{">"}</button>
        </header>
        <table>
          <thead>
            <tr>
              {weekDayNames.map((weekDay) => (
                <td key={weekDay}>{weekDay}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {monthData.map((week, index) => (
              <tr key={index} className="week">
                {week.map((date, index) =>
                  date ? (
                    <td
                      key={index}
                      className={
                        (classnames("day"),
                        {
                          'today': calendar.areEqual(date, CurrentDate),
                          'selected': calendar.areEqual(date, selectedDate),
                        })
                      }
                      onClick={() => this.handleDayClick(date)}
                    >
                      {date.getDate()}
                    </td>
                  ) : (
                    <td key={index} />
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;*/
