import React , {useState , useEffect , useContext} from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'


const UpdateNote = () => {
  const [title , setTitle] = useState("");
  const [description , setDescription] = useState("");
  const [tag , setTag] = useState("");

  const {id} = useParams();
  const navigate = useNavigate();

  const getNoteById = async () =>{
      const res = await fetch(`http://localhost:4000/api/notes/getnotebyid/${id}` , {
        method : "GET" , 
        headers : {
          "Content-Type" : "application/json",
          "auth-token" : localStorage.getItem("token")
        }
      });

      const data = await res.json();
      console.log(data)
      setTitle(data.title);
      setDescription(data.description);
      setTag(data.tag);
    
  }

  useEffect(()=>{
    getNoteById();
  } , [id])

  const updateNote = async () =>{
    try {
      const res = await fetch(`http://localhost:4000/api/notes/updatenote/${id}` , {
          method : "PUT" , 
          headers : {
            "Content-Type" : "application/json",
            "auth-token" : localStorage.getItem("token")
          },
          body : JSON.stringify({title , description , tag})
      });

      const noteData = await res.json();
      if(noteData.error){
        alert("Error");
      }
      else{
        alert("Updated");
      }
    } catch (error) {
      console.log(error);
    }
  }
   
  return (
    <div className='flex flex-col md:flex-row'>
      <Layout/>
      <div className='w-full'>
        <div className='flex flex-col items-center'>
        <h1 className='text-center my-10 text-2xl font-bold'>Update Note</h1>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} className='w-[80%] my-3 p-2 rounded-lg border-2 border-gray-300' type="text" name="title" id="" placeholder='Title'/>
        <input value={tag} onChange={(e)=>setTag(e.target.value)} className='w-[80%] my-3 p-2 rounded-lg border-2 border-gray-300' type="text" name="tag" id="" placeholder='Tag'/>
        <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className='w-[80%] my-3 p-2 rounded-lg border-2 border-gray-300' name="desc" id="" cols="30" rows="7" placeholder='Decription'></textarea>
        <button onClick={updateNote} className='text-xl font-semibold bg-pink-600 text-white px-2 py-1 w-[80%] rounded-lg active:bg-pink-400'>Update Note</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateNote;