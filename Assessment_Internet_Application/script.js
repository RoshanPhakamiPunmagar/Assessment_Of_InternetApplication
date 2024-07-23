//Execute code when DOM is fully loaded.
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        confirmation();
    });
});

//create a confirmation function
function confirmation() {
    var title = "<h1>Form Submitted</h1> <br>";

    // Get values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var awareness = document.getElementById("awareness").value;
    var comment = document.getElementById("comment").value;
    var role = document.getElementById("governmentRole").value;
    var sustainablePractices = document.getElementById("sustainability-practices").value;

    // Get selected options
    var selectState = document.getElementById("state").value;
    var selectSource = document.getElementById("source").value;
    var selectConcern = document.getElementById("concern").value;
    var selectSustainability = document.getElementById("sustainability").value;
    var selectOptimism = document.getElementById("optimism").value;
    var selectRenewable = document.getElementById("renewable").value;
    var selectTrust = document.getElementById("trust").value;
    var selectWillingness = document.getElementById("willingness").value;

    // Get radio button values
    var ele1 = document.getElementsByName("humanFactor");
    var category1;
    for (var i = 0; i < ele1.length; i++) {
        if (ele1[i].checked) {
            category1 = ele1[i].value;
        }
    }

    var ele2 = document.getElementsByName("activism");
    var category2;
    for (var i = 0; i < ele2.length; i++) {
        if (ele2[i].checked) {
            category2 = ele2[i].value;
        }
    }

    // Get checkbox values
    var checkbox1 = document.getElementsByName("actions");
    var values1 = [];
    for (var i = 0; i < checkbox1.length; i++) {
        if (checkbox1[i].checked) {
            values1.push(checkbox1[i].value);
        }
    }

    var checkbox2 = document.getElementsByName("support");
    var values2 = [];
    for (var i = 0; i < checkbox2.length; i++) {
        if (checkbox2[i].checked) {
            values2.push(checkbox2[i].value);
        }
    }

    // Display results using document.write
    document.write(title);
    document.write("Name: " + name + "<br>");
    document.write("Email: " + email + "<br>");
    document.write("Password: " + password + "<br>");
    document.write("Phone Number: " + phone + "<br>");
    document.write("State: " + selectState + "<br>");
    document.write("1. What sustainable practices do you engage in regularly to reduce your carbon footprint? " + sustainablePractices + "<br>");
    document.write("2. How aware are you of climate change? " + awareness + "<br>");
    document.write("3. Where do you get most of your information on climate change? " + selectSource + "<br>");
    document.write("4. Do you believe human activity is a significant contributing factor to climate change? " + category1 + "<br>");
    document.write("5. Which actions do you take to reduce your carbon footprint? " + values1.toString() + "<br>");
    document.write("6. Any suggestions on how to combat climate change? " + comment + "<br>");
    document.write("7. How concerned are you about the impacts of climate change on future generations? " + selectConcern + "<br>");
    document.write("8. Have you ever participated in environmental activism or advocacy? " + category2 + "<br>");
    document.write("9. How often do you engage in sustainable practices in your daily life? " + selectSustainability + "<br>");
    document.write("10. In your opinion, what role should governments play in addressing climate change? " + role + "<br>");
    document.write("11. How optimistic are you about the future of our planet in relation to climate change? " + selectOptimism + "<br>");
    document.write("12. How effective do you think renewable energy sources (solar, wind, etc.) are in combating climate change? " + selectRenewable + "<br>");
    document.write("13. How likely are you to support policies aimed at reducing carbon emissions? " + values2.toString() + "<br>");
    document.write("14. How much do you trust scientific research and data on climate change? " + selectTrust + "<br>");
    document.write("15. How willing are you to make lifestyle changes to reduce your carbon footprint? " + selectWillingness + "<br>");

    // Add a closing message
    document.write("<h2>Thank You for taking time to complete this survey.</h2>");
}
