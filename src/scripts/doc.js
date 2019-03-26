//Create an object that represents a bill from your doctor's office. 
//It should have the following properties: officeName, streetAddress, doctorName, 
//patientName, visitDate, amountBilled, dueDate. 
//You provide example values for each one.




const docBill = {
    officeName: "getWell",
    streetAddress: "123 mountain way",
    doctorsName: "Dr. william",
    patientName: "fred",
    visitdate: "03-26-2019",
    amountBilled: 145.00,
    dueDate: "05-25-2019"

}
const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

console.log("dateVisited", doctorBill[dateVisited])
console.log("amount owed", doctorBill[owed])
console.log("patient name", docotrBill[patient])



//Use square bracket notation to output the value of those three 
//properties to the console in Chrome.
//Lightning Exercise 3: Use Object.values() to output all the 
//property values to the console in Chrome.



for (const value of Object.values(doctorsBill)) {
    console.log(value)
}