import './App.css';

import CompanySearchResults from './components/CompanySearchResults';
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSearch from './components/MainSearch';


function App() {
  return (
    <BrowserRouter>
    <Route path='/' exact component={MainSearch } />
        <Route path='/:companyName' component={CompanySearchResults} />
    </BrowserRouter>
  );
}

export default App;
