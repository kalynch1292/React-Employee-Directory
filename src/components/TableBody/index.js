import React from 'react';

const TableBody = ({first, last, email, index}) => {
    return (
        <>
            <tr>
                <th scope="row">{index+1}</th>
                <td>{first}</td>
                <td>{last}</td>
                <td>{email}</td>
            </tr>
        </>
    )
}

export default TableBody;