import Text from "./components/text"

function App() {

  return (
    <div className="grid gap-3">
      <div>
        <Text variant={"body-md"}>Create a new element today</Text>
      <Text variant={"body-md-bold"}>Create a new element today</Text>
      <Text variant={"body-sm-bold"} className="text-green-dark">Create a new element today</Text>
      </div>
      <div className="flex gap-1">

      </div>
    </div>
  )
}

export default App
