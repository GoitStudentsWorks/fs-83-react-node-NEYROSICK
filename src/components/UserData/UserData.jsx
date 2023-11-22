import UserForm from '../UserForm/UserForm';
import Modal from '../Modal/Modal';

import {
  UserPageItem,
  UserFormTitle,
  UserFormBox,
  UserBtnPen,
  ModalTitle,
  ModalText,
  ModalBtn,
  ModalConteiner,
  BtnCloseModal,
} from './UserData.styled';

import { useState, useEffect } from 'react';

const UserData = () => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setIsModal(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  const [isUserUpdate, setIsUserUpdate] = useState(true);
  const [isModal, setIsModal] = useState(true);

  return (
    <>
      <UserPageItem>
        <UserFormTitle>My information:</UserFormTitle>
        <UserFormBox>
          {isUserUpdate ? (
            <UserBtnPen onClick={() => setIsUserUpdate((state) => !state)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 15.7059L4.46967 15.1756C4.32902 15.3162 4.25 15.507 4.25 15.7059H5ZM15.7059 5L16.2362 4.46967C15.9433 4.17678 15.4684 4.17678 15.1756 4.46967L15.7059 5ZM19 8.29412L19.5303 8.82445C19.8232 8.53155 19.8232 8.05668 19.5303 7.76379L19 8.29412ZM8.29412 19V19.75C8.49303 19.75 8.6838 19.671 8.82445 19.5303L8.29412 19ZM5 19H4.25C4.25 19.4142 4.58579 19.75 5 19.75V19ZM11.5882 18.25C11.174 18.25 10.8382 18.5858 10.8382 19C10.8382 19.4142 11.174 19.75 11.5882 19.75V18.25ZM18.5882 19.75C19.0024 19.75 19.3382 19.4142 19.3382 19C19.3382 18.5858 19.0024 18.25 18.5882 18.25V19.75ZM5.53033 16.2362L16.2362 5.53033L15.1756 4.46967L4.46967 15.1756L5.53033 16.2362ZM15.1756 5.53033L18.4697 8.82445L19.5303 7.76379L16.2362 4.46967L15.1756 5.53033ZM18.4697 7.76379L7.76379 18.4697L8.82445 19.5303L19.5303 8.82445L18.4697 7.76379ZM8.29412 18.25H5V19.75H8.29412V18.25ZM5.75 19V15.7059H4.25V19H5.75ZM12.705 8.00092L15.9991 11.295L17.0597 10.2344L13.7656 6.94026L12.705 8.00092ZM11.5882 19.75H18.5882V18.25H11.5882V19.75Z"
                  fill="#54ADFF"
                />
              </svg>
            </UserBtnPen>
          ) : (
            <UserBtnPen onClick={() => setIsUserUpdate((state) => !state)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 5L5 19M5.00004 5L19 19"
                  stroke="#54ADFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </UserBtnPen>
          )}

          <UserForm
            isUserUpdate={isUserUpdate}
            setIsUserUpdate={setIsUserUpdate}
          />

          {isModal && (
            <Modal>
              <ModalConteiner>
                <ModalTitle>Congrats!</ModalTitle>
                <ModalText>Youre registration is success</ModalText>
                <ModalBtn onClick={() => setIsModal(false)} type="button">
                  Go to profile
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M15.8613 14.3614C15.5946 12.378 14.3528 10.689 12.5393 9.84335C10.7259 8.99778 8.63364 9.13211 6.94302 10.2027L2.86887 12.7822C2.19287 13.2102 1.68351 13.8312 1.39581 14.5777C1.10804 15.3244 1.06917 16.1265 1.28316 16.8976C1.49755 17.6688 1.94487 18.336 2.57661 18.8273C3.20843 19.3185 3.96541 19.5877 4.76566 19.6055L4.81795 19.6064C6.82515 19.6654 8.73238 20.5626 10.0576 22.0732C10.3995 22.4627 10.8104 22.7707 11.2701 22.985C11.52 23.1016 11.7847 23.1904 12.0602 23.2498C12.8426 23.4181 13.6413 23.3319 14.37 23.0005C15.0983 22.669 15.6881 22.1235 16.0753 21.4232C16.4625 20.7227 16.6108 19.9334 16.5042 19.1402L15.8613 14.3614ZM13.7874 21.7199C12.8605 22.1415 11.7867 21.9107 11.1152 21.1454C10.3171 20.2356 9.34232 19.5124 8.26431 19.0097C7.18729 18.5075 6.00694 18.2256 4.79792 18.1988L4.7635 18.1981C3.75999 18.1617 2.90849 17.4913 2.6386 16.5211C2.36646 15.5402 2.76132 14.5154 3.6214 13.9707L7.69572 11.3913C8.97945 10.5785 10.5677 10.4765 11.9446 11.1185C13.3215 11.7606 14.2645 13.0429 14.4671 14.5489L15.1099 19.3277C15.2455 20.3371 14.714 21.2984 13.7874 21.7199Z"
                      fill="#FEF9F9"
                    />
                    <path
                      d="M5.22141 9.395C6.04872 9.45268 6.84539 9.13584 7.46485 8.50281C8.05409 7.90035 8.41268 7.07719 8.4743 6.18465C8.53553 5.29253 8.29336 4.42803 7.79259 3.75024C7.26615 3.03826 6.52075 2.61472 5.69438 2.55808C4.03247 2.44276 2.5737 3.88268 2.44231 5.76882C2.3395 7.27089 3.10962 8.60845 4.26712 9.14821C4.56268 9.28603 4.88352 9.37179 5.22141 9.395ZM3.84575 5.86564C3.92319 4.75419 4.70887 3.89987 5.59756 3.96152C5.75809 3.97253 5.91412 4.01357 6.06098 4.08206C6.28767 4.18776 6.49296 4.35885 6.66113 4.58657C6.9637 4.99576 7.10917 5.52908 7.07079 6.08799C7.03208 6.64716 6.81495 7.15525 6.45913 7.51885C6.13302 7.85207 5.72802 8.02001 5.31905 7.99154L5.31823 7.99156C4.43038 7.93071 3.76986 6.9768 3.84575 5.86564Z"
                      fill="#FEF9F9"
                    />
                    <path
                      d="M11.1413 8.64674C12.903 9.46825 15.0978 8.50366 16.0337 6.4965C16.9699 4.48884 16.2982 2.1872 14.5365 1.36569C12.7749 0.544262 10.5802 1.50926 9.644 3.51692C8.70804 5.52408 9.37973 7.82531 11.1413 8.64674ZM13.942 2.64068C15.0006 3.13431 15.3671 4.59743 14.7587 5.90196C14.1507 7.206 12.7944 7.86538 11.7358 7.37175C10.6772 6.87812 10.3109 5.41549 10.919 4.11146C11.5273 2.80692 12.8834 2.14705 13.942 2.64068Z"
                      fill="#FEF9F9"
                    />
                    <path
                      d="M16.2437 12.1137L16.2439 12.1137C16.473 12.33 16.7294 12.5019 17.0047 12.6303C18.2895 13.2294 19.9776 12.8782 21.1256 11.6638C21.7865 10.9649 22.1763 10.0817 22.2231 9.1772C22.2722 8.23053 21.9445 7.37386 21.3004 6.76479C20.6561 6.15605 19.7819 5.87691 18.8394 5.97926C17.9389 6.07718 17.0793 6.51599 16.4189 7.21518C15.0251 8.68985 14.9466 10.8873 16.2437 12.1137ZM17.4413 8.18148C17.8726 7.72497 18.423 7.43976 18.9915 7.37795C19.5174 7.32074 19.9943 7.46614 20.3341 7.78723C20.6736 8.1084 20.8455 8.57605 20.8181 9.10434C20.7885 9.67522 20.5348 10.241 20.1032 10.6974C19.2422 11.6083 17.9444 11.785 17.2102 11.0913C16.4768 10.3977 16.5804 9.09242 17.4413 8.18148Z"
                      fill="#FEF9F9"
                    />
                    <path
                      d="M23.1699 14.8269L23.1696 14.8262C22.3732 13.3622 20.3748 12.9039 18.7144 13.8049C17.0546 14.707 16.3507 16.6321 17.145 18.0959C17.4346 18.6299 17.8843 19.0304 18.4193 19.2798C19.3518 19.7147 20.5439 19.6911 21.6004 19.1182C23.2601 18.2161 23.9642 16.2911 23.1699 14.8269ZM20.9293 17.8818C19.9491 18.4133 18.8064 18.2084 18.3816 17.4249C17.9569 16.6424 18.4076 15.5729 19.3859 15.0411C20.0359 14.6884 20.7581 14.6603 21.2949 14.9107C21.5664 15.0373 21.7906 15.2351 21.9337 15.4984C22.3576 16.2812 21.9069 17.3503 20.9293 17.8818Z"
                      fill="#FEF9F9"
                    />
                  </svg>
                </ModalBtn>
                <BtnCloseModal onClick={() => setIsModal(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 5L5 19M5.00004 5L19 19"
                      stroke="#54ADFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </BtnCloseModal>
              </ModalConteiner>
            </Modal>
          )}
        </UserFormBox>
      </UserPageItem>
    </>
  );
};

export default UserData;
