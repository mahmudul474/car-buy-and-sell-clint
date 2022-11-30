import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';


const BookModal = ({ cardeta }) => {

  const { user } = useContext(AuthContext)

  const [booking, setBooking] = useState()



  const handleBookfetch = (event) => {

    event.preventDefault()
    const form = event.target;
    const location = form.location.value;
    const number = form.number.value;
    const price = form.price.value;
    const productName = form.productName.value;
    const email = form.email.value;
    const UserName = form.UserName.value

    form.reset('')
    console.log(number, price, productName, email, UserName, location)

    const bookingData = {
      location: location,
      number: number,
      price: price,
      productName: productName,
      email: email,
      UserName: UserName
    }

    fetch(`https://car-sell-buy-server-kowsarahammd80.vercel.app/bookingData`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(bookingData)

    })
      .then(res => res.json())
      .then(data => {
        setBooking(data)
      })

  }


  return (
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Car Booking</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            {/* modal form start */}

            <form onSubmit={handleBookfetch}>

              <div class="mb-3">

                <label for="recipient-name" class="col-form-label">User Name</label>
                <input type="text" class="form-control" name='UserName' defaultValue={user?.displayName} id="recipient-name" readOnly />

              </div>

              <div class="mb-3">

                <label for="recipient-name" class="col-form-label">Email</label>
                <input name='email' defaultValue={user.email} type="text" class="form-control" id="recipient-name" readOnly />

              </div>
              <div class="mb-3">

                <label for="recipient-name" class="col-form-label">Product Name</label>
                <input name='productName' defaultValue={cardeta?.model} type="text" class="form-control" id="recipient-name" readOnly />

              </div>

              <div class="mb-3">

                <label for="recipient-name" class="col-form-label">Price</label>
                <input name='price' defaultValue={cardeta?.price} type="text" class="form-control" id="recipient-name" readOnly />

              </div>

              <div class="mb-3">

                <label for="recipient-name" class="col-form-label">Phone Number</label>
                <input name='number' type="text" class="form-control" id="recipient-name" />

              </div>

              <div class="mb-3">

                <label for="recipient-name" class="col-form-label">Meet Location</label>
                <input name='location' type="text" class="form-control" id="recipient-name" />

              </div >
              <br />
              <div className='d-flex justify-content-center'>
                <button type="submit" data-bs-dismiss="modal" class="btn btn-danger w-50">Book</button>
              </div>
            </form>

            {/* modal form end */}



          </div>
          <div class="modal-footer">

            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>



          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;