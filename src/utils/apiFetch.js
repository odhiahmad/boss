import Swal from "sweetalert2";

export async function filterFetch(url, options) {
  return await fetch(url, options)
    .then((respone) => {
      if (respone.status === 500) {
        throw new Error("Error Internal Server");
      }
      return respone.json();
    })
    .catch((err) => {
      throw new Error(`Error Internal Server ${err}`); //kalo balikannya dari backend HTML
    })
    .then((json) => {
      if (json.status === 401) {
        Swal.fire({
          text: json.message,
          icon: "warning",
          showCancelButton: false,
          showConfirmButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            window.sessionStorage.clear();
            location.reload();
          }
        });
      } else if (json.status === false) {
        throw new Error(json.message);
      } else if (json.status === "Bad Request") {
        Swal.fire({
          text: json.message,
          icon: "warning",
          showCancelButton: false,
          showConfirmButton: true,
        });
      }
      return json;
    });
}
