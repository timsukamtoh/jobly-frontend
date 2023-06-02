import React from "react";

/** message component accepting message,
 *
 * props:
 * - color(background)
 *
 * ex. CompaniesPage --> Alert ...
 * */

function Alert({ type, message }) {
    return (
        <div className={`alert alert-${type}`}>{message}</div>
    );
}
export default Alert;