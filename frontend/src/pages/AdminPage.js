import React from 'react';
import '../style/admin.css';

const AdminPage = () => {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'admin' },
    ];

    const investments = [
        { id: 1, user: 'John Doe', plan: 'Basic', amount: 1000, status: 'Active' },
        { id: 2, user: 'Jane Smith', plan: 'Pro', amount: 5000, status: 'Active' },
    ];

    return (
        <div className="admin-page">
            <div className="container">
                <h2>Admin Panel</h2>

                <div className="admin-section">
                    <h3>Manage Users</h3>
                    <table className="user-list">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">Edit</button>
                                        <button className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="admin-section">
                    <h3>Manage Investments</h3>
                    <table className="investment-list">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User</th>
                                <th>Plan</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {investments.map(investment => (
                                <tr key={investment.id}>
                                    <td>{investment.id}</td>
                                    <td>{investment.user}</td>
                                    <td>{investment.plan}</td>
                                    <td>${investment.amount}</td>
                                    <td>{investment.status}</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">Edit</button>
                                        <button className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;