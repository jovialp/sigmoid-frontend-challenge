import React, { useState, useEffect } from 'react';
import './style.css';
import EmployeeCard from './EmployeeCard';

export default function App() {
  const [employeeList, setEmployeeList] = useState([]);
  const [currentEmployeeList, setCurrentEmployeeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getEmployeeList = () => {
    fetch('https://run.mocky.io/v3/17d21aac-bb1e-4908-9cb9-93c845fa6f58')
      .then((res) => res.json())
      .then((data) => {
        setEmployeeList(data.data);
        setCurrentEmployeeList(data.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (isLoading) {
      getEmployeeList();
    }
  }, [isLoading, employeeList.length]);

  const searchEmployee = (name) => {
    if (!name) {
      return setCurrentEmployeeList(employeeList);
    }

    const currentEmployeeList = [...employeeList].filter(
      (employee) =>
        employee.employee_name.toLowerCase().indexOf(name.toLowerCase()) >= 0
    );

    setCurrentEmployeeList(currentEmployeeList);
  };

  return (
    <div className="conatainer">
      <h3 className="pageTitle">EmployeeList</h3>
      <input
        type="text"
        placeholder="Serch Employee.."
        onChange={(e) => {
          return searchEmployee(e.target.value);
        }}
      ></input>
      <div className="cardWrapper">
        {currentEmployeeList.map((employee) => {
          return <EmployeeCard employeeDetails={employee} />;
        })}
      </div>
    </div>
  );
}
