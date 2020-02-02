function deleteJourney() {

    document.getElementById('deleteButton').addEventListener('click', function() {
        document.getElementById('picDiv').innerHTML = "";
        document.getElementById('textDiv').innerHTML = "";
        document.getElementById("deleteButton").remove();
        document.getElementById("printButton").remove();
    });
}

export { deleteJourney }