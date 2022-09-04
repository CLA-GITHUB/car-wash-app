import { Tooltip } from "@mantine/core";
import * as React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Button from "./Button";
import FormModal from "./FormModal";
interface CardProps {
  cars?: boolean;
}

const Card: React.FC<CardProps> = ({ cars }: CardProps) => {
  const [expand, setExpand] = React.useState<boolean>(false);
  const [infoBlock, setInfoBlock] = React.useState<{
    carInfo: boolean;
    wtw: boolean;
  }>({
    carInfo: true,
    wtw: false,
  });
  const toggleExpand = () => {
    return setExpand((prev) => !prev);
  };
  const toggleInfoBlock = (block: string) => {
    switch (block) {
      case "carInfo":
        return setInfoBlock({
          carInfo: true,
          wtw: false,
        });
        break;
      case "wtw":
        return setInfoBlock({
          carInfo: false,
          wtw: true,
        });
        break;

      default:
        return setInfoBlock({
          carInfo: true,
          wtw: false,
        });
        break;
    }
  };
  const iconStyle: string = "text-2xl text-gray-500 cursor-pointer";
  const wrapperStyle: string = "text-lg flex items-center space-x-3";
  const blockPillStyle: string = `rounded-xl py-4 text-center cursor-pointer ${
    cars ? "w-full" : " w-[48%]"
  }`;
  const pillStyle: string =
    "border font-[600] text-sm rounded-full py-1 text-gray-600 px-3 font-saria";
  const [openToolTip, setOpenToolTip] = React.useState<boolean>(false);

  return (
    <div className='bg-white drop-shadow-xl rounded-xl p-5'>
      <div className='w-full flex justify-between items-center'>
        <div className={`${wrapperStyle}`}>
          <p>🚘</p>
          <p className='font-medium tracking-wider'>Toyota Camry</p>
        </div>
        <div className={`${wrapperStyle}`}>
          {!cars && (
            <Tooltip
              label='Wash has not been completed'
              color='indigo'
              withArrow
              opened={openToolTip}
            >
              <p
                className='cursor-pointer'
                onClick={() => setOpenToolTip((prev: boolean) => !prev)}
              >
                🟡
              </p>
            </Tooltip>
          )}
          {expand ? (
            <BiChevronUp
              className={`${iconStyle}`}
              onClick={() => toggleExpand()}
            />
          ) : (
            <BiChevronDown
              className={`${iconStyle}`}
              onClick={() => toggleExpand()}
            />
          )}
        </div>
      </div>

      {expand && (
        <div className='mt-4'>
          <div>
            <div className='h-56  bg-[#CBDCFE] flex justify-center items-center rounded-xl'>
              <p className='text-7xl'>🚘</p>
            </div>

            <div className='mt-4'>
              <div className='flex space-x-3 items-center'>
                <p
                  className={`${blockPillStyle} ${
                    infoBlock.carInfo ? "bg-gray-100" : "bg-gray-50"
                  }`}
                  onClick={() => toggleInfoBlock("carInfo")}
                >
                  Vehicle info
                </p>
                {!cars && (
                  <p
                    className={`${blockPillStyle} ${
                      infoBlock.wtw ? "bg-gray-100" : "bg-gray-50"
                    }`}
                    onClick={() => toggleInfoBlock("wtw")}
                  >
                    Who&apos;s washing
                  </p>
                )}
              </div>
            </div>

            {infoBlock.carInfo ? (
              <div>
                <div className='my-4 space-y-2'>
                  <p>Toyota Camry</p>
                  <div className='flex flex-wrap items-center space-x-1 space-y-1'>
                    <FormModal info pill>
                      <p className={`${pillStyle}`}>Saloon</p>
                    </FormModal>
                    <FormModal info pill>
                      <p className={`${pillStyle}`}>Black</p>
                    </FormModal>
                    <FormModal info pill>
                      <p className={`${pillStyle}`}>2019</p>
                    </FormModal>
                    <FormModal info pill>
                      <p className={`${pillStyle}`}>EYK-1001</p>
                    </FormModal>
                  </div>
                </div>
                {!cars && (
                  <div className='space-y-2'>
                    <p>Wash details</p>
                    <div className='flex flex-wrap items-center space-x-1 space-y-1'>
                      <p className={`${pillStyle}`}>
                        Somewhere in port harcourt called abonnoma
                      </p>
                      <p className={`${pillStyle}`}>9/28/2022</p>
                      <p className={`${pillStyle}`}>Afternoon</p>
                      <p className={`${pillStyle}`}>2-4PM</p>
                      <p className={`${pillStyle}`}>Online</p>
                    </div>
                  </div>
                )}
                {cars && (
                  <div className='mt-4'>
                    <div className='space-x-2'>
                      <Button buttonType='button'>Edit</Button>
                      <Button buttonType='button' red>
                        Delete vehicle
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className='mt-4'>
                  <p>Who is coming over to wash?</p>
                  <div></div>
                  <p className='text-sm text-red-600'>
                    confirm identity before handing vehicle over
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
