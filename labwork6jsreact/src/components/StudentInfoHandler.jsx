import React from "react";
import * as infoHandle from "./Info";
export default function StudentInfoHandler({
  FIO,
  dateOfBirth,
  universityEntranceDate,
  faculty,
  group,
  spec,
  email,
  telNumber,
  EmailState,
}) {
  const day = dateOfBirth.slice(0, 2);
  const month = dateOfBirth.slice(3, 5);
  const year = dateOfBirth.slice(6, 10);
  return (
    <table>
      <tr>
        <td>{"ФИО"}</td>
        <td>{FIO}</td>
      </tr>
      <tr>
        <td>{"Текущий возраст студента"}</td>
        <td>{infoHandle.birthDate(year, month, day)}</td>
      </tr>
      <tr>
        <td>{"Факультет,курс,группа"}</td>
        <td>
          {faculty},{infoHandle.course(universityEntranceDate)},{group}
        </td>
      </tr>
      <tr>
        <td>{"Специальность"}</td>
        <td>{spec}</td>
      </tr>
      <tr>
        <td>{"Email"}</td>
        <td>{email}</td>
      </tr>
      <tr>
        <td>{"Оператор услуг электронной почты"}</td>
        <td>
          {EmailState === true
            ? infoHandle.EmailCom(email)
            : "Введите валидный емаил"}
        </td>
      </tr>
      <tr>
        <td>{"Номер телефона"}</td>
        <td>{telNumber}</td>
      </tr>
      <tr>
        <td>{"Оператор"}</td>
        <td id={"thisNumber"}>{infoHandle.OperNumber(telNumber)}</td>
      </tr>
    </table>
  );
}
