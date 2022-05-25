import backgroundImg from '../assets/img/background.jpg';

const Landing = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right bottom,
      rgba(0, 0, 95, 0.6),
      rgba(0, 0, 0, 0.85)),
    url(${backgroundImg})`
      }}
      className='landing'
    >
      <div className='landing__text--box'>
        <h1 className='landing__text--main'>Email4Me</h1>
        <h3 className='landing__text--sub'>Collect feedback from your users</h3>
      </div>
    </div>
  );
};

export default Landing;
