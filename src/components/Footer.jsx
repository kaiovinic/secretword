import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <h1>
          KAIO<span>DEV</span>
        </h1>
      </div>
      <div>
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/kaioviniciussilva/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span>Kaio Vinícius</span>
          </a>
          - Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
