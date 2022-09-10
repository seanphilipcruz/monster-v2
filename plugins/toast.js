import Sweetalert2 from "sweetalert2";
import '@sweetalert2/theme-dark/dark.min.css';

const toast = Sweetalert2.mixin({
    toast: true,
    position: 'bottom-end',
    timer: 2500,
    showConfirmButton: false,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Sweetalert2.stopTimer);
        toast.addEventListener('mouseleave', Sweetalert2.resumeTimer);
    }
});

export default toast;
