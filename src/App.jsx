import './App.css'; 
import './assets/components/NavbarComp.css';
import './assets/components/WelcomeSectionComp.css';
import Navbar from './assets/components/NavbarComp'; 
import WelcomeSection from './assets/components/WelcomeSectionComp'; 

const App = () => {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
    </div>
  );
};

export default App;
