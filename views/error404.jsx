const React = require('react')
const Def = require('./places/default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div>
                    <img src="rest-rant/public/images/chad-montano-eeqbbemH9-c-unsplash.jpg" alt="Pancakes" /></div>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404
