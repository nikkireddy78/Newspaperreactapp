import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import DashBoard from './components/Dashboard';
import Register from './components/Register';
import Logout from './components/Logout';
import './App.css';
import Home from './pages/Home';
import Electronic from './components/Electronic';
import Restaurant from './components/Restaurant';
import Hotel from './components/Hotel';
import Jobs from './components/Jobs';
import ContactUs from './pages/ContactUs';
import LoginInitial from './components/LoginInitial';
import StaffLogin from './components/StaffLogin';
import AdminDashboard from './components/AdminDashboard';
import CreateAdvertisementComponent from './components/CreateAdvertisement';
import UploadImage from './components/UploadImage';
import ChangePassword from './components/ChangePassword';
import ListAdvertisementComponent from './components/ListAdvertisement';
import ShowAdvertisements from './components/ShowAdvertisements';
import IsPosted from './components/IsPosted';
import Clothing from './components/Clothing';
import UnPosted from './components/UnPosted';
import ForgetPassword from './components/ForgetPassword';
import StaffForgetPassword from './components/StaffForgetPassword';
import CreateFeedbackComponent from './components/AddFeedback';
import Viewfeedback from './components/ViewFeedback';

class App extends React.Component {
    render() {
        return (
            <Router>

                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/electronic' component={Electronic} />
                    <Route path='/restaurant' component={Restaurant} />
                    <Route path='/hotel' component={Hotel} />
                    <Route path='/jobs' component={Jobs} />
                    <Route path='/home' component={Home} />
                    <Route path='/contactUs' component={ContactUs} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Dashboard" component={DashBoard} />
                    <Route path="/Register" component={Register} />
                    <Route path="/Logout" component={Logout} />
                    <Route path='/sign-up' component={LoginInitial} />
                    <Route path="/staff-login" component={StaffLogin} />
                    <Route path="/admin-dashboard" component={AdminDashboard} />
                    <Route path="/add-advertisement" component={CreateAdvertisementComponent} />
                    <Route path="/upload-image" component={UploadImage} />
                    <Route path="/change-password" component={ChangePassword} />
                    <Route path="/list-advertisement" component={ListAdvertisementComponent} />
                    <Route path="/show-advertisements" component={ShowAdvertisements} />
                    <Route path="/is-posted" component={IsPosted} />
                    <Route path="/clothing" component={Clothing} />
                    <Route path="/not-posted" component={UnPosted} />
                    <Route path='/forget-password' component={ForgetPassword}/>
                    <Route path="/staff-forget-password" component={StaffForgetPassword}></Route>
                    <Route path="/add-feedback" component={CreateFeedbackComponent}/>
                    <Route path="/view-feedback" component={Viewfeedback} />
                </Switch>
            </Router>
            
        );

    }

}
export default App;
