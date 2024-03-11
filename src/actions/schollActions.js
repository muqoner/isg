import database from '../firebase/firebaseConfig'

export const addSchollAction = (scholl)=>{
    return dispatch=>{
        database.ref("/scholls").push(scholl)
            .then(res=>console.log("data kaydedildi"))
            .catch(e=>console.log("okul kaydedilirken hata",e))
    }
}

export const getSchollsAction = ()=>{
    return dispatch=>{
        dispatch({type:"LOADING",payload: true})
        database.ref("/scholls").once("value")
            .then(res=>{
                const scholls =[]
                res.forEach((scholl)=>{
                    scholls.push({id: scholl.key,...scholl.val()})
                })
                dispatch({type:"GET_SCHOLLS",payload:scholls})
            })
            .catch(e=>console.log("okullar getirilirken hata",e))  
    }
}


export const deleteActionFromDatabase = (id)=>{
    return dispatch=>{
        database.ref(`/scholls/${id}`).remove()
            .then(res=>{
                dispatch(deleteActionFromUi(id))
            })
            .catch(e=>console.log("okul silinirken hata",e))
    }
}

export const deleteActionFromUi = (id)=>{
    return dispatch=>{
        dispatch({type:"DELETE",payload:id})
    }
}

export const getSchollAction = (id)=>{
    return dispatch=>{
        dispatch({type:"LOADING",payload:true})
        database.ref(`/scholls/${id}`).once("value")
            .then(res=>{
                dispatch({type:"GET_SCHOLL",payload:{id:res.key,...res.val()}})
            })
    }
}

export const getDataAction = (data)=>{
    return dispatch=>{
        dispatch({type:"LOADING",payload:true})
        dispatch({type:"FILTER",payload:data})
    }
}

export const editDataAction = (data)=>{
    return dispatch=>{
        console.log(data)
        dispatch({type:"LOADING",payload:true})
        database.ref(`/scholls/${data.id}:${data.key}`).update(`{
            ${data.val}
        }`)
            .then(res=>console.log("veri başarıyla güncellendi"))
            .catch(e=>{console.log("veri güncellenirken hata",e)})
    }
}