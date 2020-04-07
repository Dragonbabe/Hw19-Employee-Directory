import React from 'react';
import './App.css';
import DisplayedEmpInfo from './components/DisplayedEmpInfo';
import InfoCategoryRow from './components/InfoCategoryRow';
import InfoRow from './components/InfoRow';
import SearchBar from './components/SearchBar';
import FilterableEmpTable from './components/FilterableEmpTable';

const TOTALEMPINFO = [
 {
   name: 'Ingrid Bergman',
   email: 'hallucinations@irish.com',
   dob: "09/19/1984",
   employed: true
 },
 {
   name: "Hal Smith",
   email: "dude@dude.com",
   dob: "09/80/1984",
   employed: true
 },
 {
   name: "George Foreman",
   email: "george@yahoo.com",
   dob: "09/12/1984",
   employed: true
 }

];

function App() {
  return (
    <div className="App">
    <DisplayedEmpInfo/>
    <InfoCategoryRow/>
    <InfoRow/>
    <SearchBar/>
    <FilterableEmpTable totalEmpInfo={TOTALEMPINFO}/>
    
    </div>
  );
}

export default App;
