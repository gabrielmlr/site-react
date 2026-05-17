import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

export function Header() {
  const { cartQuantity } = useContext(CartContext);

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '32px 160px',
      background: '#FAFAFA',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      
      {/* Título Estilizado com o Novo Nome */}
      <Link to="/" style={{ 
        textDecoration: 'none', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px' 
      }}>
        <span style={{ fontSize: '32px' }}>☕</span>
        <h1 style={{ 
          fontFamily: "'Baloo 2', cursive", 
          fontSize: '24px', 
          fontWeight: 800,
          lineHeight: '130%',
          display: 'flex',
          gap: '6px',
          margin: 0
        }}>
          <span style={{ color: '#403937' }}>H8</span>
          <span style={{ color: '#8047F8' }}>Coffee</span>
        </h1>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{
          background: '#EBE5F9',
          color: '#4B2995',
          padding: '8px 12px',
          borderRadius: '6px',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontWeight: '500'
        }}>
          📍 São José dos Campos, SP
        </span>

        <Link to="/checkout" style={{
          background: '#F1E9C9',
          padding: '8px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          textDecoration: 'none',
          color: '#C47F17',
          position: 'relative'
        }}>
          🛒
          {cartQuantity > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: '#C47F17',
              color: '#FFF',
              fontSize: '12px',
              fontWeight: 'bold',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {cartQuantity}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}