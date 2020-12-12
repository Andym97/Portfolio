import React from 'react'

const  Users = () => {
    return (
        <div>
            <ul>
                {["Andy","joe","tommy"].map((user,idx)=> {
                    return <li key={idx}>{user} </li>
                })}
            </ul>
        </div>
    )
}

export default Users;