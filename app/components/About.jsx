var React = require('react');

var About = (props) => {
    return (
        <div>
         <h1 className="text-center">About Me</h1>
         <p>This is a weather application built with React JS.</p>
         <p>The Git Repo can be found at :  
            <a href="https://github.com/soumyajitz/ReactWeatherApp">React Weather App</a>
         </p>
         <p>Tools used to create this app are :</p>
         <ol>
            <li>
                React - Javascript Single Page Framework
            </li>
             <li>
                Open Weather Map API
            </li>
             <li>
                Node JS
            </li>
             <li>
                Webpack
            </li>
             <li>
                Heroku to deploy
            </li>
         </ol>
        </div>
    )
};

module.exports = About;