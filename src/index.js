import React from "react";
import ReactDOM from "react-dom";
import md5 from "md5";
import EmailValidator from "./email-validator";
import "../styles/app.css";

function AppHeader() {
  return (
    <header className="ui fixed menu">
      <nav class="ui container">
        <a class="header item">
          <img
            class="logo"
            alt="logo"
            src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png"
          />
          List kontaktów
        </a>
        <div class="header item">
          <button class="ui button">Dodaj</button>
        </div>
      </nav>
    </header>
  );
}

function ContactList() {
  return (
    <ul class="ui relaxed divided list selection">
      <ContactItem
        login="typeofweb1"
        name="Lena"
        department="JavaScript Developer"
      />
      <ContactItem
        login="typeofweb2"
        name="Brian"
        department="Human Resources"
      />
      <ContactItem login="typeofweb3" name="Rick" department="QA" />
      <ContactItem login="scott@hanselman.com" name="Rick" department="QA" />
    </ul>
  );
}

function ContactItem({ login, name, department }) {
  return (
    <li class="item">
      <Avatar login={login} />
      <div class="content">
        <h4 class="header">{name}</h4>
        <div class="description">{department}</div>
      </div>
    </li>
  );
}

function Avatar({ login }) {
  var avatarImgSrc = `https://api.adorable.io/avatars/55/${login}.png`;

  if (new EmailValidator().validateEmail(login)) {
    const emailHash = md5(login.trim());
    avatarImgSrc = `https://s.gravatar.com/avatar/${emailHash}?s=80&amp;r=g`;
  }

  return (
    <img
      alt="lena avatar"
      src={avatarImgSrc}
      className="ui mini rounded image"
    />
  );
}

function App() {
  return (
    <div>
      <AppHeader />
      <main class="ui main text container">
        <ContactList />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
