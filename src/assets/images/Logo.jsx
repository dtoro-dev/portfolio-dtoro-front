import "../styles/gritch.css";

const Logo = ({brand, title}) => {
  return (
    <div className="glitch-wrapper">
      <div className={brand ? "glitch-brand" : "glitch" } data-glitch={title}>
        {title}
      </div>
    </div>
  );
};

export default Logo;
