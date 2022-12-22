let commentForm=document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field')
let i=1
commentForm.onsubmit = function (evt) {


evt.preventDefault();
let newComment = document.createElement('li');

if (i<1) {
    newComment.classList.add("user-comment");
}else newComment.classList.add("user-comment2")
commentList.append(newComment);


newComment.textContent = commentField.value;
commentField.value='';
if(i<1){
    i++;
}else i = 0
}

