import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import '../css/login.css';
import Navbar from './Navbars/LoginNavbar';
export default class StaffLogin extends Component {
    customerData;

    constructor(props) {

        super(props);

        this.state = {

            email: '',

            password: '',
            role: '',

            errors: {}

        }


        this.handleChangeEmail = this.handleChangeEmail.bind(this);

        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeRole = this.handleChangeRole.bind(this);

        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    }

    handleChangeEmail(e) {

        this.setState({ email: e.target.value });

    }

    handleChangePassword(e) {

        this.setState({ password: e.target.value });

    }
    handleChangeRole(e) {

        this.setState({ role: e.target.value });

    }


    submituserRegistrationForm(e) {

        e.preventDefault();
        localStorage.setItem('staff', JSON.stringify(this.state));


        if (this.validateForm()) {

            console.log(this.state);

            var apiBaseUrl = "http://ec2-52-206-64-28.compute-1.amazonaws.com:8081/springfox/api/staffLogin/login";

            var data = {

                "email": this.state.email,

                "password": this.state.password,
                "role": this.state.role

            }

            var headers = {

                'Content-Type': 'application/json',

            }

            console.log(data);

            axios.post(apiBaseUrl, data, { headers: headers }).then(function (response) {
                console.log(response);
                if (data.role === "ADMIN") {
                    window.location = "/admin-dashboard";
                }
                else if (data.role === "OPERATION") {
                    window.location = "/ops-dashboard";
                }
                if (response.data.success) {
                    console.log("Login successfull");

                } else {

                    alert("success");

                }

            }).catch(function (error) {

                console.log(error);

            });

        }

    }


    validateForm() {

        let errors = {};

        let formIsValid = true;

        if (!this.state.email) {

            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";

        }

        if (typeof this.state.email !== "undefined") {

            //regular expression for email validation

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            if (!pattern.test(this.state.email)) {

                formIsValid = false;

                errors["email"] = "*Please enter valid email-ID.";

            }

        }

        if (!this.state.password) {

            formIsValid = false;

            errors["password"] = "*Please enter your password.";

        }

        if (typeof this.state.password !== "undefined") {

            if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {

                formIsValid = false;

                errors["password"] = "*Please enter valid password.";

            }

        }

        this.setState({

            errors: errors

        });

        return formIsValid;

    }
    componentDidMount() {

        window.scrollTo(0, 0)
        this.customerData = JSON.parse(localStorage.getItem('staff'));
        if (localStorage.getItem('staff')) {
            this.setState({
                email: this.customerData.email,
                password: this.customerData.password

            })
        } else {
            this.setState({
                email: '',
                password: ''
            })

        }


    }

    render() {


        return (


            <div>
                <Navbar />
                <div className="container" data-test="staffLogin">

                    <div className="row" data-test="email">

                        <div className="col-md-4 login-sec">

                            <h2 className="text-center">Staff Login</h2>

                            <Form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >

                                <FormGroup>

                                    <Input type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.handleChangeEmail} placeholder="&#xf0e0; Email Id" />

                                    <div className="errorMsg">{this.state.errors.email}</div>

                                </FormGroup>

                                <FormGroup>

                                    <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.handleChangePassword} placeholder="&#xf084; Password" />

                                    <div className="errorMsg">{this.state.errors.password}</div>

                                </FormGroup>
                                <FormGroup>
                                    <Label for="role">Role</Label>
                                    <select name="role" className="form-control" value={this.state.role} onChange={this.handleChangeRole}  >
                                        <option>Select Role</option>
                                        <option >ADMIN</option>
                                        <option>OPERATION</option>
                                    </select>



                                </FormGroup>
                                <div className="d-flex justify-content-center mt-3 login_container">

                                    <Button type="submit" className="btn btn-login">Login</Button>

                                </div>
                                <div className="d-flex justify-content-center links">
 
                                        <a href="/staff-forget-password" className="linka">Forgot your password?</a>
 
                                    </div>


                            </Form>

                        </div>

                        <div className="col-md-8 banner-sec"></div>

                    </div>

                </div>

            </div>

        )

    }

}