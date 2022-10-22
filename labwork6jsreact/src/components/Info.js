const Operators = {
  A1: ["375(29)1", "375(29)3", "375(29)6", "375(29)9", "375(44)"],
  MTC: ["375(29)2", "375(29)5", "375(29)7", "375(29)8", "375(33)"],
  life: ["375(25)"],
  Городской: ["375(17)"],
};
export function birthDate(year, month, day) {
  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var dob = new Date(year, month, day);
  var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  var age = today.getFullYear() - dob.getFullYear();
  if (today < dobnow) age = age - 1;
  return age;
}
export function course(entranceYear) {
  var now = new Date().getFullYear();
  var course = now - entranceYear;
  return course > 4 ? "окончил университет" : course;
}
export function EmailCom(email) {
  for (let counter = 0; counter < email.length; counter++) {
    if (email[counter] === "@") {
      var oper = email.slice(counter + 1, email.length);
    }
  }
  return oper;
}
export function OperNumber(telNumber) {
  var numb = telNumber.toString();
  /*Object.keys(Operators).map((key) => {
    for (let i = 0; i < Operators[key].length; i++) {
      if (numb.includes(Operators[key][i])) {
        var result = key.toString();
        console.log(result);
        return result;  
      }
    }
    console.log(result);
  });*/

  for (let i = 0; i < Operators.A1.length; i++) {
    if (numb.includes(Operators.A1[i])) return "A1(VELCOM)";
  }
  for (let i = 0; i < Operators.MTC.length; i++) {
    if (numb.includes(Operators.MTC[i])) return "MTC";
  }

  for (let i = 0; i < Operators.life.length; i++) {
    if (numb.includes(Operators.life[i])) return "life";
  }
  for (let i = 0; i < Operators.Городской.length; i++) {
    if (numb.includes(Operators.Городской[i])) return "Городской";
  }
}
