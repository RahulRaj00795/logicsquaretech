import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';
const Dashboard = ({ employees }) => {
    const [totalEmployees, setTotalEmployees] = useState(0);
    const [availableEmployees, setAvailableEmployees] = useState(0);

    useEffect(() => {
        setTotalEmployees(employees.length);
        setAvailableEmployees(employees.filter(emp => emp.available).length);
    }, [employees]);

    return (
        <div className="dashboard">
            <div className="overview">
                <h2>Dashboard Overview</h2>
                <div>
                    <p>Total Employees: {totalEmployees}</p>
                    <p>Available Employees: {availableEmployees}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
