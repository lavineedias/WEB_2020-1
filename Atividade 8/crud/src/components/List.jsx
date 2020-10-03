import React from 'react'
import { Component } from 'react';
import axios from 'axios'
import TableRow from './TableRow'
export default class List extends Component {
    constructor(props){
        super(props)
        this.state = {disciplinas:[]}
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)

    }
    componentDidMount(){
        //axios.get('http://localhost:3001/disciplinas')
        axios.get('http://localhost:3002/disciplinas/list')
        .then(
            (res)=>{
                this.setState({disciplinas: res.data})
                
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    montarTabela(){
        if(!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (est, i)=>{
               return <TableRow disciplina={est} key={i} apagarElementoPorId={this.apagarElementoPorId}/>
            }
        )
    }

    apagarElementoPorId(id){
        let tempDisciplina = this.state.disciplinas
        for(let i=0; i<tempDisciplina.length;i++){
            if(tempDisciplina[i]._id === id){
                tempDisciplina.splice(i,1)
            }

        }
        this.setState({disciplinas:tempDisciplina})
    }


    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3> Listar Disciplinas </h3>
                <table className='table table-striped' style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
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

