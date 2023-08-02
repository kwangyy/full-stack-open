sequenceDiagram
    participant browser
    participant server

    browser->>server: POST '/new_note_spa'
    activate server

    Note right of browser: JSON posting: {
    content: e.target.elements[0].value,
    date: new Date(),
  }

    server-->>browser: Note created
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes