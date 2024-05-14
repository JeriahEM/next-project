'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: '', favoriteFood: ''})
  const isFilled = form.name != '' && form.favoriteFood != '';
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    // passing through its current value, and updating 
    setForm({...form,[e.target.name]: e.target.value
    })
  }

  const handleForm = () => {
    // Reseting the values back to empty strings
    isFilled ? setIsSubmitted(true) :
    setForm({name: '', favoriteFood: ''})
  }
  
  useEffect(()=> {
    console.log(form)
  },[form])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className={isSubmitted ? 'hidden' : ''}>
        <h1 className="text-center text-lg">Favorite Food Form</h1>
        <div className="bg-white shadow-md rounded p=8">

        <div className="mb-4">
          <label htmlFor="" className="border rounded p-3">
            Name
          </label>
          <input type="text" placeholder="Name" name="name" className="border rounder p-3" onChange={updateForm} value={form.name}/>
        </div>

        <div className="mb-4">
          <label htmlFor="" className="border rounded p-3">
            Favorite Food
          </label>
          <input type="text" className="border rounded p-3" placeholder="Favorite Food" name="favoriteFood" onChange={updateForm} value={form.favoriteFood}/>
        </div>

        <button className={`text-white py-2 px-4 rounded ${isFilled ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'}`} type="button" onClick={handleForm}>
          {isFilled ? 'Sumbit' : 'Clear'} 
        </button>

        </div>
      </form>
      <p className={isSubmitted ? '' : 'hidden'}>Thank you for your Submission!</p>
    </main>
  );
}
