import {useQuery} from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import ProductCard from "./ProductCard";
import { getAllProduct } from "../../Api/product";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Products = () => {
  const loading = false;
  const [category, setCategory] = useState('');
  const [tabIndex, setTabIndex] = useState(0);
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", category],
    enabled: !loading,
    queryFn: async() => await getAllProduct(category),
  });

  if (isLoading) {
    return <h1>loading</h1>;
  }
  if (isError) {
    return console.log(isError, error);
  }
  return (
    <div className="px-2">
      <Helmet>
        <title>TrendBurst - Products</title>
      </Helmet>
      <h1 className="mt-24 text-rose-500 text-center text-6xl font-extrabold">
        products
      </h1>
      <p className="text-center text-2xl mb-8 text-rose-400">
        --------------------------------------
      </p>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab onClick={() => setCategory("")}>All</Tab>
          <Tab onClick={() => setCategory("men")}>Men</Tab>
          <Tab onClick={() => setCategory("woman")}>Woman</Tab>
          <Tab onClick={() => setCategory("kids")}>Kids</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto p-2 mt-4">
            {products?.map((product, index) => (
              <ProductCard key={index} product={product}></ProductCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto p-2 mt-4">
            {products?.map((product, index) => (
              <ProductCard key={index} product={product}></ProductCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto p-2 mt-4">
            {products?.map((product, index) => (
              <ProductCard key={index} product={product}></ProductCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto p-2 mt-4">
            {products?.map((product, index) => (
              <ProductCard key={index} product={product}></ProductCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Products;
