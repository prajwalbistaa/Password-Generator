document.addEventListener("DOMContentLoaded", function () {
  const word = document.getElementById("password");
  const button = document.getElementById("generate");
  const button1 = document.getElementById("generate1");
  const passwordList = document.getElementById("password-list");

  function addPasswordToList(password) {
    if (!passwordList || !password) {
      return;
    }

    const passwordItem = document.createElement("div");
    passwordItem.className = "password-item";

    const passwordText = document.createElement("span");
    passwordText.className = "generated-password";
    passwordText.textContent = password;

    const copyButton = document.createElement("button");
    copyButton.className = "password-action";
    copyButton.type = "button";
    copyButton.textContent = "Copy";
    copyButton.addEventListener("click", async function () {
      await navigator.clipboard.writeText(password);
      copyButton.textContent = "Copied";
      setTimeout(function () {
        copyButton.textContent = "Copy";
      }, 1200);
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "password-action";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      passwordItem.remove();
    });

    passwordItem.append(passwordText, copyButton, deleteButton);
    passwordList.appendChild(passwordItem);
  }

  if (button) {
    button.addEventListener("click", function () {
      const typedword = word.value.trim();

      if (typedword.length < 6) {
        alert("Please enter a word with at least 6 characters.");
        return;
      } else {
        const characters = "0123456789!@#$%^&*()";
        let passphrase = "";
        passphrase = typedword.slice(0, 3);

      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        passphrase += characters[randomIndex];
      }
      passphrase += typedword.slice(3, 6);

      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        passphrase += characters[randomIndex];
      }
        addPasswordToList(passphrase);
      }
    });
  }

  if (button1) {
    button1.addEventListener("click", function () {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
      let password = "";

      for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }
      addPasswordToList(password);
    });
  }
});
