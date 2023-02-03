const redirectBtn = document.getElementById("redirect");
const linkInput = document.getElementById("link_input");

// validity check
function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }


// redirection

function redirect() {
    const redirectLink = linkInput.value;
    switch (isValidUrl(redirectLink)) {
        case true:
            window.location.assign(redirectLink);
            console.log("works!")
            break;
        case false:
            window.location.assign("https://" + redirectLink);
            console.log("still works!")
            break;
    }
};

redirectBtn.addEventListener("click", redirect)
