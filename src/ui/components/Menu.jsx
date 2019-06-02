import React from 'react';
import * as dataService from '../../Core/dataService';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    state = { menuItems: [] }

    componentDidMount() {
        dataService.get('/menu.json')
            .then((res) => this.setState({ menuItems: res.data }))
            .catch((err) => console.log('Error', err));
    }
    render() {
        return (
            <ul className="navbar-nav mr-auto">
                {
                    this.state.menuItems.map(
                        (menu) =>
                            <li className="nav-item" key={menu.menuText}>
                                <Link className="nav-link" to={menu.menuLink}>
                                    {menu.menuText}
                                </Link>
                            </li>
                    )
                }
            </ul>
        );
    }
}

export default Menu;