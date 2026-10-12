import React from 'react'

const users = () => {
    const users = [
        { id: 1, name: "Yash" },
        { id: 2, name: "Nakul" }
    ]
  return (
      <ul>
          <h1>Lists of new users</h1>
          {users.map((user) => (
              <li key={user.id}>{user.name}</li>
          ))}
    </ul>
  )
}

export default users
