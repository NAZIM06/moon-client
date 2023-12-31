import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useAuth } from '../../../Hooks/useAuth';

const PopularClasses = () => {
    const { user } = useAuth()
    const [classData, setClassData] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/popular-classes`)
            .then(res => setClassData(res.data))
    }, [])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/current-user?email=${user?.email}`)
            .then(res => {
                setCurrentUser(res.data)
            })
    }, [])
 

    const handleSelect = (singleClass) => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                text: 'Without login you can not select Jewelry',
                footer: '<a href="/login">Please login</a>'
            })
            return;
        }
        if (currentUser.role === 'admin') {
            Swal.fire({
                icon: 'error',
                text: 'As an admin you can not select any Jewelry',
            })
            return;
        }
        if (currentUser.role === 'instructor') {
            Swal.fire({
                icon: 'error',
                text: 'As an Seller you can not select any class',
            })
            return;
        }
        const selectedClass = { singleClass, studentEmail: user?.email, classId: singleClass._id }
        axios.post(`${import.meta.env.VITE_BASE_URL}/selected-class`, selectedClass)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Jewelry selected successfully',
                    })
                }
            })
    }
    return (
        <div className="px-6 md:px-10 mb-10 mx-auto w-11/12">
        <p className="text-5xl font-extrabold mb-10 text-blue-900 text-center">Popular Jewelry</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5 justify-center">
          {classData.slice(0, 6).map((classes) => (
            <div key={classes._id} className={`card w-full sm:w-80 glass shadow-2xl group ${classes.seats === 0 && 'bg-red-600'}`}>
              <figure>
                <img className="w-80 h-80 group-hover:scale-110" src={classes.image} alt="car!" />
              </figure>
              <div className="card-body">
                <p className="font-semibold">Jewelry name: <span className="font-normal">{classes.className}</span></p>
                <p className="font-semibold">Available Product: <span className="font-normal">{classes.seats}</span></p>
                <p className="font-semibold">Price: <span className="font-normal">${classes.price}</span></p>
                <button onClick={() => handleSelect(classes)} className="button mx-auto">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default PopularClasses;