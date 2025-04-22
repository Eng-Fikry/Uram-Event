//valid phone
function validatePhone() {
    var phone = document.getElementById("phone").value;
    var phoneError = document.getElementById("phoneError");

    // إزالة أي رموز غير الأرقام
    phone = phone.replace(/\D/g, '');

    // التحقق من رقم مصري صالح
    var egyptianPhonePattern = /^1[0125][0-9]{8}$/;

    if (egyptianPhonePattern.test(phone)) {
        phoneError.style.display = "none"; // الرقم صحيح
        phoneError.textContent = ""; // إفراغ الرسالة لو فيه رسالة سابقة
    } else {
        phoneError.style.display = "inline"; // إظهار رسالة الخطأ
        phoneError.textContent = "رقم الهاتف يجب ان يبدأ بـ 10 أو 11 أو 12 أو 15";
    }
}


//terms
function showPopup1() {
    document.getElementById("termsPopup").style.display = "flex";
}
function closePopup1() {
    document.getElementById("termsPopup").style.display = "none";
}


//insta
function showPopup2() {
    document.getElementById("instaPayPopup").style.display = "flex";
}
function closePopup2() {
    document.getElementById("instaPayPopup").style.display = "none";
}


//vodafone
function showPopup3() {
    document.getElementById("vodafonePopup").style.display = "flex";
}
function closePopup3() {
    document.getElementById("vodafonePopup").style.display = "none";
}

// function showPopup2(id) {
//     document.getElementById(id).style.display = "block";
//   }

//   function showPopup3(id) {
//     document.getElementById(id).style.display = "block";
//   }

//   function closePopup2(id) {
//     document.getElementById(id).style.display = "none";
//   }

//   function closePopup3(id) {
//     document.getElementById(id).style.display = "none";
//   }




function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function showModal(message, type) {
    document.getElementById("modal-message").innerHTML = message;

    if (type === 'success') {
        document.querySelector(".modal-content").style.backgroundColor = "#e0f7e0";
        document.getElementById("modal-icon").src = "images/check.png";
    } else {
        document.querySelector(".modal-content").style.backgroundColor = "#f7e0e0";
        document.getElementById("modal-icon").src = "images/close.png";
    }

    document.getElementById("modal").style.display = "block";
}


const card1 = document.querySelectorAll('.selectable-card');
card1.forEach(card => {
  card.addEventListener('click', () => {
    card1.forEach(c => c.classList.remove('selected')); // يشيل التحديد من الكل
    card.classList.add('selected'); // يضيف التحديد للكارد المضغوط
  });
});


const card2 = document.querySelectorAll('.selectable-card');
const paymentSection = document.getElementById('paymentSection');
const priceSpan = document.getElementById('coursePrice');

card2.forEach(card => {
    card.addEventListener('click', function () {
    const price = card.getAttribute('data-price');
    const title = card.getAttribute('data-title');
    document.getElementById("priceinsta").innerHTML = price;
    document.getElementById("pricevodafone").innerHTML = price;
    document.querySelector(".accept").classList.remove("none");

    
    priceSpan.textContent = price;
    paymentSection.style.display = 'block';
});
});
