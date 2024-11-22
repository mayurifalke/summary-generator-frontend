import React from "react";

function Content({ item }) {
  const handleView = () => {
    if (item.file) {
      console.log("Opening file:", item.file); 
      window.open(item.file, "_blank");
    } else {
      alert("File not found for this item.");
    }
  };
  

  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text
            x="50%"
            y="50%"
            fill="#eceeef"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="20"
          >
            {item.name}
          </text>
        </svg>
        <div className="card-body">
          <span>
            <b>Department:</b> {item.dept}
          </span>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={handleView} 
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
