interface User {
  name: string,
  age: number,
  online: string
}

interface UserProps {
  user: User[]
}

const User = (props: UserProps) => {
  return (
    <div>
      <ul>
        {props.user.map((user, index) => (
          <li key={index}>
            <h2>{user.name}</h2>
            <h4>{user.age} ans</h4>
            <p
              className={user.online === "online" ? "user-card--online" : "user-card--offline"}
            >
              L'user est {user.online === "online" ? "online" : "offline"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;