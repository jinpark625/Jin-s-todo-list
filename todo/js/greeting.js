const userName = document.querySelector('.userTodo');
const imgBtn = document.getElementById('img-btn');
const imgBtnInput = document.getElementById('img-upload');
const preview = document.querySelector('.preview');
const displayNone = document.querySelector('.displayNone');
const imgFile = document.createElement('img');
const IMG_LS = "profile";
const userImg = imgBtn.querySelector('img');


// greeting
function loadName(){
    const localUser = localStorage.getItem('currentUser');
    userName.innerHTML = `${localUser}'s Todo List`;   
}
function init(){
    loadName();
}
init();

// profile pic
imgBtn.addEventListener('click', function(){
    imgBtnInput.click();
});
imgBtnInput.addEventListener('change', function(){
  const curFiles = imgBtnInput.files;
  const imgChild = imgBtn.children[1];

    while(imgBtn.children.length > 1){
        imgBtn.removeChild(imgChild);
        localStorage.removeItem(IMG_LS);
    }
    if(curFiles.length === 0){
        alert('No files currently selected for upload');
    } else {
        imgBtn.appendChild(imgFile);
        for(const file of curFiles){        
            if(validFileType(file)){
                imgFile.src = URL.createObjectURL(file);
                preview.classList.add('displayNone');

                const reader = new FileReader();
                reader.addEventListener('load', ()=>{
                    localStorage.setItem(IMG_LS, reader.result);
                    // console.log(reader.result);
                })
                reader.readAsDataURL(file);
            
            }else {
                alert('Not a valid file type. Update your selection.')
            }  
        }
    }
})
const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
  ];
function validFileType(file) {
    return fileTypes.includes(file.type);
}

document.addEventListener('DOMContentLoaded', ()=>{
    const recentImageDataUrl = localStorage.getItem(IMG_LS);
    if(recentImageDataUrl){
        imgBtn.appendChild(imgFile);
        imgFile.src = recentImageDataUrl;
        preview.classList.add('displayNone');
    }
});