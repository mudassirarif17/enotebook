import React, { useEffect, useState } from "react";
import myContext from "./mycontext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyState(props) {
    // const name = "Mudassir";
    
    const [loading, setLoading] = useState(false);
    const [allnotes, setAllNotes] = useState([]);
    const [searchnote , setSearchNotes] = useState([]);
    const [search , setSearch] = useState("");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [alarm, setAlarm] = useState("");

    const [user, setUser] = useState([]);




    const getAllNotes = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:4000/api/notes/getallnotes", {
                method: `GET`,
                headers: {
                    'Content-Type': "applicatio/json",
                    'auth-token': localStorage.getItem('token')
                }
            })
            const notesData = await res.json();
            setAllNotes(notesData);
            setSearchNotes(notesData);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const changeHandler = (e) => {
        setSearch(e.target.value.toLowerCase());
        const result = allnotes.filter((data) => data.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setSearchNotes(result)
    }

    const addNote = async () => {
        const res = await fetch("http://localhost:4000/api/notes/addnote", {
            'method': "POST",
            headers: {
                'Content-Type': "application/json",
                'auth-token': localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description, tag , alarm })
        })

        const noteData = await res.json();
        getAllNotes();
        if (noteData.error) {
            toast(noteData.error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            toast("Note Added", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        setTitle("");
        setDescription("");
        setTag("");
    }

    const deleteNote = async (id) => {
        const res = await fetch(`http://localhost:4000/api/notes/deletenote/${id}`, {
            'method': "DELETE",
            headers: {
                'Content-Type': "application/json",
                'auth-token': localStorage.getItem("token")
            }
        })

        const noteData = await res.json();
        getAllNotes();
        if (noteData.error) {
            toast(noteData.error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast("Note Deleted", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    
    const userData = async () => {
        const res = await fetch(`http://localhost:4000/api/auth/getuser`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          }
        });
    
        let userData = await res.json();
        // console.log(userData);
        setUser(userData);
      }

    return (
        <myContext.Provider value={{ allnotes, searchnote , loading, getAllNotes, changeHandler , title, description, tag, setTitle, setDescription, setTag, addNote , deleteNote , user , setUser , userData , alarm , setAlarm }}>
            {props.children}
        </myContext.Provider>
    )
}

export default MyState;