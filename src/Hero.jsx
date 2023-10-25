import pic from "./assets/unnamed.png";
import avatar from "./assets/avatar.webp";

function Hero() {
  return (
    <div className="hero" id="work">
      <p className="heroText">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos incidunt,
        corporis qui eum facilis corrupti ad consequatur ea autem repudiandae
        eius accusantium quia facere maiores molestias at nam, esse
        necessitatibus!
      </p>

      <img src={pic} />
    </div>
  );
}

export default Hero;
