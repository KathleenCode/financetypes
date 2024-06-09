import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/listTemplate.js";
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
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Invoice(...values);
    }
    else {
        // doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
