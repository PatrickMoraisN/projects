import { useSelector, useDispatch } from "react-redux";
import products from "./products";

function App() {
  const productArr = useSelector((state) => state.ProductReducer.cartProducts);
  const total = useSelector((state) => state.ProductReducer.totalValue);
  const dispatch = useDispatch();

  const handle = (product) => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: {
        cartProducts: product,
        totalValue: product.price
      }
    })
  }

  return (
    <>
      <ul>
        {products.map((product) => (
          <li>
            {product.name} - R${product.price}
            <button onClick={() => handle(product)}>Adicionar ao carrinho</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Carrinho</h2>
        {productArr.map((product) => (
          <p>{product.name}</p>
        ))}
        {total !== 0 && <p>total R$: {total}</p>}
      </div>
    </>
  );
}

export default App;
