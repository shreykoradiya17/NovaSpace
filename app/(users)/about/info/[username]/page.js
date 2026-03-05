import React from 'react'

const page = async (props) => {
  const { username } = await props.params
  const search = await props.searchParams
  // console.log(search,'lllll')
  return (
    <>
      <div>Username: {username}</div>
      <div>search: {search?.name}</div>
    </>
  )
}

export default page