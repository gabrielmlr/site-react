import React from 'react';
import { useLocation } from 'react-router-dom';

export function Success() {
  const { state } = useLocation();

  const endereco = state || {
    rua: 'Rua João da Silva',
    numero: '123',
    bairro: 'Bairro Exemplo',
    cidade: 'São José dos Campos',
    uf: 'SP'
  };

  return (
    <main style={{ padding: '80px 160px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1440px', margin: '0 auto', boxSizing: 'border-box', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div>
          <h1 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '32px', color: '#C47F17', fontWeight: 800, marginBottom: '4px' }}>Uhu! Pedido confirmado</h1>
          <p style={{ fontSize: '20px', color: '#403937' }}>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <div style={{ padding: '40px', borderRadius: '6px 36px 6px 36px', border: '1px solid #8047F8', display: 'flex', flexDirection: 'column', gap: '32px', minWidth: '526px', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ background: '#8047F8', color: '#FFF', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📍</span>
            <div style={{ color: '#574F4D', fontSize: '16px' }}>
              <p>Entrega em <strong>{endereco.rua}, {endereco.numero}</strong></p>
              <p>{endereco.bairro} - {endereco.cidade}, {endereco.uf}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ background: '#DBAC2C', color: '#FFF', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>⏱️</span>
            <div style={{ color: '#574F4D' }}>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ background: '#C47F17', color: '#FFF', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>$</span>
            <div style={{ color: '#574F4D' }}>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Ilustração em SVG nativo (Motoboy/Entrega) - Nunca quebra */}
      <svg width="492" height="293" viewBox="0 0 492 293" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '492px', height: '293px' }}>
        <rect width="492" height="293" rx="20" fill="#F3F2F2"/>
        <circle cx="170" cy="150" r="40" fill="#DBAC2C"/>
        <rect x="150" y="140" width="50" height="30" rx="4" fill="#403937"/>
        <circle cx="160" cy="190" r="12" fill="#707070"/>
        <circle cx="190" cy="190" r="12" fill="#707070"/>
        <path d="M190 145H215L225 160H200V145Z" fill="#8047F8"/>
        <rect x="115" y="125" width="30" height="30" rx="3" fill="#C47F17"/>
        <text x="122" y="145" fill="white" font-family="sans-serif" font-weight="bold" font-size="16">☕</text>
        <text x="250" y="155" fill="#403937" font-family="sans-serif" font-weight="bold" font-size="16">A caminho...</text>
      </svg>

    </main>
  );
}