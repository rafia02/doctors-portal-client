import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContex } from '../../../../Context/AuthProvider';
import toast from 'react-hot-toast';


const Modal = ({ treatment, selected, refetch }) => {
    const {user} = useContext(AuthContex)
    const date = format(selected, 'PP')

    const handlesubmit = (e)=>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const email = form.email.value 
        const number = form.number.value 
        const slot = form.solt.value 

        const appoinment = {
            name,
            email: user.email,
            number,
            slot,
            date,
            service_name: treatment.name
        }

        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(appoinment)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast.success('successfully insert mongobd')
                refetch()
            }
            else{
                toast.error(data.message)
            }
        })
        .catch(e => console.error(e))

    }
    return (
        <>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatment.name}</h3>
                    <form onSubmit={handlesubmit}  className='grid grid-cols-1 gap-3 mt-8'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name="solt" className="select select-bordered w-full ">
                            
                            {
                                treatment?.slots?.map((slot, i) => <option key={i} value={slot}>{slot}</option> )
                            }
                        </select>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
                        <input name="email" type="email" value={user.email} disabled className="input input-bordered w-full" />
                        <input name="number" type="text" placeholder="number" className="input input-bordered w-full" />
                        <input type="submit" placeholder="Type here" className="btn btn-accent w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;