import React, { useRef, useState, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";

import  Loader  from "../components/Loader";

import Fox from '../models/Fox';
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setcurrentAnimation]= useState('idle')

  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleFocus = () => setcurrentAnimation('walk');
  const handleBlur = () => setcurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setcurrentAnimation('hit');

    console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Aayush Joshi",
          from_email: form.email,
          to_email: "aayush09345@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_Key,
      )
      .then(() => {
        setLoading(false);
        showAlert({ show: true, text: 'Message sen successfully', type:'success' })

        setTimeout(() => {
          hideAlert();
          setcurrentAnimation('idle')
          setForm({ name:'', email:'', message:''})
        },[3000])
      }) 
      .catch((error) => {
        setLoading(false);
        setcurrentAnimation('idle');
        console.log(error);
        showAlert({ show: true, text: 'I didnt recieved your message', type: 'danger'})
      });
  };


  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert}/>}
      <Alert text="test"/>
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Jhon"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="jhon@xyz.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              defaultValue={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={loading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] ">
      <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 75,
        near: 0.1,
        far: 1000
      }}>
        <directionalLight intensity={2.5} position={[0,0,1]}/>
        <ambientLight intensity={0.25} />
        <Suspense fallback={<Loader />}>
          <Fox
            currentAnimation={currentAnimation}  
            position={[0.5, 0.35, 0]}
            rotation={[12.6, -0.6, 0]}
            scale={[0.75, 0.5, 0.5]}
          />
        </Suspense>
      </Canvas>
      </div>
    </section>
  );
};

export default Contact;
