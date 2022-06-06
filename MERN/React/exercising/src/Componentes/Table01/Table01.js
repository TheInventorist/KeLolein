import React from "react";
import './Table01.css';

const Table01 = props => {
    return(
        <div>
            <table>
                <tr>
                    <th><h1>Detalle</h1></th>
                    <th><h1>Precio</h1></th>
                    <th><h1>Estado</h1></th>
                </tr>
                {props.content.map((item) => {
                    return(
                        <tr>
                            <td>{item.detaill}</td>
                            <td>{item.price}</td>
                            <td>{item.state}</td>
                        </tr> 
                    );    
                })}
            </table>
        </div>
    );
}

export default Table01;