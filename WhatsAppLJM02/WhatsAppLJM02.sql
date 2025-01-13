    USE whatsappljm02;
CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    names VARCHAR(255),
    lastNames VARCHAR(255),
    img_x2 VARCHAR(255),
    img_x3 VARCHAR(255),
    img_x4 VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255), -- Deberás manejar la encriptación AES en tu aplicación
    createdAt TIMESTAMP
);

-- Crear la tabla "chats"
CREATE TABLE chats (
    id VARCHAR(255) PRIMARY KEY,
    type VARCHAR(255),
    createdAt TIMESTAMP
);

-- Crear la tabla "members"
CREATE TABLE members (
    chat_id VARCHAR(255),
    user_id VARCHAR(255),
    FOREIGN KEY (chat_id) REFERENCES chats(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Crear la tabla "messagesTypes"
CREATE TABLE messagesTypes (
    id VARCHAR(255) PRIMARY KEY,
    type VARCHAR(255)
);

-- Crear la tabla "messages"
CREATE TABLE messages (
    id VARCHAR(255) PRIMARY KEY,
    chat_id VARCHAR(255),
    message TEXT,
    type VARCHAR(255),
    sendedAt TIMESTAMP,
    FOREIGN KEY (chat_id) REFERENCES chats(id),
    FOREIGN KEY (type) REFERENCES messagesTypes(id)
);
