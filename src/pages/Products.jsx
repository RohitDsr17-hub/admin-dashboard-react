import { useEffect, useState } from 'react';
import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct
} from '../services/api';
import ProductFormModal from '../components/ProductFormModal';
import { toast } from 'react-toastify';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', price: '', category: '' });
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const loadProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  const handleSubmit = async () => {
    if (editId) {
      await updateProduct(editId, formData);
      toast.success('Product updated');
    } else {
      await addProduct(formData);
      toast.success('Product added');
    }
    setEditId(null);
    setFormData({ name: '', price: '', category: '' });
    loadProducts();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    toast.error('Product deleted');
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      <button
        onClick={() => {
          setShowModal(true);
          setFormData({ name: '', price: '', category: '' });
          setEditId(null);
        }}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Product
      </button>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="hover:bg-gray-100">
              <td className="p-2 border">{p.id}</td>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">${p.price}</td>
              <td className="p-2 border">{p.category}</td>
              <td className="p-2 border space-x-2">
                <button
                  className="text-blue-600"
                  onClick={() => {
                    setFormData({
                      name: p.name,
                      price: p.price,
                      category: p.category
                    });
                    setEditId(p.id);
                    setShowModal(true);
                  }}
                >
                  Edit
                </button>
                <button className="text-red-600" onClick={() => handleDelete(p.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ProductFormModal
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
