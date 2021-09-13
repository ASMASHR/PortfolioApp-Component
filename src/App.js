
import './App.css';
import ProfilePhoto from "./components/profile/ProfilePhoto.js"
import FullName from "./components/profile/FullName.js"
import Adress from "./components/profile/Adress.js"
import NavBar from "./components/profile/navbar.js"
function App() {
  return (
    <div className="App">
        <NavBar/>
        <div className="Profile">
          <ProfilePhoto/>
          <div className="Informations"> 
            <FullName/>
            <Adress/>
          </div>
        </div>
          
    </div>
  );
}

export default App;
