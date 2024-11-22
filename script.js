// chat-widget.js

// Load styles dynamically
const style = document.createElement('style');
style.innerHTML = `<style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #F4F4F4;
      }
      /* Main Content */
      .content {
        padding: 20px;
        height: 1500px; /* To make the page scrollable */
      }
      h1 {
        font-size: 36px;
        color: #333;
      }
      p {
        font-size: 18px;
        line-height: 1.6;
        color: #555;
      }
      /* Chat Widget Container */
      #chat-widget-container {
        position: fixed;
    bottom: -16px;
    right: 20px;
    width: 355px;
    height: 628px;
    z-index: 9999;
    display: block;
      }
      /* Chat Widget Iframe */
      #chat-widget-iframe {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 8px;
      }
       @media screen and (max-width: 600px) {
        #chat-widget-container {
          position: fixed;
          bottom: 0;
          right: -2px;
          width: 100vw;
          height: 100vh;
          z-index: 9999;
          display: block;
        }
        .main-section {
          width: 100vw;
          height: 100vh !important;
        }
        .main-video {
          width: 100vw;
          height: 100vh;
        }
        .start-chat-div {
          bottom: -23%;
        }
        .botWidget-container {
          width: 100vw;
          height: 100vh;
        }
      }
    </style>`;
document.head.appendChild(style);

// Create the chat widget
const chatWidget = document.createElement('div');
chatWidget.innerHTML = `<div id="chat-widget-container">
      <iframe src="https://storage.googleapis.com/widget-template/dist/index.html"
        id="chat-widget-iframe"
        frameborder="0"></iframe>
    </div>`;
document.body.appendChild(chatWidget);
