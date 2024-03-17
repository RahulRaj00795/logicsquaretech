import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard.js';
import EmployeeList from './components/EmployeeList.js';
import AddEmployeeModal from './components/AddEmployeeModal.js';
import EditEmployeeModal from './components/EditEmployeeModal.js';
import ConfirmDeleteModal from './components/ConfirmDeleteModal.js';

const ResourceManagementSystem = () => {
    const [employees, setEmployees] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        // Load employees from local storage or any other source
        const savedEmployees = JSON.parse(localStorage.getItem('employees'));
        if (savedEmployees) {
            setEmployees(savedEmployees);
        }
    }, []);

    useEffect(() => {
        // Save employees to local storage
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    const handleAddEmployee = (newEmployee) => {
        setEmployees([...employees, newEmployee]);
    };

    const handleEditEmployee = (updatedEmployee) => {
        const updatedEmployees = employees.map(emp => (emp.id === updatedEmployee.id ? updatedEmployee : emp));
        setEmployees(updatedEmployees);
    };

    const handleDeleteEmployee = (employeeId) => {
        const updatedEmployees = employees.filter(emp => emp.id !== employeeId);
        setEmployees(updatedEmployees);
    };

    const handleEditClick = (employeeId) => {
        const employeeToEdit = employees.find(emp => emp.id === employeeId);
        setSelectedEmployee(employeeToEdit);
        setShowEditModal(true);
    };

    const handleDeleteClick = (employeeId) => {
        const employeeToDelete = employees.find(emp => emp.id === employeeId);
        setSelectedEmployee(employeeToDelete);
        setShowDeleteModal(true);
    };

    return (
        <div className="resource-management-system">
            <Dashboard employees={employees} />
            <EmployeeList
                employees={employees}
                handleEdit={handleEditClick}
                handleDelete={handleDeleteClick}
            />
            {showAddModal && (
                <AddEmployeeModal
                    handleAdd={handleAddEmployee}
                    handleClose={() => setShowAddModal(false)}
                />
            )}
            {showEditModal && (
                <EditEmployeeModal
                    employee={selectedEmployee}
                    handleEdit={handleEditEmployee}
                    handleClose={() => setShowEditModal(false)}
                />
            )}
            {showDeleteModal && (
                <ConfirmDeleteModal
                    employee={selectedEmployee}
                    handleDelete={handleDeleteEmployee}
                    handleClose={() => setShowDeleteModal(false)}
                />
            )}
            <button onClick={() => setShowAddModal(true)}>Add Employee</button>
        </div>
    );
};

export default ResourceManagementSystem;
