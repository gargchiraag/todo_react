import { useState } from 'react';
import './App.css';
import {useForm} from 'react-hook-form';
function App() {
  let [datainput,SetData]=useState([]);
  const {register,handleSubmit, formState:{errors}}=useForm();
  return (
    <>
      <div id='todo'>
      <h3>Todo App</h3>
      <form onSubmit={handleSubmit((e)=>{
        let temp=[...datainput];
        temp.push(e.title);
        SetData(temp);
        console.log(temp);
      })}>
        <label>Title</label>
        <input type='text' id='title' placeholder='Title' {...register('title',{
          required:"Title is required!",
          minLength:{
            value:3,
            message:"Length is too short"
            }
          })}/>
          <p>{errors.title?.message}</p>
        <button type='submit'>Add</button>
      </form>
      </div>
      <div>
        <table>
          <thead>
            <th>Title</th>
            <th>Status</th>
          </thead>
          <tbody>
          {
            datainput.map((item,index)=>{
              return (
                <tr key={index}>
                  <td>{item}</td>
                  <td>{<button className='deleteBtn' onClick={()=>{
                     let updatedRow = datainput.filter((item,i) => i !== index);
                    SetData(updatedRow);
                  }}>Done</button>}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
