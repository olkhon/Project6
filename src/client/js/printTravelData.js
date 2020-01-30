/* function to print only the relevant travel data for the trip, in this case content of div datacontainer
function logic originally found on https://gist.github.com/andrewlimaza/490a69417d9fe2df3f668195a7661605 

*/


function printData() {

    let toBePrinted = document.getElementById('dataContainer').innerHTML;
    let allContent = document.body.innerHTML;

    document.body.innerHTML = toBePrinted;

    window.print();

    document.body.innerHTML = allContent;
}


export { printData }