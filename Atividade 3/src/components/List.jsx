import React from 'react'
import { Component } from 'react';
import axios from 'axios'
import TableRow from './TableRow'
export default class List extends Component {
    constructor(props){
        super(props)
        this.state = {estudantes:[]}
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)

    }
    componentDidMount(){
        axios.get('http://localhost:3001/estudantes')
        .then(
            (res)=>{
                this.setState({estudantes: res.data})
                
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    montarTabela(){
        if(!this.state.estudantes) return
        return this.state.estudantes.map(
            (est, i)=>{
               return <TableRow estudante={est} key={i} apagarElementoPorId={this.apagarElementoPorId}/>
            }
        )
    }

    apagarElementoPorId(id){
        let tempEstudante = this.state.estudantes
        for(let i=0; i<tempEstudante.length;i++){
            if(tempEstudante[i].id === id){
                tempEstudante.splice(i,1)
            }

        }
        this.setState({estudantes:tempEstudante})
    }


    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3> Listar Estudantes </h3>
                <table className='table table-striped' style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
                            <th colSpan='2' style={{textAlign:"center"}}></th>
                          
                            
                        </tr>

                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>
        )
    }
}

