document.addEventListener('DOMContentLoaded', function () {

    // 수량 증가 및 감소
    let quantityInput = document.getElementById('quantityInput');
    let increaseQuantityBtn = document.getElementById('increaseQuantity');
    let decreaseQuantityBtn = document.getElementById('decreaseQuantity');
    let totalAmount = document.getElementById('totalAmount');
    let maxQuantity = 10;

    increaseQuantityBtn.addEventListener('click', function () {
        if (currentQuantity >= maxQuantity) {
            alert("더 이상 수량을 추가할 수 없습니다. (최대 수량 : 10)");
            return;
        }
        currentQuantity++;
        quantityInput.value = currentQuantity;
        updateTotalAmount();
    });

    decreaseQuantityBtn.addEventListener('click', function () {
        if (currentQuantity > 1) {
            currentQuantity--;
            quantityInput.value = currentQuantity;
            updateTotalAmount();
        }
    });

    quantityInput.addEventListener('change', function () {
        currentQuantity = parseInt(quantityInput.value, 10);
        updateTotalAmount();
    });

    // 옵션 선택
    let optionsDropdown = document.querySelector('select');

    optionsDropdown.addEventListener('change', function () {
        let selectedOptionValue = parseInt(optionsDropdown.value, 10);
        updateTotalAmount();
    });

    // 결제 금액 업데이트
    let unitPrice = 60000;
    let currentQuantity = parseInt(quantityInput.value, 10);
    let currentTotal = unitPrice * currentQuantity;

    function updateTotalAmount() {
        let selectedOptionValue = parseInt(optionsDropdown.value, 10);
        currentTotal = unitPrice * currentQuantity + selectedOptionValue;
        totalAmount.textContent = currentTotal.toLocaleString();
    }

    // 초기에 한 번 호출하여 초기화
    updateTotalAmount();

    // 작은 이미지 선택 시 상단 이미지 변경
    let subImages = document.querySelectorAll('.product_view .img li a');
    let mainImage = document.querySelector('.product_view .img img');


    subImages.forEach(function (image) {
        image.addEventListener('click', function () {
            let selectedImage = document.querySelector('.product_view .img li a.on');
            if (selectedImage) {
                selectedImage.classList.remove('on');
            }
            image.classList.add('on');
            let imagePath = image.querySelector('img').getAttribute('src');
            mainImage.setAttribute('src', imagePath);
        });
    });

    // 구매하기
    let purchaseBtn = document.querySelector('.btnPurchase');

    purchaseBtn.addEventListener('click', function () {
        purchase();
    });

    function purchase() {
        let totalAmountValue = document.getElementById('totalAmount').textContent;
        alert('구매가 완료되었습니다. 총 결제 금액: ' + totalAmountValue);
        // 여기에 구매 완료 후의 동작 추가
    }

    // 버튼 클릭 시 상단 이동
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    });
});
