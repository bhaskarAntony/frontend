import React from 'react'
import '../styels/cards.css'

function CardItem(props) {
    const { title, voted, stars,totalVoted, poster, genre, director, pageViews } = props
  return (
    <div className="col-md-6 col-lg-4 col-sm-12 mt-2 mb-2"  >
    <div className="card">
      <div className="card-body align-items-center">
          <div className="row">
            <div className="col-md-2 d-flex votes">
                <i className="bi bi-caret-up-fill"></i>
                    <strong className="text-dark"> { totalVoted } </strong>
                <i className="bi bi-caret-down-fill"></i>
                <p>Votes</p>
            </div>
            <div className="col-md-4">
                <img src={poster} alt="no image" className="card-img-top" />
            </div>
            <div className="col-md-6">
                <h4> { title } </h4>
                <p><strong>Genre:</strong> {genre}</p>
                <p><strong>Director: </strong>{director}</p>
                <p><strong>Starring: </strong>{stars}</p>
                <div className='bottom'>
                    <p className='text-primary'>{pageViews} views</p>
                    <p className='text-primary'>voted By {totalVoted} People</p>
                </div>
                <button className='border-0 p-1 rounded-2 w-100 fs-5 text-white bg-primary'>Watch Trailer</button>
            </div>
          </div>
      </div>
    </div>
</div>
  )
}

export default CardItem
