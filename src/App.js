import Myfile from "./Myfile";
import PersonalInfo from "./PersonalInfo";

function App() {
  const name = "reyhan"

  const a =1, b=1
  return (
    <div>   
      <Myfile />
      <PersonalInfo a = {a} b= {b} name={name} />
    </div>
  );
}

export default App;
