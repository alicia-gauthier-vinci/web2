import User from "../UserCard"
import "../UserCard.css"

const users: User[] = [
  {
    name: "Luffy",
    age: 19,
    online: "online"
  },
  {
    name: "Nami",
    age: 22,
    online: "offline"
  },
  {
    name: "Zoro",
    age: 22,
    online: "online"
  }
]

function App() {

  return (
    <>
      <User user={users}/>

    </>
  )
}

export default App
