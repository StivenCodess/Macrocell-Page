export const showToast  = (message, duration) => {
    Toastify({
        text: message,
        duration: duration,
        destination: "",
        newWindow: false,
        close: false,
        gravity: "top",
        position: "left",
        offset: {
            y: 60,
        },
        stopOnFocus: false,
        style: {
          background: "white",
          color:"black"
        }
      }).showToast();
}