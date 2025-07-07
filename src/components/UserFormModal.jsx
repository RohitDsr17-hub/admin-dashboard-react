// src/components/UserFormModal.jsx
export default function UserFormModal({ isOpen, onClose, formData, setFormData, onSubmit, isEdit }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow p-6 w-full max-w-md relative">
          <h2 className="text-xl font-bold mb-4">{isEdit ? 'Edit User' : 'Add User'}</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
              onClose();
            }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
  
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                {isEdit ? 'Update' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  