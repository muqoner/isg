import { connect } from 'react-redux'
import { getSchollsAction, deleteActionFromDatabase,getDataAction,editDataAction } from '../actions/schollActions'
import { useEffect,useState } from 'react'
import {useNavigate,useParams} from 'react-router-dom'

const Admin = (props) => {
  const {data} = useParams()
  useEffect(() => {
    props.getFunc()
    if(data){
      props.getDataFunc(data)
    }
    
  }, [data])

  const [newData,setNewData] = useState("")

  const onClickEdit2 = (e)=>{
    const data2 = {id:e.target.id,key:data,val:newData}
    props.editFunc(data2)
  }

  const history = useNavigate()
  
  const onClickDelete = (e) => {
    if (window.confirm("okul silinsin mi?")) {
      props.deleteFunc(e.target.id)
    }

  }

  const onClickEdit = (e)=>{
    history(`/edit/${e.target.id}`)
  }
  
  if (props.scholls === null || props.loading) {
    return (
      <div>
        <h6>Okullar Yükleniyor...</h6>
      </div>
    )
  } else {
    return (
      <div className='container w-50'>
        <table className="table table-striped table-bordered text-center">
          <thead>
            <tr>
              <th> 
                
                  {
                    data ? data : "Kategori"
                  }
                
              </th>
              <th>
                Okul Adı
              </th>
              <th>

              </th>
              
            </tr>




          </thead>
          <tbody>
                  {
                    !data ? 
                      props.scholls.map((scholl, key) => (
                        <tr key={key} >
                          <td>
        
                          </td>
                          <td>
                            {scholl.okulAdi}
                          </td>
                          <td>
                            <button id={scholl.id} onClick={onClickEdit} className="btn btn-warning btn-sm text-light">Detaylar</button>
                            <button id={scholl.id} onClick={onClickDelete} className="btn btn-danger btn-sm  ml-1">Sil</button>
                          </td>
        
                        </tr>
                      )) : props.filtered === null || props.loading ? <div>Loading....</div> : props.filtered.map((scholl,key)=>(

                        <tr key={key} >
                          <td>
                            {scholl.veri}
                            
                              <input onChange={e=>{setNewData(e.target.value.trim())}} placeholder='Yeni Değeri girin' />
  
                          </td>
                          <td>
                            {scholl.okulAdi}
                          </td>
                          <td>
                            <button id={scholl.id} onClick={onClickEdit2} className="btn btn-warning btn-sm text-light">güncelle</button>
                          </td>
        
                        </tr>
                      ))
                    }
        
                  </tbody>
                </table>
        
        
              </div>
            )
          }
        
        }
                  
            

const mapStateToProps = ({ scholls,loading,filtered }) => {
  return {
    scholls,loading,filtered
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFunc: () => dispatch(getSchollsAction()),
    getDataFunc: (data)=>dispatch(getDataAction(data)),
    deleteFunc: (id) => dispatch(deleteActionFromDatabase(id)),
    editFunc:(data)=>dispatch(editDataAction(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)


// ***********************************************

// import React from 'react'

// import { connect } from 'react-redux'
// import { getSchollsAction, deleteActionFromDatabase } from '../actions/schollActions'
// import { useEffect } from 'react'
// import {useNavigate,useParams} from 'react-router-dom'
// import Search from './Search'


// const Admin = (props) => {
  
//   useEffect(() => {
//     props.getFunc()
    
//   }, [])
//     const history = useNavigate()
//   const {data} = useParams()
//   const onClickDelete = (e) => {
//     if (window.confirm("okul silinsin mi?")) {
//       props.deleteFunc(e.target.id)
//     }

//   }

//   const onClickEdit = (e)=>{
//     history(`/edit/${e.target.id}`)
//   }
//   return (
//     <div>
//       <div className="row">
//         <div className="col-md-3">
//           Categories
//         </div>
//         <div className="col-md-9">
//           {
//             props.scholls || props.loading ? <div>Loading...</div> :
//                     <div className='container w-50'>
//                       <table className="table table-striped table-bordered text-center">
//                         <thead>
//                           <tr>
//                             <th> 
                              
//                                 <Search/>
                              
//                             </th>
//                             <th>
//                               Okul Adı
//                             </th>
//                             <th>
              
//                             </th>
                            
//                           </tr>
              
              
              
              
//                         </thead>
//                         <tbody>
              
//                           {
//                             props.scholls.map((scholl, key) => (
//                               <tr key={key} >
//                                 <td>
              
//                                 </td>
//                                 <td>
//                                   {scholl.okulAdi}
//                                 </td>
//                                 <td>
//                                   <button id={scholl.id} onClick={onClickEdit} className="btn btn-warning btn-sm text-light">Düzenle</button>
//                                   <button id={scholl.id} onClick={onClickDelete} className="btn btn-danger btn-sm  ml-1">Sil</button>
//                                 </td>
              
//                               </tr>
//                             ))
//                           }
              
//                         </tbody>
//                       </table>
              
              
//                     </div>
                  
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// const mapStateToProps = ({ scholls,loading}) => {
//   return {
//     scholls,loading
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getFunc: () => dispatch(getSchollsAction()),
//     deleteFunc: (id) => dispatch(deleteActionFromDatabase(id))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Admin)