import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

export function CoffeeCard({ coffee }) {
  const [quantity, setQuantity] = useState(1);
  const { addCoffeeToCart } = useContext(CartContext);

  function handleIncrease() {
    setQuantity(state => state + 1);
  }

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(state => state - 1);
    }
  }

  function handleAddToCart() {
    addCoffeeToCart(coffee, quantity);
  }

  return (
    <div style={{
      background: '#F3F2F2',
      borderRadius: '6px 36px 6px 36px',
      padding: '20px',
      width: '256px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      boxSizing: 'border-box'
    }}>
      <div style={{ width: '120px', height: '120px', background: '#E6E6E6', borderRadius: '50%', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>
        ☕
      </div>

      <span style={{
        background: '#F1E9C9',
        color: '#C47F17',
        fontSize: '10px',
        fontWeight: '700',
        padding: '4px 8px',
        borderRadius: '100px',
        textTransform: 'uppercase',
        marginBottom: '16px'
      }}>
        {coffee.tag}
      </span>

      <h3 style={{ fontSize: '20px', color: '#403937', marginBottom: '8px', fontWeight: '700', margin: '0 0 8px 0' }}>
        {coffee.name}
      </h3>
      
      <p style={{ fontSize: '14px', color: '#8D8686', marginBottom: '33px', lineHeight: '130%', margin: '0 0 33px 0' }}>
        {coffee.description}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ color: '#574F4D', fontSize: '14px' }}>
          R$ <span style={{ fontSize: '24px', fontWeight: '800' }}>{coffee.price}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            background: '#E6E5E5',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px',
            borderRadius: '6px'
          }}>
            <button onClick={handleDecrease} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#8047F8', fontWeight: 'bold', fontSize: '16px' }}>-</button>
            <span style={{ color: '#272221', fontWeight: 'bold' }}>{quantity}</span>
            <button onClick={handleIncrease} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#8047F8', fontWeight: 'bold', fontSize: '16px' }}>+</button>
          </div>

          <button 
            onClick={handleAddToCart} 
            style={{
              background: '#4B2995',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            🛒
          </button>
        </div>
      </div>
    </div>
  );
}