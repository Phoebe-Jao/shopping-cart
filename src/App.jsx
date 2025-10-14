import Layout from "./components/Layout"
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  )
}

export default App
