import pic from "./assets/unnamed.png";

function Hero() {
  return (
    <div className="hero" id="work">
      <p className="heroText">
        I'm transitioning to a career as a front-end developer after years in
        the world of books, both as copy editor and in a hands-on role in
        libraries. My meticulous attention to detail cultivated through copy
        editing now combines with my passion for creating seamless digital
        experiences. My time in library services has cultivated a true knack for
        understanding users' needs, and I'm excited to translate these skills
        into crafting intuitive and visually engaging web interfaces.
      </p>

      <img src={pic} />
    </div>
  );
}

export default Hero;
