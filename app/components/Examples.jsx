var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples Component</h1>
            <p>Try out a few examples</p>
            <ol>
                <li>
                    <Link to='/?location=Chicago'>Chicago,IL Weather</Link>
                </li>
                <li>
                    <Link to='/?location=Kolkata'>Kolkata,India Weather</Link>
                </li>
                <li>
                    <Link to='/?location=Toronto'>Toronto,CA Weather</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;