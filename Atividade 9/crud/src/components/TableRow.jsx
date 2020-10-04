import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DisciplinaService from '../services/DisciplinaService'



export default class TableRow extends Component {

    constructor(props) {
        super(props)
        this.apagar = this.apagar.bind(this)
    }


    apagar(_id, nome) {
        let res = window.confirm(`Deseja apagar a disciplina ${nome}?`)
        if (res) {
            DisciplinaService.delete(
                this.props.firebase.getFirestore(),
                (mensagem) =>{

                },
                id
            )
        }
    }



    render() {
        return (
            <tr>
                <td>
                    {this.props.disciplina._id}
                </td>
                <td>
                    {this.props.disciplina.nome}
                </td>
                <td>
                    {this.props.disciplina.curso}
                </td>
                <td>
                    {this.props.disciplina.capacidade}
                </td>
                <td style={{ textAlign: "center" }}>
                    <Link to={"/edit/" + this.props.disciplina._id} className="btn btn-primary">Editar</Link>
                </td>
                <td style={{ textAlign: "center" }}>
                    <button onClick={
                        () => this.apagar(this.props.disciplina._id, this.props.disciplina.nome)
                    }

                        className="btn btn-danger">Apagar</button>
                </td>

            </tr>
        )
    }
}