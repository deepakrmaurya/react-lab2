import "./App.css";
import HelloWorld from "./Components/HelloWorld";
import Name from "./Components/Name";
import Profile from "./Components/Profile";

function App() {
  return (
    <div>
      {/* <HelloWorld /> */}

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
    </div>
  );
}

export default App;
