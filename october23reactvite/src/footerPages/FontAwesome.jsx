import React from "react";

const FontAwesome = () => {
  return (
    <>
      <div className="container">
        <div className="title text-light bg-secondary text-center">
          <p
            className="font"
            style={{ fontSize: "40px", fontWeight: "bolder" }}
          >
            Take the hassle out of icons in your website.
          </p>
        </div>
        <div>
          <h5>
            <span style={{ fontSize: "23px", color: "#000080" }}>
              Font Awesome
            </span>{" "}
            is the Internet`s icon library and toolkit, used by millions of
            designers, developers, and content creators.
          </h5>
          <p
            style={{
              fontSize: "25px",
              fontFamily: "sans-serif",
              color: "#000080",
              fontWeight: "bold",
            }}
          >
            Style your icons to your fa-heart`s content.
          </p>
          <p>
            You know and WE know styling icons on the web can be a bit of a
            chore. That`s why we fine-tuned our styling tools like a Swiss watch
            to make icons more malleable right out of the box. Easily size,
            place, style, and even animate any icon with a short line of code to
            create the perfect effect. Bippity-boppity-ICON!
          </p>
        </div>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FontAwesome;
