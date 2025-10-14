import Cart from "./components/Cart"
import Grid from "./components/Grid"

function App() {
  return (
    <main className="min-h-screen h-full max-xl:px-6 font-display bg-gradient-to-b from-custom-rose-50 to-custom-rose-300">
      <div className="wrapper flex max-sm:flex-col gap-4 max-w-[76rem] py-[5.5rem] mx-auto">
        <div className="container bg-white rounded rounded-small p-4">
          <h1 className="text-[2.5rem] text-custom-rose-900 font-bold leading-[1.2] mb-8">Desserts</h1>
          <Grid />
        </div>
        <Cart />
      </div>
    </main>
  )
}

export default App
