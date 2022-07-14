import { toast } from "react-toastify";

export const SuccessToastify = (message, time = 3000) => {
  toast.success(message, {
    position: "top-right",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}

export const ErrorToastify = (message, time = 3000) => {
  toast.success(message, {
    position: "top-right",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}

export const NormalToastify = (message, time = 3000) => {
  toast(message, {
    position: "top-right",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}