import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import {createFormAction} from '../redux/action/FormAction'
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


export default function FormData(props) {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  function onFormData(e) {
    e.preventDefault();
    const postData = {
      title,
      name,
      content,
    };
    dispatch(createFormAction(postData, props.history))
  }

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="row">
      <div className="flex items-center justify-between my-4">
        <h2>Create Data</h2>
      </div>
      <form onSubmit={onFormData}>
        <div>
          <label>Title</label>
          <div>
            <input
                type='text'className='border border-gray-500 w-full px-1'
                value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
        </div>
        <div className="my-2">
          <label>Name</label>
          <div>
            <input
                type='text'className='border border-gray-500 w-full px-1'
                value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
        </div>
        <div className="my-2">
          <label>Content</label>
          <div>
            <textarea
                type='text'className='border border-gray-500 w-full px-1'
                value={content} onChange={(e) => setContent(e.target.value)}/>
          </div>
        </div>
  
          <div className="mb-2">
            <button type="submit" className="btn btn-primary">Create</button>
          </div>

          <div className="mb-2">
            <Link to={"/"} type="submit" className="btn btn-secondary">Back</Link>
          </div>
  
      </form>
      </div>
    </div>
    </>
  )
}

