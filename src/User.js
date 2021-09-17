import React, {Component} from 'react'

class User extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.foto} alt="Familia Borges"/>
                </div>
            </div>
        );
    }
}

export default User;