import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import edit and trash icons
import '../styles/Employee.css';

const EmployeeList = ({ employees, handleEdit, handleDelete }) => {
    return (
        <div className="employee-list">
            <h2>Employee Listing</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.designation}</td>
                            <td>{emp.department}</td>
                            <td>{emp.age}</td>
                            <td>
                                {/* Edit button with edit icon */}
                                <button onClick={() => handleEdit(emp.id)}>
                                    <FaEdit />
                                    Edit
                                </button>
                                {/* Delete button with trash icon */}
                                <button onClick={() => handleDelete(emp.id)}>
                                    <FaTrash />
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
