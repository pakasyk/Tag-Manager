let left = [];
let right = [];

document.querySelector('input').addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13){
      addTag();
    }
  });


let addTag = () => {
    if (document.querySelector('input').value == ""){
        alert('input field is empty');
    } else {
        left.push(document.querySelector('input').value);
        document.querySelector('.left').innerHTML += `<div class="hashtag" onclick="moveTag(this)">#${left[left.length - 1]}</div>`;
        document.querySelector('input').value = "";
        document.querySelector('input').focus();
    }
}

let moveTag = (element) => {
    for (let i = 0; i < left.length; i++){
        if (left[i] == element.innerText.substr(1)){
            left.splice(i, 1);
            element.remove();
            right.push(element.innerText.substr(1));
            document.querySelector('.right').innerHTML += `<div class="hashtag" ondblclick="doubleTag(this)">#${right[right.length - 1]}</div>`;
            break;
        }
    }
    document.querySelector('input').focus();
}

let doubleTag = (element) => {
    for (let i = 0; i < right.length; i++){
        if (right[i] == element.innerText.substr(1)){
            right.push(element.innerText.substr(1));
            document.querySelector('.right').innerHTML += `<div class="hashtag" ondblclick="doubleTag(this)">#${right[right.length - 1]}</div>`;
            break;
        }
    }
    document.querySelector('input').focus();
}

