const jumpscare = document.querySelector(".scare")
const freddy = document.querySelector("#videoeaster")
const elEaster = document.querySelector("#easter")

elEaster.addEventListener("click", Scare)

function Scare () {
    jumpscare.style.display = "block"
    
}
freddy.addEventListener("ended", fecharjump);

function fecharjump() {
    jumpscare.style.display = "none"
}

const button = document.getElementById('button')
const navigation = document.querySelector('.navigation')

function handleClick() {
  button.classList.toggle('active')
  navigation.classList.toggle('active')
}