const messagesContainer = document.getElementById('messages');
const inputField = document.getElementById('input');

function sendMessage() {
  const messageText = inputField.value;
  if (messageText) {
    const messageElement = document.createElement('div');
    messageElement.innerText = messageText;
    messagesContainer.appendChild(messageElement);
    inputField.value = '';
  }
}
