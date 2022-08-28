const Home = () => {
  async function handleAddUser(){
    fetch("/api/user", {method: "GET"})
      .then((r) => console.log(r.json()))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <button onClick={handleAddUser}>Adding user</button>
    </div>
  )
}

export default Home
