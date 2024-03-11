import {useNavigate} from 'react-router-dom'

const Home = () => {
    const history = useNavigate()
  return (
    <div className='container w-50'>
        <div className='w-50 mx-auto mt-4'>
        <button onClick={e=>history("/data")} className='btn btn-outline-primary' >Veri Girişi İçin Tıklayın</button>
        <button onClick={e=>history("/details")} className='ml-1 btn btn-outline-primary' >Admin girişi</button>
        </div>
    </div>
  )
}

export default Home