
export default function HomePage() {
  const isError = true

  if (isError) {
    throw new Error("NOT WORKING")
  }


  return (
    <div>
      <h4>Home Page</h4>
      <button>working</button>
    </div>
  )
}
