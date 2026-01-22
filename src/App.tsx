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
import IconButton from "./components/icon-button"
import InputText from "./components/input-text"
import InputCheckbox from "./components/input-checkbox"
import Card from "./components/card"
import Container from "./components/container"

function App() {

  return (
    <Container>
      <div className="grid gap-3 p-8">
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

      <div className="grid gap-3">
        <IconButton icon={TrashIcon} variant="primary"/>
        <IconButton icon={TrashIcon} variant="secondary"/>
        <IconButton icon={TrashIcon} variant="tertiary"/>
      </div>

      <div>
        <InputText />
      </div>

      <div>
        <InputCheckbox />
      </div>

      <div>
        <Card size="md" className="flex justify-between gap-6">
          <InputCheckbox />
          <InputText className="flex-1" />
          <IconButton icon={TrashIcon} variant="primary"/>
        </Card>
      </div>
    </div>
    </Container>
  )
}

export default App
