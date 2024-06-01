import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: ''})

  const handleChange = () => {};

  return (
    <section className='relative felx lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
       <h1 className='head-text'>Get in Touch</h1>
       <form action="" className='w-full flex flex-col gap-7 -mt-14'>
        <label htmlFor="" className='text-black-500 font-semibold'>
          Name
          <input type="text" name='name' className='input' placeholder='Jhon' required value={form.name} onChange={handleChange}/>
        </label>
       </form>
      </div>
    </section>
  )
}

export default Contact;
