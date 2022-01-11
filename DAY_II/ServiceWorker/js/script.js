if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("serviceworker.js").then(
      function () {
        console.log("Service Worker : Registered successfully !");
      },
      function (err) {
        console.log("Service Worker Error : ", err);
      }
    );
  });
}
