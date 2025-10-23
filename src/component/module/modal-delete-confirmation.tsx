import { Images } from '@/assets';
import { Modal, Text, Button, Image } from '..';

type ModalRiskAssessmentExpired = {
  isModalVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
  onClick?: () => Promise<void> | void | undefined;
};

const Component = ({
  isModalVisible,
  setIsModalVisible,
  onClick,
}: ModalRiskAssessmentExpired) => {
  return (
    <Modal
      isVisible={isModalVisible}
      onClickClose={() => {
        setIsModalVisible(false);
      }}
      title={`Delete Confirmation`}
    >
      <div className={`flex flex-col items-center p-4`}>
        <Image className={`w-1/3`} source={Images.warning} alt={`warning`} />
        <Text className={`text-center font-semibold`}>
          {`Are you sure to delete?`}
        </Text>
      </div>
      <div className={`flex justify-center gap-4`}>
        <Button
          variant={`outlined`}
          onClick={() => {
            setIsModalVisible(false);
          }}
        >
          {`Cancel`}
        </Button>
        <Button variant={`contained`} onClick={onClick}>
          {`Confirm`}
        </Button>
      </div>
    </Modal>
  );
};

export { Component };
