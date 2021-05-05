import React from "react";
import AddDreamerForm from '../../Components/AddDreamerForm/AddDreamerForm'

export default function AddDreamerPage({handleAddDreamer, user}) {
  return (
    <AddDreamerForm handleAddDreamer={handleAddDreamer} user={user} />
  )
}