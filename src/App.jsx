import Intro from "./component/intro/Intro";
import About from "./component/about/About";
import ProductList from "./component/productList/ProductList"
import Contact from "./component/contact/Contact"
import Toggle from "./component/toggle/Toggle"

const App = () => {
  return (
    <div>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
    )
};

export default App;
