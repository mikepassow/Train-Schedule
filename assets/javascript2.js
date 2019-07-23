

$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyBNM4mVUjkwlyePT9iPkEsAwv_ta4XzuEM",
        authDomain: "train-schedule-b3cde.firebaseapp.com",
        databaseURL: "https://train-schedule-b3cde.firebaseio.com",
        projectId: "train-schedule-b3cde",
        storageBucket: "",
        messagingSenderId: "956676257425",
        appId: "1:956676257425:web:85b890ec40faa62a"
    };
    firebase.initializeApp(config);

    // A variable to reference the database.
    var database = firebase.database();

    
    // Variables for the onClick event
    var name;
    var destination;
    var firstTrain;
    var frequency = 0;

    $("#add-train").on("click", function() {
        event.preventDefault();
        // Storing and retreiving new train data
        name = $("#train-name").val().trim();
        destination = $("#destination").val().trim();
        firstTrain = $("#first-train").val().trim();
        frequency = $("#frequency").val().trim();

