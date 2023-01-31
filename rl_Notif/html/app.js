$(function () {
  window.onload = (e) => {
    let notify = 0;
    function start(notif) {
      let perc = 100;
      setInterval(() => {
        if (perc >= 0) {
          $(`.n-${notif}`).css("width", perc + "%");
        } else {
          $(`.${notif}`).fadeOut("fast");
        }
        perc--
      }, 50)
    }
    window.addEventListener("message", (event) => {
      var sound = new Audio('son.mp3');
      sound.volume = 1.0;
      var item = event.data;
      if (item !== undefined) {
        notify++
        document.getElementById("notifications").innerHTML +=
          '<div class="notification ' + notify +
          ' "><div class="notification-title"><p id="notfication-title-content"><font style="color:' +
          item.color +
          ';">' +
          item.title +
          '</font></p></div><div class="notification-message"><p id="notfication-message-content">' +
          item.message +
          '</p></div><center class="n-' + notify + '" style="background: ' +
          item.color +
          ' "></center></div>';
          sound.play();
          // console.log(`.${notify}`)

        start(notify)
      }
    });
  };
});
