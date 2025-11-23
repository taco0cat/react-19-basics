// Props  = Read only properties shared between components
// parent --> child component
// <Component key=value />

import Student from "./Student.jsx";

function App() {
  
  return(
    <>
    {/* Sending Value Spongebob with Key name, props.name works in student.jsx */}
    {/* Anything not string, enclose in {} */}
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student />
    </>
  );
}

export default App
