const React = require('react')
const Def = require('./default')

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
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
               <input id="ratinginput" name="rating" class="rating rating-loading" data-min="0" data-max="5" data-step="0.1" value="2">
	            <input type="submit" name="Submit"/></input>
	          </div></div>
            <div className="form-group">
              <label htmlFor="cuisines">Comment</label>
              <input className="form-control" id="cuisines" name="cuisines" required />
            </div>
            <input className="btn btn-primary" type="submit" value="Add Comment" />
          </form>
        </div>
      </main>
    </Def>

  )
}

module.exports = show