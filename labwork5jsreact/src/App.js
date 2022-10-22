import "./App.css";
import SignUpForm from "./components/SignUpForm";

function App() {
  const boolCheck = !1;
  return (
    <div className="App">
      <SignUpForm boolTest={boolCheck} />
    </div>
  );
}

export default App;
