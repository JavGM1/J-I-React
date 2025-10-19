import { useState } from 'react'
import Carrusel from './components/Carrusel'
import AppNavbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import { db, type Product } from './data/db'
import { useProductSearch } from './hooks/useProductSearch'
import './App.css'

function App() {
  const [cart, setCart] = useState<Product[]>([])
  const { filtered } = useProductSearch(db)

  function addToCart(product: Product) {
    // Lógica simple por ahora; puedes implementar useCart hook después
    const itemExists = cart.findIndex(item => item.id === product.id)
    if (itemExists >= 0) {
      const updatedCart = [...cart]
      updatedCart[itemExists] = { ...updatedCart[itemExists] }
      setCart(updatedCart)
    } else {
      setCart([...cart, product])
    }
    console.log('Producto agregado:', product.name)
  }

  return (
    <>
      <AppNavbar />
      <Carrusel />
      
      {/* Grid de productos */}
      <div className="container my-5">
        <h2 className="mb-4 text-center">En tendencia</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {filtered.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
