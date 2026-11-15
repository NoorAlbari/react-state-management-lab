import { useState } from 'react'
import './App.css'

function App() {
  const availableItems = [
    {
      id: 1,
      name: "Black T shirt",
      price: 5,
      
    },
    {
      id: 2,
      name: "Hanger Set",
      price: 8, 
     
    },
    {
      id: 3,
      name: "Thoub",
      price: 12,
      
    },
    {
      id: 4,
      name: "Computer Bag",
      price: 20,
     
    },
    {
      id: 5,
      name: "Couch",
      price: 50,
      
    },
    {
      id: 6,
      name: "Gaming Chair",
      price: 70,
      
    }
  ]


    const [availableBalance , setAvailableBalance ] = useState(100)
    const [shoppingCart, setShoppingCart] = useState([])
    


    function handleAddToCart(clickedItem) {
      console.log('clicked on ', clickedItem)
      if (availableBalance < clickedItem.price) {
        alert("Insufficient funds. Your balance is too low to purchase this item.")
        return
      }

      if (shoppingCart.some(item => item.id === clickedItem.id)) {
        alert("Item already in cart. You cannot add the same item twice.")
        return
      }
      
      const updatedCart = [...shoppingCart, clickedItem]
      setShoppingCart(updatedCart)

      const updatedBalance = availableBalance - clickedItem.price
      setAvailableBalance(updatedBalance)

      

    }

    function handleRemoveFromCart(clickedItem) {
      console.log('clicked on ', clickedItem)

      const updatedCart = shoppingCart.filter(item => item.id !== clickedItem.id)
      setShoppingCart(updatedCart)

      const updatedBalance = availableBalance + clickedItem.price
      setAvailableBalance(updatedBalance)

    }


  return (
    <>
      <h1>Zaid's Closet</h1>

      <h2>Your Balance: {availableBalance}</h2>

      <h2>Available Items</h2>
      {availableItems.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
          <button onClick={() => { handleAddToCart(item) }}> add to cart</button> 
        </div>

      ))}

      <h2>Shopping Cart</h2>
       {shoppingCart.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
          <button onClick={() => { handleRemoveFromCart(item) }}>Remove from Cart</button>
        </div>

      ))}

    </>
  )
}

export default App
