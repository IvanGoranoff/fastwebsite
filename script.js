document.addEventListener("DOMContentLoaded", function () {
    // Закупуване
    var purchaseForm = document.getElementById("purchase-form");
    purchaseForm.addEventListener("submit", function (event) {
        event.preventDefault();  // Предотвратява подразбиращото се поведение на формата (изпращане на страницата)
        var name = document.getElementById("name").value;
        alert(name + ", благодарим за поръчката!");
    });

    // Ревюта
    var reviewForm = document.getElementById("review-form");
    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();  // Предотвратява подразбиращото се поведение на формата (изпращане на страницата)
        var review = document.getElementById("review").value;
        var reviews = document.getElementById("reviews");

        // Създава нов елемент <p> с текста от формата за ревюта и го добавя към #reviews
        var newReview = document.createElement("p");
        newReview.textContent = review;
        reviews.appendChild(newReview);

        // Изчиства формата
        reviewForm.reset();
    });
});
