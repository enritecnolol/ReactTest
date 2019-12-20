import React, {Component} from 'react';
import logo from './Global/images/logo.svg';
import './Global/css/Header.css';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        items:PropTypes.array.isRequired
    };
    render() {
        const {title, items} = this.props;
        return (
            <div className="Header">
                <header className="Logo">
                    <img src={logo} alt="logo" />
                    <h2>{title}</h2>
                    <ul className="Menu">
                        {
                            items && items.map(
                                (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
                            )
                        }
                    </ul>
                </header>
            </div>
        );
    }
}

export default Header;
