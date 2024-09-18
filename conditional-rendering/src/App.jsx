import UserGreeting from "./UserGreeting"

const App = () =>{
  return(
    <>
      <UserGreeting isLoggedIn={false} username="PuggyPotato"/>
      <UserGreeting isLoggedIn={true}/>
    </>

  )
}




export default App