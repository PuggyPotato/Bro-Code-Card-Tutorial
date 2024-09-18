import Student from "./Student.jsx"


const App = () =>{
    return(
      <>
        <Student name="PuggyPotato" age={18} isStudent={true}/>
        <Student name="Patrick" age={42} isStudent={false}/>
        <Student></Student>
      </>
    )
}





export default App