import React from 'react';
import '../styles/confirm.css';

const ConfirmDeleteModal = ({ employee, handleDelete, handleClose }) => {
    const handleConfirmDelete = () => {
        handleDelete(employee.id);
        handleClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <h2>Confirm Delete</h2>
                <p>Are you sure you want to delete {employee.name}?</p>
                <button onClick={handleConfirmDelete}>Confirm</button>
                <button onClick={handleClose}>Cancel</button>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;
