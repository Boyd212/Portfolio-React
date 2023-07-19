// import Card from "react-bootstrap/Card";
// import {Container,Col,Row} from 'react-bootstrap';
// import { Button } from "react-bootstrap";
import {
  recipesNow,
  weatherdashboard,
  weatherAPI,
  workdayplanner,
  resume,
  pubCrawl,
} from "../../assets/images";
import "./portfolio.css";

const Portfolio = () => {
  const projectsInfo = [
    {
      title: "Recipes Now",
      image: recipesNow,
      description:"Recipes Now enables the user to search for dishes by name, region of origin or ingredients. Links to text recipes and YouTube videos.",
      githuburl: "https://github.com/AvenP/recipe-search-app",
      deployurl: "https://avenp.github.io/recipe-search-app/",
    },
    {
      title: "Pub Crawler",
      image: pubCrawl,
      description:
        "Pub Crawler is a tool for users to search for local micro-breweries and create custom Pub Crawls.  The database was created from scratch by my team.",
      githuburl: "https://github.com/AvenP/Pub-Crawl",
      deployurl: "https://craft-crawler.herokuapp.com/",
    },
    {
      title: "Workday Scheduler",
      image: workdayplanner,
      description:
        "This application allows the user to schedule events throughout their workday.",
      githuburl: "https://github.com/Boyd212/Challenge5",
      deployurl: "https://boyd212.github.io/Challenge5/",
    },
    {
      title: "Weather Dashboard",
      image: weatherdashboard,
      description:
        "The application is a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.The server-side API used to get response data object is retrieved from the Open Weather API.User should be able to search for any city name which would display current weather conditions,the temperature, the humidity, the wind speed, the UV index and five days forecast of that particular city.We are storing the previously searched cities in Local Storage and persistently displaying the same cities on the webpage",
      githuburl: "https://github.com/Boyd212/WeatherApp",
      deployurl: "https://boyd212.github.io/WeatherApp/",
    },
    {
      title: "Weather API",
      image: weatherAPI,
      description:
        "The application is a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.The server-side API used to get response data object is retrieved from the Open Weather API.User should be able to search for any city name which would display current weather conditions,the temperature, the humidity, the wind speed, the UV index and five days forecast of that particular city.We are storing the previously searched cities in Local Storage and persistently displaying the same cities on the webpage",
      githuburl: "https://github.com/Boyd212/WeatherApp",
      deployurl: "https://boyd212.github.io/WeatherApp/",
    },
  ];
    return (
    <div className="container-1">
      <div className="grid">
        {projectsInfo.map((project, i) => {
          return (
            <a className="card-link" href={project.githuburl} target="_blank">
              <div key={i} className="card">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt="project image"
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{`${project.description.substring(
                    0,
                    70
                  )}...`}</p>
                  <div className="buttonContainer">
                  <a href={project.githuburl} className="gitAndLiveLink">
                    Github
                  </a>
                  <a href={project.deployurl} className="gitAndLiveLink">
                    Live
                  </a>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  ); 
};

export default Portfolio;
