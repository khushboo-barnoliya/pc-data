import { GoStarFill } from "react-icons/go";
import './style.css'
import { useState } from "react";


// eslint-disable-next-line react/prop-types
function Rating({ noOfStars = 5 }) {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(starIndex) {
    setRating(starIndex);
    // console.log(starIndex);
  }
  function handleMove(starIndex) {
    setHover(starIndex);
  }
  function handleLeave() {
    setHover(rating);

  }

  return (
    <>
      <div className="container-fluid p-0 d-flex justify-content-center align-items-center">
        <div className="cardMain" style={{ maxWidth: '20rem' }}>
          <div className="card overflow-hidden border-0 rounded-4" >
            <div className="cardImg overflow-hidden">
              <img className="card-img-top" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Title" />
            </div>
            <div className="card-body pb-4">
              <h4 className="card-title fw-semibold">Panckakes</h4>
              <p className="card-text fw-medium mb-2">A pancake is a flat cake, often thin and round, prepared from a starch-based batter.</p>
              <p className=" fw-semibold text-primary">Rs. 300/-</p>

              <div className="star d-flex justify-content-start gap-1 align-items-center">
                {
                  [...Array(noOfStars)].map((_, index) => {

                    index += 1;

                    return <GoStarFill id="star" className={index <= (hover || rating) ? "checked" : "notChecked"} size={20} key={index} onClick={() => handleClick(index)} onMouseMove={() => handleMove(index)} onMouseLeave={() => handleLeave(index)} />

                  })

                }
                <small className="fw-semibold ms-2" style={{fontSize: '12px'}}>{`( ${rating} stars )`}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rating
