import React from 'react'

const PromoCard = (props) => {
  return (
    <div className="card">
      <img className="card-img-top object-fit-cover" 
      src="https://placehold.co/200x200" 
      alt="" 
      />
      <div className="card-body">
      <h5 className="card-title">Titulo</h5>
      <p className="card-title">R$ Preço</p>
      <button className="bnt btn-success w-100">
     <i className="bi bi-cart-plus me-2"></i>
    Adicionar ao carrinho
      </button>
      </div>
    </div>
  );
};

export default PromoCard
