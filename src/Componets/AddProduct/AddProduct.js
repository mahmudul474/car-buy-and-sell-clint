import moment from 'moment/moment';
import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';

const AddProduct = () => {
  const { user } = useContext(AuthContext)

  const productData = (event) => {

    const postTime = moment().format("lll");
    event.preventDefault();
    const from = event.target;
    const model = from.model.value;
    const image = from.image.value;
    const carType = from.carType.value;
    const price = from.price.value;
    const location = from.location.value;
    const oldPrice = from.oldPrice.value;
    const UsedTime = from.UsedTime.value;



    const product = {
      seller: user.email,
      model: model,
      image: image,
      carType: carType,
      price: price,
      oldPrice: oldPrice,
      location: location,
      UsedTime: UsedTime,
      postTime: postTime,
      report: "false",
      add: "false",
      soldOut: "In stock",
    };

    console.log(product)

    fetch('https://hea-easy-server-devsobuj910.vercel.app/products', {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result) => {

        console.warn(result);
        from.reset();
      });
  };


  return (
    <div className='container'>

      <h5 className='text-center mt-3'>Add Your Product</h5>

      <div className='container mt-4 mb-5'>

        <form className='' onSubmit={productData}>

          <div class="mb-3">

            <label for="exampleFormControlInput1" class="form-label">Image URL</label>

            <input type="text" class="form-control" name='image' id="exampleFormControlInput1" placeholder="Img URL" />

          </div>

          <div class="mb-3">

            <label for="exampleFormControlInput1" class="form-label">Car model</label>
            <input type="text" class="form-control" name='model' id="exampleFormControlInput1" placeholder="Model name" />

          </div>

          <div class="mb-3">

            <label for="exampleFormControlInput1" class="form-label">Old Price</label>

            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Old Price" name='oldPrice' />

          </div>

          <div class="mb-3">

            <label for="exampleFormControlInput1" class="form-label">Sell Price</label>

            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Sell Price" name='price' />

          </div>

          <div class="mb-3">

            <label for="exampleFormControlInput1" class="form-label">Location</label>

            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Location" name='location' />

          </div>

          <div class="mb-3">

            <select name='carType' class="form-select" aria-label="Default select example" required>
              <option selected>Choose your Car type</option>
              <option value="Porsche">Porsche</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Ford">Ford</option>

            </select>

          </div>

          <div class="mb-3">

            <label for="exampleFormControlTextarea1" class="form-label">Used Time</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Use Time" name='UsedTime' />

            <div className='text-center mt-3'>

              <button type="submit" className='btn btn-dark w-50'>Add Product</button>

            </div>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddProduct;