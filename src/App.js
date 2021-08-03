import logo from './logo.png';
import classes from'./App.module.scss';
import SalaryComponent from './components/salary_calculator/SalaryComponent';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes['App-header']}>
        <img 
          src={logo} 
          className={classes["App-logo"]} 
          alt="logo" 
        />
        <p>Accounting Calculator</p>
      </header>
      <SalaryComponent />
    </div>
  );
}

export default App;
