import React from 'react'

class Error404 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div id="error">
                <h1>Desole cette adresse n'est pas valide</h1>
            </div>

        );
    }
}

export default Error404;