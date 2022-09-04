import * as React from "react";
import { Modal } from "@mantine/core";
import Button from "./Button";
import AddVehicleForm from "./AddVehicleForm";
import { RiCloseFill } from "react-icons/ri";

interface ModalProps {
  full?: boolean;
  pill?: boolean;
  info?: boolean;
  children: React.ReactNode;
}
const FormModal: React.FC<ModalProps> = ({
  full,
  pill,
  info,
  children,
}: ModalProps) => {
  const [opened, setOpened] = React.useState<boolean>(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        // title={!info ? "Add a vehicle" : "What does this mean?"}
      >
        {!info ? (
          <div className='font-saria'>
            <div className='flex justify-between items-center mb-8'>
              <p className='text-xl font-bold tracking-wide'>Add a vehicle</p>

              <RiCloseFill
                onClick={() => setOpened(false)}
                className='text-2xl text-gray-400'
              />
            </div>
            <AddVehicleForm />
          </div>
        ) : (
          <div className='font-saria'>
            <div className='flex justify-between items-center mb-8'>
              <p className='text-xl font-bold tracking-wide'>
                What does this mean?
              </p>

              <RiCloseFill
                onClick={() => setOpened(false)}
                className='text-2xl text-gray-400'
              />
            </div>
            <p className='tracking-wide'>
              These chips display info about your vehicle. They relate to
              information about your vehicle like vehicle type, color, model,
              plate number, and also wash details like address, date for wash,
              time of day and payment method.
            </p>
            <br />
            <p className='tracking-wide'>
              {"It'll"} take some time to figure out how everything works, so{" "}
              {"don't"} worry too much about them
            </p>
            <p className='text-6xl flex justify-center items-center py-16'>
              🚗🧽
            </p>
            <Button
              full
              buttonType='button'
              handleClick={() => setOpened(false)}
            >
              Okay
            </Button>
          </div>
        )}
      </Modal>
      {!info ? (
        <Button full buttonType='button' handleClick={() => setOpened(true)}>
          {children}
        </Button>
      ) : (
        <button className='cursor-pointer' onClick={() => setOpened(true)}>
          {children}
        </button>
      )}
    </>
  );
};

export default FormModal;
