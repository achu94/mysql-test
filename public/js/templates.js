function apeend_chat_bubble_message(msg, direction) {
  if (!msg || !direction) return false;

  const img_right =
    "background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg);";
  const img_left =
    " background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg);";

  let user = "";
  let img = "";

  if (direction === "right") {
    img = img_right;
    user = "Achu";
  } else {
    img = img_left;
    user = "Botti";
  }

  const humanReadableDate = new Date(Date.now()).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  const msg_wrapper = document.createElement("div");
  msg_wrapper.className = "msg " + direction + "-msg";

  const msg_img = document.createElement("div");
  msg_img.className = "msg-img";
  msg_img.style = img;

  const msg_buble = document.createElement("div");
  msg_buble.className = "msg-bubble";

  const msg_info = document.createElement("div");
  msg_info.className = "msg-info";

  const msg_name = document.createElement("div");
  msg_name.className = "msg-info-name";
  msg_name.innerHTML = user;

  const msg_time = document.createElement("div");
  msg_time.className = "msg-info-time";
  msg_time.innerHTML = humanReadableDate;

  const msg_value = document.createElement("div");
  msg_value.className = "msg-text";
  msg_value.innerHTML = msg;

  msg_info.appendChild(msg_time);
  msg_info.appendChild(msg_name);
  msg_buble.appendChild(msg_info);
  msg_buble.appendChild(msg_value);

  msg_wrapper.appendChild(msg_img);
  msg_wrapper.appendChild(msg_buble);

  document.getElementsByClassName("msger-chat")[0].appendChild(msg_wrapper).scrollTop = 0;

}
