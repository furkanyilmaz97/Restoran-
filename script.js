var girisYapPopup = document.getElementById('girisYapPopup')
var girisPopupKapat = document.getElementById('girisPopupKapat')

var uyeOlPopup = document.getElementById('uyeOlPopup')
var uyePopupKapat = document.getElementById('uyePopupKapat')

var girisYapBtn = document.getElementById('girisYapBtn')

var uyeOlBtn = document.getElementById('uyeOlBtn')

girisYapBtn.addEventListener('click', function () {
    girisYapPopup.style.display = 'block'
})

girisPopupKapat.addEventListener('click', function () {
    girisYapPopup.style.display = 'none'
})


uyeOlBtn.addEventListener('click', function () {
    uyeOlPopup.style.display = 'block'
})

uyePopupKapat.addEventListener('click', function () {
    uyeOlPopup.style.display = 'none'
})


document.getElementById('girisYap').addEventListener('click', function () {
    anasayfayaGit()
})
document.getElementById('uyeOl').addEventListener('click', function () {
    anasayfayaGit()
})

function anasayfayaGit() {
    alert("Hoşgeldiniz");
    window.location.href = 'index.html'
}

if (document.querySelector('.detay-resim-alani')) {
    document.querySelector('.detay-resim-alani').addEventListener('click', function (e) {
        if (e.target.getAttribute('src')) {
            var src = e.target.getAttribute('src')
            console.log(src)
            document.getElementById('buyukResimPopup').style.display = 'block'
            document.getElementById('buyukResim').src = src
        }
    })


    document.getElementById('buyukResimPopupKapat').addEventListener('click', function () {
        document.getElementById('buyukResimPopup').style.display = 'none'
    })
}


document.getElementById('mutfakSelect').addEventListener('change', function (e) {
    console.log(e.target.value)
    var restoranlar = document.querySelectorAll('.restoranlar ul a')
    forEach(restoranlar, function (index, value) {
        if (e.target.value !== '0') {
            if (value.getAttribute('data-tip') === e.target.value) {
                value.style.display = 'block'
            } else {
                value.style.display = 'none'
            }
        } else {
            value.style.display = 'block'
        }

    })
})


var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
}
