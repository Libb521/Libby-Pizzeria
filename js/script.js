$(document).ready(function () {
    $('.summary').hide();
    $('.customer-overlay').hide();
    //Get inputs
    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        //Function order
        let order = (flavour, size, crust, topping, number, total) => {
            return {
                flavour,
                size,
                crust,
                topping,
                number,
                total
            };
        };

        switch (flavour) {
            case flavour = "veggie":
                switch (size) {
                    case size = "regular":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "medium":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "large":
                        price = 750;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "small":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                }
                break;
            case flavour = "chickentikka":
                switch (size) {
                    case size = "small":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                }
                break;
            case flavour = "periperi":
                switch (size) {
                    case size = "small":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                }
                break;
            case flavour = "bbq":
                switch (size) {
                    case size = "small":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                }
                break;
            case flavour = "Veggie":
                switch (size) {
                    case size = "small":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                }
                break;
            case flavour = "hawaiian":
                switch (size) {
                    case size = "small":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                }
                break;
            case flavour = "mushroom":
                switch (size) {
                    case size = "small":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                }
                break;
            case flavour = "pepperoni":
                switch (size) {
                    case size = "small":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 190;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
                }
                break;
        }
        switch (topping) {
            case topping = "tomato":
                totalPrice = totalPrice + 50;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 50;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 60;
                break;
            case topping = "greenpepper":
                totalPrice = totalPrice + 70;
                break;
            case topping = "olives":
                totalPrice = totalPrice + 150;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 70;
                break;
            case topping = "sweetcorn":
                totalPrice = totalPrice + 80;
                break;
            case topping = "bacon":
                totalPrice = totalPrice + 100;
                break;
            case topping = "mince":
                totalPrice = totalPrice + 150;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 150;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 100;
                break;

        }

        //Execute order function
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder);

        //Write to the order
        $('#summary').slideDown(2000);
        $('.customer-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   " +
            newOrder.size + "<br>" + "Crust :     " +
            newOrder.crust + "<br>" + "Toppings :     " +
            newOrder.topping + "<br>" + " Number of pizzas :    " +
            newOrder.number + "<br>" + "Total Price :  " +
            newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px').hide;
    });

    //Deliver
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);
        $('.customer-overlay').slideDown();
    });
    //Pick Up
    $(".delivernot").click(function () {});
    //Scrollify
    $(function () {
        $.scrollify.move('#sum-order');
    });

    //Form Validation
    $("form.form-group").on('submit', function (event) {
        event.preventDefault();
        let name = $("input#name").val();
        let phone = $("input#phone").val();
        let location = $("input#location").val();

        if ($("input#name").val() && $("input#phone").val() && $("input#location").val()) {
            alert("Hey " + name + ", Your order has been received and will be delivered at " + location + ",at Ksh.100 more!")
            event.allowDefault();
        } else {
            alert("Thank you very much for choosing us, enjoy your customized Pizza")
            event.preventDefault();
        }

    });

});