
(function () {
  // Widget initialization and logic here

  // Function to append the widget to the DOM
  function appendWidget() {
    // Create the widget container element
    var widgetContainer = document.createElement('div');
    widgetContainer.id = 'chat-widget-container';

    // Append the widget container to the body of the website
    document.body.appendChild(widgetContainer);

    // Mount the React ChatWidget component to the widget container
    ReactDOM.render(React.createElement(ChatWidget), widgetContainer);
  }

  // Load React and ReactDOM libraries from a CDN
  function loadReact() {
    var reactScript = document.createElement('script');
    reactScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js';
    reactScript.async = true;
    reactScript.onload = loadReactDOM; // Wait for React to load, then load ReactDOM
    document.body.appendChild(reactScript);
  }
  
  function loadReactDOM() {
    var reactDOMScript = document.createElement('script');
    reactDOMScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js';
    reactDOMScript.async = true;
    reactDOMScript.onload = appendWidget; // Wait for ReactDOM to load, then append the widget
    document.body.appendChild(reactDOMScript);
  }
  

  // Load the chat widget stylesheet
  function loadStylesheet() {
    var stylesheet = document.createElement('style');
    stylesheet.innerHTML = `body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:0}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}
/*# sourceMappingURL=main.e6c13ad2.css.map*/`;
    document.head.appendChild(stylesheet);
  }

  // Load necessary dependencies and start widget initialization
  loadStylesheet();
  loadReact();
})();
