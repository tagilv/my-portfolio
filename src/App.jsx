import Intro from "./component/intro/Intro";
import About from "./component/about/About";
import ProductList from "./component/productList/ProductList"
import Contact from "./component/contact/Contact"

const App = () => {
  return (
    <div>
      <Intro/>
      <About />
      <ProductList />
      <Contact />
    </div>
    )
};

export default App;
