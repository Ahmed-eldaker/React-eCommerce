import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "./ViewProduct.css";
import { FaStar } from "react-icons/fa";

import Loading from "../Loading/Loading";
import { Toaster } from "react-hot-toast";

const ViewProduct = () => {
  const { id } = useParams();
  const [saveProduct, setSaveProduct] = useState(null);
  const [sourceImage, setSourceImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const localStorageToken = localStorage.getItem("userToken");

  useEffect(() => {
    getProduct();
  }, [id]);

  useEffect(() => {
    if (saveProduct) {
      setSourceImage(saveProduct.imageCover);
    }
  }, [saveProduct]);

  async function getProduct() {
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`
      );
      setSaveProduct(data.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  const handleThumbnailClick = (e) => {
    setSourceImage(e);
  };

  return (
    <div>
      {loading && (
        <div>
          <Loading />
        </div>
      )}
      {error && <div>Error: {error.message}</div>}

      <Toaster position="top-center" />

      {saveProduct ? (
        <div className="container mt-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-8">
                  <div>
                    <img
                      src={`${sourceImage}`}
                      alt={saveProduct.title}
                      className="w-100 mainPhoto rounded-1"
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="">
                    {saveProduct.images.slice(0, 4).map((image, index) => (
                      <div className=" mt-2 rounded-1" key={index}>
                        <img
                          src={image}
                          alt={saveProduct.title}
                          className="w-50 rounded-1"
                          onClick={() => handleThumbnailClick(image)}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div>
                <h3>{saveProduct.title}</h3>
                <h4 className="my-4">
                  Category:{" "}
                  <span className="text-muted">
                    {saveProduct.category.name}
                  </span>
                </h4>
                <h6 className="text-muted my-3 lh-base">
                  {saveProduct.description}
                </h6>

                <p>
                  {saveProduct.priceAfterDiscount ? (
                    <h5 className="card-text">
                      Price:{" "}
                      <span className="text-decoration-line-through text-danger">
                        ${saveProduct.price}
                      </span>{" "}
                      ${saveProduct.priceAfterDiscount}
                    </h5>
                  ) : (
                    <p className="card-text">Price:${saveProduct.price} </p>
                  )}
                </p>

                <h6 className="text-muted d-flex align-items-center">
                  Rates Average : <span> {saveProduct.ratingsAverage} </span>
                  <FaStar className="text-warning ms-1" />
                </h6>

                <h6 className="text-muted mt-3">
                  {saveProduct.ratingsQuantity} Customers review
                </h6>

                <button className="btn btn-danger mt-3 me-3" disabled={loading}>
                  Add To Cart
                </button>

                <button className="btn btn-danger mt-3">
                  Add To wishlist{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ViewProduct;
