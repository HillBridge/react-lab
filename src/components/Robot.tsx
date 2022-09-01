import React from 'react';

interface root {
  id: number
  name: string
  email: string
}

const Robot: React.FC<root> = ({id,name,email}) => {
  return (
    <li>
      <img src={`https://robohash.org/${id}`} alt="logo" />
      <p>{name}</p>
      <p>{email}</p>
    </li>
  )
}


export default Robot;