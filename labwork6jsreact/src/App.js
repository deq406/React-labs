import React from "react";
import StudentInfo from "./components/StudentInfo";
import Note from "./components/Note";
function App() {
  return (
    <div className="App">
      <div>
        <StudentInfo></StudentInfo>
      </div>
      <div>
        <Note></Note>
      </div>
    </div>
  );
}

export default App;
