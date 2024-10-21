import PageTitle from "../PageTitle";
import Utilisateur from "../Users";
import Footer from "../Footer";

const App = () => {
  const title = "Welcome to My App";
  const footerText = "© 2023 My App";
  const users = [
    {
      name: "Alice",
      age: 25
    },
    {
      name: "Bob",
      age: 30
    },
    {
      name: "Charlie",
      age: 35
    },
    {
      name: "Luffy",
      age: 24
    },
  ]

  return (
    <div>
      <PageTitle title={title} />
      <Utilisateur users={users} />
      <Footer text={footerText} />
    </div>
  );
};

export default App;
