const React = require('react')
const Def = require('./places/default')

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img className="myPic"src="/images/chad-montano-eeqbbemH9-c-unsplash.jpg" alt="Chia Fruit Shake" />
          <div>
            Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn btn-primary">Places Page</button>
        </a>
      </main>

    </Def>
  )
}

module.exports = home
