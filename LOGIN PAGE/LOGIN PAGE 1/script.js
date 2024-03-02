const signinbtnlink=document.querySelector('.signinbtn_link');
const signupbtnlink=document.querySelector('.signupbtn_link');
const wrapper=document.querySelector('.wrapper');
signupbtnlink.addEventListener('click',() =>
{
    wrapper.classList.toggle('active');
}
)
signinbtnlink.addEventListener('click',() =>
{
    wrapper.classList.toggle('active');
}
)