import PropTypes from "prop-types";
const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <figure>
        <img
          src={product.product_img}
          alt="product"
          className="max-w-[300px] h-[400px]"
        />
      </figure>
      <div className="space-y-2 mt-4 text-left ml-14 lg:ml-0 md:ml-8">
        <h2 className="card-title">{product.product_name}</h2>
        <p>({product.review} review)</p>
        <p>$ {product.price}</p>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object,
};
export default ProductCard;
