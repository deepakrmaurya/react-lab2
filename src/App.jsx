import "./App.css";
import Counter from "./Components/Counter";
import HelloWorld from "./Components/HelloWorld";
import LoginData from "./Components/LoginData";
import Name from "./Components/Name";
import Profile from "./Components/Profile";
import ToggleButton from "./Components/ToggleButton";
import TogglePara from "./Components/TogglePara";

function App() {
  return (
    <div>
      <LoginData />
      {/* <TogglePara /> */}
      {/* <ToggleButton /> */}
      {/* <Counter /> */}

      {/* <Profile
        imageURL={"/assets/user-avatar-male-1.png"}
        name={"Deepak Maurya"}
        title={"💻 Frontend Developer"}
      />
      <Profile
        imageURL={"/assets/cool-23.png"}
        name={"Rishabh Sharma"}
        title={"💻 Backend Developer"}
      />
      <Profile
        imageURL={"/assets/smile-41.png"}
        name={"Rohit Gusai"}
        title={"💻 Full Stack Developer"}
      /> */}
      {/* <HelloWorld /> */}
    </div>
  );
}

export default App;
