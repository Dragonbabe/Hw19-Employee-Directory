import React from 'react';
import './App.css';
import DisplayedEmpInfo from './components/EmployeeTable';
import SearchBar from './components/SearchBar';
import FilterableEmpTable from './components/FilterableEmpTable';

function App() {
  return (
    <div className="App">
    <FilterableEmpTable/>
    </div>
  );
}

export default App;
