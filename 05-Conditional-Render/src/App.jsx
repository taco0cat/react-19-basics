// Conditional Rendering = Control what gets rendered, show hide or change component

import UserGreeting from "./UserGreeting";

function App() {

  return (
    <>
     <UserGreeting isLoggedIn = {true} username = "TacoCat"/> 
     <UserGreeting isLoggedIn = {false} username = "TacoCat"/> 
    </>
  );
}

export default App
