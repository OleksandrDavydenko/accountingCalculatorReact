import { BrowserRouter } from 'react-router-dom';
import classes from'./App.module.scss';
import { Header } from './components/header/Header'
import { Menu } from './components/menu/Menu'
import { AppRouter } from './components/AppRouter';

function App() {
  return (
     <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <section>
          <Menu />
          <main>
            <AppRouter/>
          </main>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
