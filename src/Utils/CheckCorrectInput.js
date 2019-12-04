import { toast } from 'react-toastify';

const checkCorrectInput = (inputVal, inputName, balance) => {
  if (inputVal <= 0) {
    toast.warn('Введено некорректное значение !', {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    return false;
  }

  if (balance < inputVal && inputName === 'withdraw') {
    toast.error('Не достаточно средств на счету !', {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    return false;
  }

  return true;
};

export default checkCorrectInput;
