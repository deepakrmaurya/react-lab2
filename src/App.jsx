import "./App.css";
import Counter from "./Components/Counter";
import HelloWorld from "./Components/HelloWorld";
import LiveCharaCount from "./Components/LiveCharaCount";
import LoginData from "./Components/LoginData";
import Name from "./Components/Name";
import ProductRender from "./Components/ProductRender";
import Profile from "./Components/Profile";
import RandomQuote from "./Components/RandomQuote";
import StopWatch from "./Components/StopWatch";
import ToDo from "./Components/ToDo";
import ToggleButton from "./Components/ToggleButton";
import TogglePara from "./Components/TogglePara";

function App() {
  return (
    <div>
      <StopWatch />
      <RandomQuote />
      <ProductRender />
      <ToDo />
      <LiveCharaCount />
      <LoginData />
      <TogglePara />
      <ToggleButton />
      <Counter />

      <Profile
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
      />
      <HelloWorld />
    </div>
  );
}

export default App;
