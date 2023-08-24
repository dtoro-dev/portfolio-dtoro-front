import "../styles/gritch.css";

const Logo = ({title}) => {
  return (
    <div class="glitch-wrapper">
      <div class="glitch" data-glitch={title}>
        {title}
      </div>
    </div>
  );
};

export default Logo;
