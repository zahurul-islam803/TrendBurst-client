import axiosSecure from './index'
// get all product data
export const getAllProduct = async () => {
  const { data } = await axiosSecure.get(`/products`);
  return data;
};