import React, { useState } from 'react';
import '../styles/AddEmployee.css';

const AddEmployeeModal = ({ handleAdd, handleClose }) => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [department, setDepartment] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = () => {
        if (!name || !designation || !department || !age) {
            alert('Please fill all fields');
            return;
        }

        if (isNaN(age)) {
            alert('Age must be a number');
            return;
        }

        const newEmployee = {
            id: Date.now().toString(),
            name,
            designation,
            department,
            age: parseInt(age),
            available: true,
        };

        handleAdd(newEmployee);
        handleClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <h2>Add Employee</h2>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Designation" value={designation} onChange={e => setDesignation(e.target.value)} />
                <input type="text" placeholder="Department" value={department} onChange={e => setDepartment(e.target.value)} />
                <input type="text" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
                <button onClick={handleSubmit}>Add</button>
            </div>
        </div>
    );
};

export default AddEmployeeModal;
