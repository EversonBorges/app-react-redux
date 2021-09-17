import React, {Component} from 'react'

class List extends Component {
    render() {
        let list = [
            {
                name:"Everson",
                email:"Borges@email.com"
            },
            {
                name:"Patricia",
                email:"patricia@email.com"
            },
            {
                name:"Marcelo",
                email:"marcelo@email.com"
            },
            {
                name:"Emilly",
                email:"emilly@email.com"
            }
        ]
        return (
            <div>
                <div>
                    <img src={this.props.foto} alt="Familia Borges" />
                </div>
                <div>
                    <table border="1">
                    <tr>
                       <th>Nome</th>
                       <th>Email</th>
                    </tr>
                        {list.map((item) => {
                            return <tr>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                            </tr>
                        })}
                    </table>
                </div>
            </div>
        );
    }
}

export default List;