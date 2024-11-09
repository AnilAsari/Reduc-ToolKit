import { useSelector } from "react-redux"
import { Isubscripers } from "../Redux/features/subscriberSlice"
import { RootState } from "../Redux/store"

const ViewSubscribers=()=>{


    // const subscribers:Isubscripers=useSelector((state:RootState)=>state.subscriber);
   
    return(
        <div>
            {/* <h1>SubscribersCount:{subscribers.names.length}</h1>

            <h3>List of subscribers</h3>
            <div>
                <ul>
                    {subscribers.names.map(d=><li>{d}</li>)}
                </ul>
            </div> */}

        </div>
    )
}

export default ViewSubscribers;