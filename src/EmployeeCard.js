import React from 'react';

const EmployeeCard = (props) => {
  const { employeeDetails } = props;
  const { id, employee_name, employee_salary, employee_age } = employeeDetails;

  return (
    <div key={id} className="card">
      <div className="card__data"><div>Name: </div><div>{employee_name}</div></div>
      <div className="card__data"><div>Salary: </div><div>{employee_salary}</div></div>
      <div className="card__data"><div>Age: </div><div>{employee_age}</div></div>
    </div>
  );
};

export default EmployeeCard;
