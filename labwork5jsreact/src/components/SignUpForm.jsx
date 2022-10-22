import React from "react";
import "./Form.css";
import SignUpEmail from "./SignUpEmail";
import SignUpPassword from "./SignUpPassword";
import PhoneInput from "./PhoneInput";
import PropTypes from "prop-types";
export default class SignUpForm extends React.Component {
  static defaultProps = {
    days: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
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
    years: [
      2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
      2017, 2018, 2019,
    ],
  };
  constructor() {
    super();
    this.state = {
      submitButtonStateEmail: true,
      submitButtonStatePassword: true,
    };
    this.isNormalEmail = this.isNormalEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  isNormalEmail(result) {
    console.log(result);
    this.setState({ submitButtonStateEmail: result });
  }
  handlePassword(passWordResult) {
    console.log(passWordResult);
    this.setState({ submitButtonStatePassword: passWordResult });
  }
  render() {
    const { days, monthNames, years } = this.props;
    return (
      <form>
        <fieldset>
          <legend>{"Форма регистрации"}</legend>

          <label htmlFor="name">{"Имя:"}</label>
          <input id="name" type={"text"}></input>
          <label htmlFor="surname">{"Фамилия:"}</label>
          <input id="surname" type={"text"}></input>
          <label htmlFor="lastname">{"Отчество:"}</label>
          <input id="lastname" type={"text"}></input>
          <SignUpEmail func={this.isNormalEmail} />
          <label htmlFor="birthDate">{"Дата рождения:"}</label>
          <br></br>
          <select id="birthDate">
            {days.map((val, index) => (
              <option key={index} value={val}>
                {val}
              </option>
            ))}
          </select>
          <select>
            {monthNames.map((val, index) => (
              <option key={index} value={val}>
                {val}
              </option>
            ))}
          </select>
          <select>
            {years.map((val, index) => (
              <option key={index} value={val}>
                {val}
              </option>
            ))}
          </select>
          <br></br>
          <label>{"Пол:"}</label>
          <input
            type={"radio"}
            value={"Мужской"}
            id="men"
            name="radios"
          ></input>
          <label>{"Мужской"}</label>
          <input
            type={"radio"}
            value={"Женский"}
            id="women"
            name="radios"
          ></input>
          <label>{"Женский"}</label>
          <br></br>
          <SignUpPassword func={this.handlePassword} />
          <PhoneInput></PhoneInput>
          <button
            type={"submit"}
            disabled={
              this.state.submitButtonStateEmail ||
              this.state.submitButtonStatePassword
            }
          >
            {"Submit"}
          </button>
        </fieldset>
      </form>
    );
  }
}
SignUpForm.propTypes = {
  boolTest: PropTypes.bool.isRequired,
};
