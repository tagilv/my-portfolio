import Intro from "./component/intro/Intro";
import About from "./component/about/About";
import ProductList from "./component/productList/ProductList"

const App = () => {
  return (
    <div>
      <Intro/>
      <About />
      <ProductList />
    </div>
    )
};

export default App;
