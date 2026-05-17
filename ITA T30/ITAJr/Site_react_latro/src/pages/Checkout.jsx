import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

export function Checkout() {
  // Puxamos a função de remover (que tira de um em um) do contexto
  const { cartItems, removeCoffeeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const itemsTotal = cartItems.reduce((total, item) => {
    const priceAsNumber = parseFloat(item.price.replace(',', '.'));
    return total + priceAsNumber * item.quantity;
  }, 0);

  const deliveryPrice = cartItems.length > 0 ? 3.50 : 0;
  const cartTotal = itemsTotal + deliveryPrice;

  function handleConfirmOrder(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const orderData = {
      rua: formData.get('rua'),
      numero: formData.get('numero'),
      bairro: formData.get('bairro'),
      cidade: formData.get('cidade'),
      uf: formData.get('uf'),
    };
    
    clearCart();
    
    navigate('/success', { 
      state: orderData 
    });
  }

  return (
    <main style={{ padding: '40px 160px', display: 'flex', gap: '32px', background: '#FAFAFA' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h2 style={{ fontSize: '18px', color: '#403937', fontWeight: '700' }}>Complete seu pedido</h2>
        
        <form onSubmit={handleConfirmOrder} id="order-form" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: '#F3F2F2', padding: '40px', borderRadius: '6px' }}>
            <h3 style={{ fontSize: '16px', color: '#403937', marginBottom: '32px' }}>📍 Endereço de Entrega</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" name="cep" placeholder="CEP" required style={inputStyle({ width: '200px' })} />
              <input type="text" name="rua" placeholder="Rua" required style={inputStyle({ width: '100%' })} />
              <div style={{ display: 'flex', gap: '12px' }}>
                <input type="text" name="numero" placeholder="Número" required style={inputStyle({ width: '200px' })} />
                <input type="text" name="complemento" placeholder="Complemento" style={inputStyle({ flex: 1 })} />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <input type="text" name="bairro" placeholder="Bairro" required style={inputStyle({ width: '200px' })} />
                <input type="text" name="cidade" placeholder="Cidade" required style={inputStyle({ flex: 1 })} />
                <input type="text" name="uf" placeholder="UF" required maxLength="2" style={inputStyle({ width: '60px' })} />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div style={{ width: '448px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h2 style={{ fontSize: '18px', color: '#403937', fontWeight: '700' }}>Cafés selecionados</h2>
        <div style={{ background: '#F3F2F2', padding: '40px', borderRadius: '6px 44px 6px 44px' }}>
          {cartItems.length === 0 ? (
            <p style={{ color: '#8D8686', textAlign: 'center', padding: '20px 0' }}>Seu carrinho está vazio.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {cartItems.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '24px', borderBottom: '1px solid #E6E5E5' }}>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <span style={{ fontSize: '32px' }}>☕</span>
                    <div>
                      <p style={{ color: '#403937', margin: '0 0 4px 0', fontWeight: '500' }}>{item.name}</p>
                      
                      {/* CONTAINER DA QUANTIDADE COM O BOTÃO DE DIMINUIR DE UM EM UM */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#707070', fontSize: '14px' }}>Quantidade: <strong>{item.quantity}</strong></span>
                        <button
                          type="button"
                          onClick={() => removeCoffeeFromCart(item.id)}
                          style={{
                            background: '#E6E5E5',
                            border: 'none',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            color: '#574F4D',
                            fontSize: '12px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold'
                          }}
                        >
                          ➖ Diminuir
                        </button>
                      </div>

                    </div>
                  </div>
                  <strong style={{ color: '#403937' }}>R$ {item.price}</strong>
                </div>
              ))}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#574F4D' }}>
                  <span>Total de itens</span>
                  <span>R$ {itemsTotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#574F4D' }}>
                  <span>Entrega</span>
                  <span>R$ {deliveryPrice.toFixed(2).replace('.', ',')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: '700', color: '#403937' }}>
                  <span>Total</span>
                  <span>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>

              <button type="submit" form="order-form" style={{ background: '#DBAC2C', color: '#FFF', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', marginTop: '12px', width: '100%', fontSize: '14px' }}>
                Confirmar Pedido
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function inputStyle(overrides) {
  return { background: '#EEEDED', border: '1px solid #E6E5E5', borderRadius: '4px', padding: '12px', fontSize: '14px', color: '#574F4D', boxSizing: 'border-box', outline: 'none', ...overrides };
}