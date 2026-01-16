import Text from "./components/text"
import CheckIcon from "./assets/icons/check.svg?react"
import ClipIcon from "./assets/icons/clipboard.svg?react"
import PencilIcon from "./assets/icons/pencil.svg?react"
import PlusIcon from "./assets/icons/plus.svg?react"
import SpinnigIcon from "./assets/icons/spinning.svg?react"
import TrashIcon from "./assets/icons/trash.svg?react"
import XIcon from "./assets/icons/x-regular.svg?react"
import Icon from "./components/icon"
import Badge from "./components/badge"
import Button from "./components/button"

function App() {

  return (
    <div className="grid gap-3">
      <div>
        <Text variant={"body-md"}>Create a new element today</Text>
      <Text variant={"body-md-bold"}>Create a new element today</Text>
      <Text variant={"body-sm-bold"} className="text-green-dark">Create a new element today</Text>
      </div>
      <div className="flex gap-1">
        <Icon svg={CheckIcon} className="fill-green-base"/>
        <Icon svg={ClipIcon} className="fill-green-base"/>
        <Icon svg={PencilIcon} className="fill-green-base"/>
        <Icon svg={PlusIcon} className="fill-green-base"/>
        <Icon svg={SpinnigIcon} animate className="fill-green-base"/>
        <Icon svg={TrashIcon} className="fill-green-base"/>
        <Icon svg={XIcon} className="fill-green-base"/>

      </div>

      <div>
        <Badge variant={"secondary"}>5</Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>
    </div>
  )
}

export default App
