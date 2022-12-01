import "./CsarCategoris.css";
import cover from "../../assets/caru-img/Mercedes-cover.jpg";
import Category from "../Category/Category";
const CarCategoris = () => {
  return (
    <div>
      <div class="card text-bg-dark " style={{ height: "200px" }}>
        <img src={cover} class="card-img img-fluid igm-height" alt="..." />
        <div class="card-img-overlay d-flex justify-content-center align-items-center">
          <div className="text-center">
            <div className="text-white">
              <h1 className="shadow-lg"> Have a nice exprience with us </h1>
            </div>
          </div>
        </div>
      </div>

      <Category></Category>

      {/* card */}
    </div>
  );
};

export default CarCategoris;
