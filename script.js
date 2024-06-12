
// const recForm = document.getElementById("rec-form");


// console.log(reviewText);
// console.log(reviewerName);

function leaveReview() {
    const recommendations = document.querySelector("#recommendations");
    console.log(recommendations);
    const recText = document.getElementById("rec-text").value;
    let recName = document.getElementById("rec-name").value;

    if (recName == "") {
        recName = "Anonymous";
    };

    const HTMLString = `<div class="rec">
        <p>"${recText}" - <i>${recName}</i></p>
    </div>`;

    recommendations.innerHTML += HTMLString;
    alert("Thank you for your recommendation!");
}

