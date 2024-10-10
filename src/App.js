import React from "react"  ;
import './App.css';


const App = () => {
  const handleProject1Click = () => {
    alert("The smart battery used in Taqanal Energy's Intelligent Energy Storage Management System enables efficient energy usage and accurate range prediction for electric vehicles. It integrates embedded intelligence with cloud applications to monitor battery health in real-time and provide proactive maintenance alerts. This system helps reduce downtime, optimize charging, and extend battery life by ensuring better energy management and performance analytics, making it a key component for transitioning away from fossil fuels.");
  };

  const handleProject2Click = () => {
    alert("Battery swapping is a technology that allows electric vehicle (EV) owners to quickly replace a depleted battery with a fully charged one at designated swapping stations. Instead of waiting for the battery to recharge, users can exchange it in minutes, significantly reducing downtime. This system eliminates range anxiety by ensuring that a fresh battery is always available, optimizes charging conditions in a controlled environment, and extends the life of EVs by enabling consistent battery management.");
  };

  const handleProject3Click = () => {
    alert("Fuel replacement refers to the shift from traditional fossil fuels (like gasoline and diesel) to cleaner and more sustainable energy sources such as electricity, hydrogen, or biofuels for powering vehicles. This transition reduces carbon emissions, improves air quality, and lowers dependency on non-renewable resources. Electric vehicles (EVs) and hydrogen fuel cell vehicles are key technologies driving this change, offering lower operating costs and environmental benefits. Fuel replacement is crucial for achieving long-term energy sustainability and supporting global efforts to combat climate change.");
  };

  const handleDateSubmit = (e) => {
    e.preventDefault();
    alert("Correct");
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  };

  return (
    <div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <header className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
          <div style={{ backgroundColor: "wheat" }}>
            <img src="./taqanal_img.png" width="160" height="50" alt="Taqanal Energy" />
          </div>
        </a>
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <form onSubmit={handleDateSubmit}>
            <label htmlFor="date" style={{ color: "ghostwhite" }}>Choose a date:</label>
            <input type="date" id="date" name="date" />
            <input className="datee" type="submit" />
          </form>
        </nav>
      </header>

      <div className="pricing-header p-3 pb-md-4 mx-auto text-center text-white">
        <h1 className="display-4 fw-normal"><b><u>Taqanal Energy</u></b></h1>
        <p className="fs-5">Taqanal Energy is powering the shift from fossil fuels and internal combustion engines through its Intelligent Energy Storage Management System which integrates the power of embedded intelligence in the battery with cloud applications.</p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <ProjectCard
          title="Project 1"
          description="Smart Battery"
          details={[
            "Accurate Range Prediction",
            "Efficient Energy Management",
            "Proactive Maintenance Alerts",
            "Battery Health Monitoring"
          ]}
          onClick={handleProject1Click}
        />
        <ProjectCard
          title="Project 2"
          description="Battery Swapping"
          details={[
            "Reduced Downtime",
            "Extended Vehicle Life",
            "No Range Anxiety",
            "Optimized Charging Conditions"
          ]}
          onClick={handleProject2Click}
        />
        <ProjectCard
          title="Project 3"
          description="Fuel Replacement"
          details={[
            "Energy Independence",
            "Economic Savings",
            "Sustainability",
            "Health Improvements"
          ]}
          onClick={handleProject3Click}
        />
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, details, onClick }) => (
  <div className="col">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <div className="card mb-4 rounded-3 shadow-sm border-primary">
      <div className="card-header py-3 text-bg-primary border-primary">
        <h4 className="my-0 fw-normal">{title}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">{description}</h1>
        <ul className="list-unstyled mt-3 mb-4">
          {details.map((detail, index) => <li key={index}>{detail}</li>)}
        </ul>
        <button type="button" className="w-100 btn btn-lg btn-primary" onClick={onClick}>Know About It</button>
      </div>
    </div>
  </div>
);

export default App;
