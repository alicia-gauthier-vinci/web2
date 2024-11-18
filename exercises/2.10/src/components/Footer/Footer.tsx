import "./Footer.css"

interface FooterProps {
  image: string;
  children: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  return(
    <div className="footer">
      <img src={props.image} className="footer-image"/>
      <div>{props.children}</div>
    </div>
  );
};

export default Footer;