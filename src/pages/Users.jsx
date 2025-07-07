// src/pages/Users.jsx
import { useEffect, useState } from 'react';
import { getUsers, addUser, deleteUser, updateUser } from '../services/api';
import { toast } from 'react-toastify';
import UserFormModal from '../components/UserFormModal';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', role: '' });
    const [editId, setEditId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const loadUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
        toast.error("User deleted.");
        loadUsers();
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleSubmit = async () => {
        if (editId) {
            await updateUser(editId, formData);
            toast.success("User updated!");
        } else {
            await addUser(formData);
            toast.success("User added!");
        }
        setFormData({ name: '', email: '', role: '' });
        setEditId(null);
        loadUsers();
    };


    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <button
                onClick={() => {
                    setShowModal(true);
                    setFormData({ name: '', email: '', role: '' });
                    setEditId(null);
                }}
                className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
            >
                Add User
            </button>


            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">Email</th>
                        <th className="p-2 border">Role</th>
                        <th className="p-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className="hover:bg-gray-100">
                            <td className="p-2 border">{user.id}</td>
                            <td className="p-2 border">{user.name}</td>
                            <td className="p-2 border">{user.email}</td>
                            <td className="p-2 border">{user.role}</td>
                            <td className="p-2 border space-x-2">
                                <button
                                    className="text-blue-600"
                                    onClick={() => {
                                        setFormData({ name: user.name, email: user.email, role: user.role });
                                        setEditId(user.id);
                                        setShowModal(true);
                                    }}
                                >
                                    Edit
                                </button>

                                <button className="text-red-600" onClick={() => handleDelete(user.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <UserFormModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleSubmit}
                isEdit={!!editId}
            />
        </div>
    );
}
