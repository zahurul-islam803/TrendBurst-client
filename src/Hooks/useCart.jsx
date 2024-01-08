import axiosSecure from "../Api/index";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
const useCart = () => {
  const {user} = useAuth();
  const {refetch, data: cart = []} = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async ()=>{
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    }
  })
  return [refetch, cart]
};

export default useCart;