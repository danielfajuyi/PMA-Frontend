import { usePaystackPayment } from "react-paystack";

const HandlePayment = ({ config, isError, sendForm, handleModal }) => {
  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    console.log(reference);
    handleModal("confirm-payment");
    sendForm();
  };

  const onClose = () => {
    handleModal("close-payment");
  };

  return (
    <button
      style={{
        backgroundColor: !isError ? "#ff007a" : "#808080",
        color: "#fff",
      }}
      onClick={() => {
        console.log("clicked");
        isError
          ? handleModal("sign-up-Err")
          : initializePayment(onSuccess, onClose);
      }}
      className="sign-up-btn bold-text colored-hover"
      type="button"
    >
      Continue
    </button>
  );
};

export default HandlePayment;
