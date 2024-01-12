import { Helmet } from "react-helmet-async";
import { Country, State, City } from "country-state-city";
import useCart from "../../Hooks/useCart";
import { RxCross2 } from "react-icons/rx";
import Swal from 'sweetalert2'
import { deleteCart } from "../../Api/product";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../Shared/Loader";
import Selector from "../../Shared/Selector";
import { useEffect, useState } from "react";
const Cart = () => {
  const [refetch, cart] = useCart();
  const {loading} = useAuth();
  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();

  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState();
  const [city, setCity] = useState();

  useEffect(()=>{
    setStateData(State.getStatesOfCountry(country?.isoCode));
  },[country])

  useEffect(()=>{
    setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  },[state])

  useEffect(()=>{
    stateData && setState(stateData[0]);
  },[stateData])

  useEffect(()=>{
    cityData && setCity(cityData[0]);
  },[cityData])

  const handleDelete = (id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
  if (result.isConfirmed) {
    await deleteCart(id);
    refetch();
    Swal.fire({
      title: "Deleted!",
      text: "Your cart item has been deleted.",
      icon: "success"
    });
  }
});
  }
 
    return (
      <>
        <Helmet>
          <title>TrendBurst - Cart</title>
        </Helmet>
        <div className="bg-[#FCF6F6] py-28 mt-20">
          <h1 className="text-5xl text-center font-medium">Shop</h1>
        </div>
        {loading ? (
          <Loader></Loader>
        ) : (
          <div className="overflow-x-auto max-w-screen-xl mx-auto mt-10">
            <h1 className="text-2xl font-semibold my-4">Your Cart Items</h1>
            <table className="table border border-gray-200">
              {/* head */}
              <thead className="bg-gray-200">
                <tr className="lg:text-lg text-black font-semibold uppercase">
                  <th>Image</th>
                  <th>Product Name</th>
                  <th className="hidden md:block">Unit price</th>
                  <th>QTY</th>
                  <th>SubTotal</th>
                  <th className="hidden md:block">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cart?.map((cartData) => (
                  <tr key={cartData._id}>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle lg:w-20 w-14 lg:h-20 h-14">
                          <img
                            src={cartData.productImage}
                            alt="product image"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{cartData.productName}</td>
                    <td className="hidden md:block">
                      ${cartData.productPrice}
                    </td>
                    <td>1</td>
                    <td>${cartData.productPrice}</td>
                    <td className="hidden md:block">
                      <div className="cursor-pointer">
                        <RxCross2
                          onClick={() => handleDelete(cartData._id)}
                        ></RxCross2>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* shipping info */}
            <div className="mt-10 mb-80">
              <div className="bg-gray-200 p-4 space-y-6">
                <h1 className="text-black text-xl font-semibold">
                  Estimate Shipping And Tax
                </h1>
                <p>Enter your destination to get a shipping estimate.</p>
                <div>
                  <p className="text-black font-medium">Country*</p>
                  <Selector
                    data={countryData}
                    selected={country}
                    setSelected={setCountry}
                  ></Selector>
                </div>
                {state && (
                  <div>
                    <p className="text-black font-medium">State*</p>
                    <Selector
                      data={stateData}
                      selected={state}
                      setSelected={setState}
                    ></Selector>
                  </div>
                )}
                {city && (
                  <div>
                    <p className="text-black font-medium">City*</p>
                    <Selector
                      data={cityData}
                      selected={city}
                      setSelected={setCity}
                    ></Selector>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  
};

export default Cart;