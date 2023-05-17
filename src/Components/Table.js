import React from 'react'
import "./Table.css"
const Table = ({ Data }) => {
    console.log(Data);

    return (
        <>

            <div className="card-Container">
                <div className="card-Body">
                    <table>
                        <tr>
                            <th>BankName</th>
                            <th>Address</th>
                            <th>Branch</th>
                            <th>BankId</th>
                        </tr>
                        {
                            Data.map((items) => {

                                return <tr>
                                    <td>{items.Bank}</td>
                                    <td>{items.Address}</td>
                                    <td>{items.Branch}</td>
                                    <td>{items.BankId}</td>

                                </tr>


                            })
                        }


                    </table>

                </div>
            </div>

        </>
    )
}

export default Table