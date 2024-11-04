import "./Header.css"
interface HeaderProps {
  image: string;
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return(
    <div className="header">
      <img src={props.image} className="header-image" width="400"/>
      <div>{props.children}</div>
    </div>
  );
};

export default Header;