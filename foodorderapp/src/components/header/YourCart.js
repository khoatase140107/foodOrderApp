import React from 'react';
import '../../App.css';
import { BsFillBagPlusFill } from 'react-icons/bs';

export default function YourCart() {


  return (
    <div>
        <button type="button" className="btn-cart" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div className='icon-cart'><BsFillBagPlusFill/></div>
        <div className='title-cart'><p>Your Cart</p></div>
        <div className='amount-cart'>0</div>

</button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">YOUR CART</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       .................
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary" style={{backgroundColor:'red'}}>OrderNow</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
