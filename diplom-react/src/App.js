import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import MainTitle from './components/MainTitle'
import MainInfo1 from './components/MainInfo1'
import MainServices from './components/MainServices'
import AboutWork from './components/AboutWork';
import ProfitWork from './components/ProfitWork';
import ImplementedProject from './components/ImplementedProject';
import ApplicationForm from './components/ApplicationForm';

function App() {
  return (
    <>
      <MainTitle />
      <MainInfo1 />
      <MainServices />
      <AboutWork />
      <ProfitWork />
      <ImplementedProject />
      <ApplicationForm /> {/**/}
    </>
  );
}

export default App;
