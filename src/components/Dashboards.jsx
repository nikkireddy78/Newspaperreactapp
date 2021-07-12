import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, Button } from "reactstrap";
const App = () => {

    let data = localStorage.getItem('customer');
    data = JSON.parse(data);
    return (
        <div>
            <Navbar color="faded" light expand="md">
                <NavbarToggler />
                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/Logout"><Button>Logout</Button></Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <p>Logged as : {data.email}</p>

            <Link to="/customer-advertisement"><button type="button" class="btn btn-primary">Apply for Advertisement</button></Link>
        </div>

    );
};
export default App;


