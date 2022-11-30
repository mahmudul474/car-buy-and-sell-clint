import React from 'react';

const BoostModal = ({myProductData}) => {
   
  const {_id, seller, model, image, carType, price, oldPrice, location, UsedTime,
    postTime} = myProductData

  return (    
   <div class="modal fade" id={`${_id}`} tabindex="-1" aria-labelledby={`${_id}`} aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id={`${_id}`}>Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss={`${_id}`} aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoostModal;