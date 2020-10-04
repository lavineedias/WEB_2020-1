export default class DisciplinaService{

    static list = (firestore, callback)=>{

        let ref = firestore.collection('disciplinas')
        ref.onSnapshot(
            (query) => {
                let disciplinas = []
                query.forEach(
                    (doc) => {
                        const { nome, curso, capacidade } = doc.data()
                        disciplinas.push(
                            {
                                _id: doc.id,
                                nome,
                                curso,
                                capacidade,
        
                            }
                        )
        
                    }
                )
                callback(disciplinas)
            }
        )
    }
    static delete = ()=>{

    }
    static create = ()=>{

    }
    static retrieve = ()=>{

    }   
    static edit = ()=>{

    } 



}