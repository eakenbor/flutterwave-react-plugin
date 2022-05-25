import logo from './logo.svg';
import React, { useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import './App.css';
import UsingHook from "./UsingHook"
import Modal from "react-modal"

function App() {
  const [isEnterDonationVisible, setIsEnterDonationVisible] = useState(false);

  const openModal = () => {
    setIsEnterDonationVisible(true)
  }

  const closeModal = () => {
    setIsEnterDonationVisible(false)
    let script = document.getElementsByTagName("script")

    console.log(script)

    // script.map(element => {
    //   console.log(element.src)
    // });
  }
  const config = {
    public_key: 'FLWPUBK_TEST-dsdsdsdsdsdsds-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  }

  const handlePayment = useFlutterwave(config);

  return (
    <div className="App">
      <button onClick={() => openModal()} >
        Open Modal
      </button>

      <button onClick={() => closeModal()} >
        Close Modal
      </button>
      <Modal
        ariaHideApp={false}
        isOpen={isEnterDonationVisible}
        onRequestClose={() => setIsEnterDonationVisible(false)}
        className="modal max-width-620 padding-0"
        overlayClassName="modal-backdrop"
      >
        <div className="d-flex padding-8 padding-top-12 padding-top-sm-20 padding-bottom-12 padding-bottom-sm-20 padding-left-md-40 padding-right-md-40 justify-content-between align-items-center">
          <h1 className="font-size-20 font-size-md-22 dark-blue">
            Enter Donation Amount
          </h1>
          <i
            onClick={() => setIsEnterDonationVisible(false)}
            className="fa fa-close font-size-22 dark-blue cursor-pointer hover-red"
          ></i>
        </div>
        <div className="horizontal-line margin-0" />
        <div className="padding-8">
           <div
            style={{ maxHeight: "550px" }}
            className="overflow-scroll-y padding-0 padding-top-sm-10 padding-bottom-sm-20 padding-left-md-30 padding-right-md-30"
          >
            {isEnterDonationVisible &&
              <UsingHook
              isEnterDonationVisible={isEnterDonationVisible} setIsEnterDonationVisible={setIsEnterDonationVisible} />
            }
          </div> 

        </div>
      </Modal>

    </div>
  );
}

export default App;
