//api: https://fkhadra.github.io/react-toastify/introduction
import { toast, ToastOptions } from 'react-toastify';
import styles from './index.less';

const config: ToastOptions = {
  autoClose: 3500,
  closeButton: false,
  icon: false,
  closeOnClick: false,
  hideProgressBar: true,
  position: 'top-center',
};
export default {
  removeAll: () => toast.dismiss(),
  success: (msg: string, options?: ToastOptions) => toast.success(msg, { ...config, ...options, className: styles['toast-success'] }),
  warn: (msg: string, options?: ToastOptions) => toast.warn(msg, { ...config, ...options, className: styles['toast-warn'] }),
  error: (msg: string, options?: ToastOptions) => toast.error(msg, { ...config, ...options, className: styles['toast-error'] }),
};
