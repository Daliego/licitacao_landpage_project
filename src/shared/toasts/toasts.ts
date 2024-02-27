import { ToastOptions, toast } from 'react-toastify';

const toastOptions: ToastOptions = {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
};

const success = (message: string) => {
    toast.success(message, toastOptions);
}

const error = (message: string) => {
    toast.error(message, toastOptions);
}

const warn = (message: string) => {
    toast.warn(message, toastOptions);
}

const info = (message: string) => {
    toast.info(message, toastOptions);
}

const defaulToast = (message: string) => {
    toast(message, toastOptions);
}

const Toast = {success, error, warn, info, defaulToast};

export { Toast };