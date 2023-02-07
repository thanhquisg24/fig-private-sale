import { ToastContainer } from "react-toastify";

export default function ToastAlert() {
  return <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />;
}
