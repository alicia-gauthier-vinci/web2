interface Person {
  name: string;
  age: number;
}

interface UtilisateurProps {
  users: Person [];
}

const Utilisateur = (props: UtilisateurProps) => {
  return (
    <div>
      {props.users.map((user, index) => (
        <div key={index}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
};

export default Utilisateur;