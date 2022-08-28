import * as React from "react";
import { Modal } from "@mantine/core";
import Button from "./Button";
import AddVehicleForm from "./AddVehicleForm";

interface ModalProps {
  full?: boolean;
}
const FormModal: React.FC<ModalProps> = ({ full }: ModalProps) => {
  const [opened, setOpened] = React.useState<boolean>(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title='Add a vehicle'
        transition='scale'
        transitionDuration={600}
        transitionTimingFunction='ease'
      >
        <AddVehicleForm />
      </Modal>
      <Button full buttonType='button' handleClick={() => setOpened(true)}>
        Add vehicle
      </Button>
    </>
  );
};

export default FormModal;
