
import './App.css';
import Address from "./component/Address"
import FullName from "./component/FullName"
import ProfilePhoto from "./component/ProfilePhoto"

function App() {
  return (
    <div className="App">
     
      <div class="card">
      <ProfilePhoto />
  <div class="card-body">
    <FullName />
    <Address />
    <a href="#!" class="btn btn-primary">Button</a>
  </div>
</div>
    
  
      
    </div>
  );
}

export default App;
