import logo from '../assets/logoHotelApp_mini.png';
import '../style/App.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="Hotel App Logo" />
            <h1>HotelApp!</h1>
            <ul>
                <li>Home</li>
                <li>Bedrooms</li>
                <li>Reservations</li>
                <li>Login</li>
            </ul>
       </div>
    );
}
