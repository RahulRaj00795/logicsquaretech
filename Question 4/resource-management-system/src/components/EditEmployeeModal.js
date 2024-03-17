import React, { useState } from 'react';

const EditEmployeeModal = ({ employee, handleEdit, handleClose }) => {
    const [name, setName] = useState(employee.name);
    const [designation, setDesignation] = useState(employee.designation);
    const [department, setDepartment] = useState(employee.department);
    const [age, setAge] = useState(employee.age);

    const handleSubmit = () => {
        if (!name || !designation || !department || !age) {
            alert('Please fill all fields');
            return;
        }

        if (isNaN(age)) {
            alert('Age must be a number');
            return;
        }

        const updatedEmployee = { ...employee, name, designation, department, age: parseInt(age) };
        handleEdit(updatedEmployee);
        handleClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <h2>Edit Employee</h2>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Designation" value={designation} onChange={e => setDesignation(e.target.value)} />
                <input type="text" placeholder="Department" value={department} onChange={e => setDepartment(e.target.value)} />
                <input type="text" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
                <button onClick={handleSubmit}>Save</button>
            </div>
        </div>
    );
};

export default EditEmployeeModal;
