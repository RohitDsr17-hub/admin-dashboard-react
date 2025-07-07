import axios from 'axios';

const API_BASE = 'http://localhost:3001';

export const getUsers = () => axios.get(`${API_BASE}/users`);
export const addUser = (user) => axios.post(`${API_BASE}/users`, user);
export const updateUser = (id, user) => axios.put(`${API_BASE}/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_BASE}/users/${id}`);


// PRODUCTS
export const getProducts = () => axios.get(`${API_BASE}/products`);
export const addProduct = (product) => axios.post(`${API_BASE}/products`, product);
export const updateProduct = (id, product) => axios.put(`${API_BASE}/products/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${API_BASE}/products/${id}`);
