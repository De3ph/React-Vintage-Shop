import swal from "sweetalert";

const fireAlert = (title) => {
  const alertItem = swal({
    title: title,
    text: " ",
    icon: "success",
    button: "Keep shopping",
  });

  return alertItem;
}

export { fireAlert };