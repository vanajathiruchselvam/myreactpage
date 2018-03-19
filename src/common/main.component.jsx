import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Tasty Cakes</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                                <li><Link to="/" activeclassname="active">Home</Link></li>
                                <li><Link to="/cakes" activeclassname="active">Cakes</Link></li>
                                <li><Link to="/about" activeclassname="active">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main
