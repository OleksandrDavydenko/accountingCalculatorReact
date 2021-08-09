import { BrowserRouter, Route } from 'react-router-dom';
import classes from'./App.module.scss';
import  { Salary } from './components/salary_calculator/Salary';
import { ValueAddedTax } from './components/vat_calculator/ValueAddedTax';
import { Header } from './components/header/Header'
import { Menu } from './components/menu/Menu'

function App() {
  return (
     <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <section>
          <Menu />
          <Route exact path='/' component={Salary}/>
          <Route exact path='/VAT' component={ValueAddedTax}/>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
