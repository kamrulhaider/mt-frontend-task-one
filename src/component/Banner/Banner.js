import React from "react";

function Banner() {
  return (
    <div>
      <div className="row align-items-center">
        <div className="col-md-6 pe-5">
          <h1 className="title-text mb-4">This is title</h1>
          <p className="fw-bold">This is title related text</p>
        </div>
        <div className="col-md-6 p-5">
          <img
            className="img-fluid"
            src="https://images.unsplash.com/photo-1551383616-a9e150c07fca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
