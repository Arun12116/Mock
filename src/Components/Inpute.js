
import { useState } from 'react';
import "./Inpute.css"
import Data from './Data'

import Table from './Table';
const Inpute = () => {
    // console.log(Data);
    const [change, setChange] = useState("");

    // console.log(change);
    const filter = (Data) => {
        // console.log(Data);
        return Data.filter((items) => items.Bank.toLowerCase().includes(change))
    }
    return (
        <>
            <div className="Container">
                <div className="container-Body">
                    <input type="text" placeholder='Enter Your Bank Name' value={change} onChange={(e) => setChange(e.target.value)} />

                </div>

                <Table Data={filter(Data)} />

            </div>



        </>
    )
}

export default Inpute