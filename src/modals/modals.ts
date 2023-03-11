import "react-toastify/dist/ReactToastify.css";
import { toast, ToastOptions } from "react-toastify";

interface displayToastProps {
  message: string;
  type: "success" | "error" | "warning";
}

export const displayToast = ({ message, type }: displayToastProps) => {
  const toastStructure: ToastOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  switch (type) {
    case "success":
      toast.success(message, { ...toastStructure });
      break;
    case "error":
      toast.error(message, { ...toastStructure });
      break;
    case "warning":
      toast.warning(message, { ...toastStructure });
      break;
    default:
      toast.info(message, { ...toastStructure });
      return;
  }
};
