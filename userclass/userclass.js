'use strict';

class User {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    login(username, password) {
        // validar el usuario y la contraseña  
        if (username === this.username && password === this.password) {
            alert("Welcome");
        } else {
            alert("Fail");
        }
    }

    resetPassword(password) {
        this.password = password;
    }

    updateInfo(email) {
        this.email = email;
    }
}

let user = new User('ruben', 'villa01', 'villa@gmail.com');

user.login('ruben', 'villa01');
user.resetPassword('ruben123');
user.login('ruben', 'ruben123'); // Corregí esta línea, ya que el método login solo toma dos parámetros
user.updateInfo("manuel123@gmail.com");
