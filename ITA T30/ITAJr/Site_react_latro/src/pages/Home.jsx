import React from 'react';
import { CoffeeCard } from '../components/CoffeeCard';
import coffeeList from '../coffees.json';

export function Home() {
  return (
    <main style={{ 
      padding: '0 160px', 
      display: 'flex', 
      flexDirection: 'column', 
      width: '100%', 
      maxWidth: '1440px', 
      margin: '0 auto',   
      boxSizing: 'border-box' 
    }}>
      
      {/* SEÇÃO 1: BANNER PRINCIPAL */}
      <section style={{
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '92px 0',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        
        {/* Lado Esquerdo: Textos e Ícones de Benefícios */}
        <div style={{ flex: 1, marginRight: '40px' }}>
          <h1 style={{ 
            fontSize: '48px', 
            color: '#272221', 
            lineHeight: '130%',
            marginBottom: '16px',
            fontWeight: '800'
          }}>
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          
          <p style={{ 
            fontSize: '20px', 
            color: '#403937', 
            marginBottom: '66px',
            lineHeight: '130%'
          }}>
            Com o H8 Coffee você recebe seu café onde estiver, a qualquer hora
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px 40px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ background: '#C47F17', color: '#FFF', padding: '8px', borderRadius: '50%' }}>🛒</span>
              <span style={{ color: '#574F4D' }}>Compra simples e segura</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ background: '#574F4D', color: '#FFF', padding: '8px', borderRadius: '50%' }}>📦</span>
              <span style={{ color: '#574F4D' }}>Embalagem mantém o café intacto</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ background: '#DBAC2C', color: '#FFF', padding: '8px', borderRadius: '50%' }}>⏱️</span>
              <span style={{ color: '#574F4D' }}>Entrega rápida e rastreada</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ background: '#8047F8', color: '#FFF', padding: '8px', borderRadius: '50%' }}>☕</span>
              <span style={{ color: '#574F4D' }}>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>

        {/* Lado Direito: Imagem do Copo de Café real substituindo o bloco cinza */}
        <img 
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=500" 
          alt="Copo de Café H8 Coffee"
          style={{
            width: '476px',
            height: '360px',
            objectFit: 'cover',
            borderRadius: '30px',
            flexShrink: 0 
          }}
        />

      </section>

      {/* SEÇÃO 2: LISTA DE CAFÉS */}
      <section style={{ padding: '32px 0 100px 0', width: '100%' }}>
        <h2 style={{ fontSize: '32px', color: '#272221', marginBottom: '54px', fontWeight: '800' }}>
          Nossos cafés
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(256px, 1fr))',
          gap: '40px 32px',
          width: '100%'
        }}>
          {coffeeList.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </section>

    </main>
  );
}