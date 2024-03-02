import React from 'react'
import souths from "../south"
import Pizza from '../components/Pizza'
export default function Homescreen() {
    return (
        <div>
            <div className="row">
                {souths.map(pizza => {
                    return <div className="col-md-4 ">
                        <div>
                            <Pizza pizza={pizza}/>
                        </div>

                    </div>
                   



                })}

            </div>
        </div>
    )
}
