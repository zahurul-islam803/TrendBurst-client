import axiosSecure from './index'
// get all product data
export const getAllProduct = async (category) => {
  const { data } = await axiosSecure.get(`/products?category=${category}`);
  return data;
};