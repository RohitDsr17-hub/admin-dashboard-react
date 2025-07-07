// src/components/ProductFormModal.jsx
export default function ProductFormModal({ isOpen, onClose, formData, setFormData, onSubmit, isEdit }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow p-6 w-full max-w-md relative">
          <h2 className="text-xl font-bold mb-4">{isEdit ? 'Edit Product' : 'Add Product'}</h2>
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
              placeholder="Product Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
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
  