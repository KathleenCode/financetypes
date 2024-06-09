"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invoice_js_1 = require("./classes/invoice.js");
var payment_js_1 = require("./classes/payment.js");
var listTemplate_js_1 = require("./classes/listTemplate.js");
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payment("mario", "plumbing work", 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// const invoiceOnett = new Invoice("Mario", "worked on site", 250);
// let invoicesrrew: Invoice[] = [];
// invoicesrrew.push(invoiceOnett); 
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
var ul = document.querySelector("ul");
var list = new listTemplate_js_1.ListTemplate(ul);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var doc;
    if (type.value === "invoice") {
        doc = new invoice_js_1.Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment_js_1.Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
