function send_message_handle(e) {
  if (!connection || !connection.readyState) return 0;

  const chat_input_el = document.getElementsByClassName("msger-input")[0];
  const value = chat_input_el.value;
  connection.send(value);
    
  apeend_chat_bubble_message(value, 'right');

  chat_input_el.value = "";
  return 1;
}
