let buttons = document.querySelectorAll("button");
buttons.forEach((el) => {
  el.addEventListener("click", () => {
    switch (el.innerText) {
      case "uppercase":
        capitalize();
        break;
      case "lowercase":
        lower();
        break;
      case "italic":
        italic();
        break;
      case "bold":
        bolder();
        break;
      case "clear":
        clear();
        break;
    }
  });
});
function capitalize() {
  let text = document.getElementById("text").value;
  let result = text.toUpperCase();

  document.getElementById("text").value = result;
}
function lower() {
  let text = document.getElementById("text").value;
  let result = text.toLowerCase();

  document.getElementById("text").value = result;
}
function italic() {
  document.getElementById("text").style.fontStyle = "italic";
}
function bolder() {
  document.getElementById("text").style.fontWeight = "bold";
}
function clear() {
  document.getElementById("text").value = "";
}
let align_left = document.getElementById("left");
align_left.addEventListener("click", () => {
  document.getElementById("text").style.textAlign = "left";
});
let align_right = document.getElementById("right");
align_right.addEventListener("click", () => {
  document.getElementById("text").style.textAlign = "right";
});
let align_center = document.getElementById("center");
align_center.addEventListener("click", () => {
  document.getElementById("text").style.textAlign = "center";
});

let textEle = document.getElementById("text");
let saveBtn = document.getElementById("save");

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(textEle.value);
  const textData = textEle.value;
  const textDataBlob = new Blob([textEle.value], { type: "text/plain" });

  const downloadUrl = window.URL.createObjectURL(textDataBlob);

  const downloadLink = document.createElement("a");
  let filename = prompt(" File name");

  downloadLink.download = filename;
  downloadLink.href = downloadUrl;
  downloadLink.click();
});
