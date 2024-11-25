// script.js

document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatContainer = document.querySelector('.chat-container');
    const closeChat = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');
  
    // Toggle chat visibility
    chatToggle.addEventListener('click', () => {
      chatContainer.style.display = 'flex';
      chatToggle.style.display = 'none';
    });
  
    closeChat.addEventListener('click', () => {
      chatContainer.style.display = 'none';
      chatToggle.style.display = 'block';
    });
  
    // Send message
    sendBtn.addEventListener('click', () => {
      const userText = userInput.value.trim();
  
      if (userText === '') {
        alert('Please type a message.');
        return;
      }
  
      // Append user message
      const userMessage = document.createElement('div');
      userMessage.classList.add('user-message');
      userMessage.textContent = userText;
      chatMessages.appendChild(userMessage);
  
      // Bot reply placeholder
      setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.textContent = 'Thank you for reaching out. I’m here to assist you!';
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000);
  
      // Clear input
      userInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    });
  });
  