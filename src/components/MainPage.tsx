import { useDispatch } from "react-redux"
import { decrement, increment } from "../Redux/features/counterSlice";
import { useState } from "react";
import { addSubscriber } from "../Redux/features/subscriberSlice";

const MainPage = () => {

    const [name,setName]=useState('')
    const dispatch = useDispatch();


    const Onsubmit=()=>{
        dispatch(addSubscriber(name));
        setName('')
    }


    const onClickLikes = () => {
        dispatch(increment());
    }

    const disLikes = () => {
        dispatch(decrement());
    }

    return (
        <div>
            <div>
                <button onClick={onClickLikes}>Like</button>
                <button onClick={disLikes}>DisLike</button>
            </div>

            <div>
                <input value={name} onChange={(e)=>setName(e.target.value)} />
                <button onClick={Onsubmit}>Submit</button>
            </div>
        </div>
    )
}


export default MainPage;