import React , {useEffect , useContext} from 'react'
import Layout from '../../components/layout/Layout'
import NoteCard from '../../components/noteCard/NoteCard';
import { useNavigate } from 'react-router-dom';
import myContext from '../../context/data/mycontext';


const Home = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/login')
    }
    else{
      navigate('/');
    }
  },[])
  
  return (
    <div className='flex flex-col md:flex-row'>
      <Layout/>
      <div className='w-full overflow-auto'>
        <NoteCard />
      </div>
    </div>
  )
}

export default Home