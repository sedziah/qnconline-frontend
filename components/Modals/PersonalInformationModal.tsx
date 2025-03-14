import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { IoClose } from "react-icons/io5";
import CustomInput from "../Inputs/CustomInput";
import ReactCountryDropdown from "react-country-dropdown";

type PropType = {
  open: boolean;
  onCloseModal: () => void;
};

const PersonalInformationModal = ({ onCloseModal, open }: PropType) => {
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      showCloseIcon={false}
      styles={{
        modalContainer: {
          zIndex: 9999,
        },
        modal: {
          borderRadius: 10,
          background: "#f8f9fc",
        },
      }}
    >
      <div className="w-96 md:w-[30rem] lg:w-[40rem]">
        <div className="flex flex-row items-center justify-between py-3 border-b border-lightGray">
          <div className="w-10"></div>
          <p className="text-sm text-center text-black">Personal Information</p>
          <button
            onClick={onCloseModal}
            className=" hover:bg-lightGray/10 rounded-full items-center text-base  flex justify-center w-10 h-10 text-black font-normal capitalize"
          >
            <IoClose size={25} />
          </button>
        </div>
        <div className="my-10 space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3">
            <CustomInput
              labal="First Name"
              onChange={(e) => {}}
              value=""
              type="text"
              placeholder=""
            />
            <CustomInput
              labal="Last Name"
              onChange={(e) => {}}
              value=""
              type="text"
              placeholder=""
            />
          </div>
          <CustomInput
            labal="Email"
            onChange={(e) => {}}
            value=""
            type="email"
            placeholder=""
          />

          <div className="flex flex-row items-center w-full rounded-lg border border-lightGray">
            <ReactCountryDropdown
              defaultCountry="JP"
              onSelect={(country) => console.log(country.name)}
            />
            <div className="flex-1 w-full border-l border-lightGray">
              <CustomInput
                labal="Phone Number - Optional"
                onChange={(e) => {}}
                value=""
                type="tel"
                placeholder=""
                className={{
                  input:
                    "block px-2.5 pb-2 pt-5 w-full text-sm text-black hover:bg-lightGray/20 appearance-none focus:outline-none focus:ring-0 focus:border-lightGray peer",
                }}
              />
            </div>
          </div>
        </div>

        <button className="h-12 bg-primary w-full rounded-full flex items-center justify-center text-white hover:bg-primary/90">
          Save
        </button>
      </div>
    </Modal>
  );
};

export default PersonalInformationModal;
