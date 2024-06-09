import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/hasFormatter.js";
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



const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]

    if(type.value === "invoice") {
        // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Invoice(...values);
    } else {
        // doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Payment(...values);
    }

    list.render(doc, type.value, "end");
})
