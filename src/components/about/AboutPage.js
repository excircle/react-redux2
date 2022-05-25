import React from "react";
import { Link } from "react-router-dom";

const baseUrl = process.env.REACT_APP_API_URL;
console.log(baseUrl);

class AboutPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>About</h2>
                <p>This app uses React.</p>
                <Link to="/">Home Page</Link>
            </React.Fragment>
        )
    }
}

export default AboutPage;