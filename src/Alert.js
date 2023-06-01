import React from "react";

/** message component accepting message,
 *
 * props:
 * - color(background)
 *
 * ex. CompaniesPage --> Alert ...
 * */

function Alert({ message, color }){

    const style = {backgroundColor: color}

    return(
        <div style={style}>
            <p>{message}</p>
        </div>
    )

}