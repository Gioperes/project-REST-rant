const React = require('react')
const comment = require('../../models/comment')
const Def = require('./default')

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
    let rating = (
      <h3 className="inactive">
        Not yet rated
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / data.place.comments.length)
      let stars = ''
      for (let i = 0; i < averageRating; i++) {
        stars += 'â­ï¸'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )
    }
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h2>
              Description
            </h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <a href={`/places/edit/${data.place._id}`}>Edit</a>
            <div className="col-sm-6">
              <h1>{ data.place.name }</h1>
              <h2>
                Rating
              </h2>
              {rating}
              <br />
            </div>
          </div>
        </div>
        <div>
          <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
            <div className="row">
              <div className="form-group col-sm-6">
                <label htmlFor="name">Author</label>
                <input className="form-control" id="name" name="name" value={data.place.name} required />
              </div>
              <div class="container">
	            <h2>Bootstrap star rating example</h2>
               <label for="ratinginput" class="control-label">Give A rating:</label>
               <input id="ratinginput" name="rating" class="rating rating-loading" data-min="0" data-max="5" data-step="0.1" value="2" />
	                <input type="submit" name="Submit"/>
	          </div></div>
            <div className="form-group">
              <label htmlFor="cuisines">Comment</label>
              <input className="form-control" id="cuisines" name="cuisines" required />
            </div>
            <input className="btn btn-primary" type="submit" value="Add Comment" />
          </form>
          <form method="POST" action={`/places/${data.place.id}/comment/${comment.id}?_method=DELETE`}>
          <input type="submit" className="btn btn-danger" value="Delete Comment" />
        </form>
        </div>
      </main>
    </Def>

  )
  }

module.exports = show
