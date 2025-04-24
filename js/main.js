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

 document.addEventListener('contextmenu', event => event.preventDefault());
 document.addEventListener('keydown', function (e) {
   if (
     e.key === "F12" ||
     (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
     (e.ctrlKey && e.key === "U")
   ) {
     e.preventDefault();
   }
 });

function togglePlaceField() {
  var outsideResidence = document.getElementById('outside');
  var placeField = document.getElementById('placeField');
  
  if (outsideResidence.checked) {
    placeField.style.display = 'block';
  } else {
    placeField.style.display = 'none';
    document.getElementById('place').value = '';
  }
}


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
    document.getElementById('coursetype').value=title;

    document.getElementById("priceinsta").innerHTML = price;
    document.getElementById("pricevodafone").innerHTML = price;
    document.querySelector(".accept").classList.remove("none");

    priceSpan.textContent = price;
    paymentSection.style.display = 'block';
});
});



//api
const baseUrl="https://script.google.com/macros/s/AKfycbx-RT0jTBiG_862Ld36niLZ5WIK_kxNq_oDkNa6CZXvdg8o1PhbXW7iafaoyy0EqUhZWQ/exec"
document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();
    document.getElementById("loadingOverlay").classList.remove("hidden");
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const name = `${firstName} ${lastName}`;
    const email = document.getElementById('email').value.trim();
  
    const residence = document.querySelector('input[name="residence"]:checked')?.value || '';
    let place = document.getElementById('place').value.trim();
    if(place === '') {place = 'غير محدد';}
    const birth = document.getElementById('birth').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
    const school = document.getElementById('School').value.trim();
    const grade = document.querySelector('input[name="grade"]:checked')?.value || '';
    const training = document.getElementById('training').value.trim();
    const coursetype = document.getElementById('coursetype').value.trim(); // hidden
    const phone = document.getElementById('phone')?.value?.trim() || ''; // اختياري لو موجود
    const accepted = document.getElementById('acceptTerms').checked;
  
    if (!accepted) {
      alert("يجب الموافقة على الشروط.");
      return;
    }
  
    const imgFile = document.getElementById('img')?.files?.[0];
  
    if (!imgFile) {
      alert('برجاء رفع صورة وصل الدفع.');
      return;
    }
  
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
  
    reader.onload = async function () {
      const base64String = reader.result.split(',')[1];
  
      try {
        const response = await fetch(baseUrl, {
          method: 'POST',
          body: new URLSearchParams({
            name,
            email,
            phone,
            residence,
            place,
            birth,
            gender,
            school,
            grade,
            training,
            coursetype,
            image: base64String
          })
        });
  
        const result = await response.json();
  
        if (result.result === 'success') {
          document.getElementById("loadingOverlay").classList.add("hidden");

          window.location.href = 'done.html';
        } else {
          document.getElementById("loadingOverlay").classList.add("hidden");

          alert('حدث خطأ: ' + result.error.message);
          console.log(result.error.message)

        }
      } catch (error) {
        document.getElementById("loadingOverlay").classList.add("hidden");
        console.log(error)

        alert('خطأ في الاتصال بالسيرفر.');
      }
    };
  });



