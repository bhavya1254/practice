
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_GAUJAU-2VzViZXjraX4pH99m6uC8znM",
    authDomain: "kwitter-90da2.firebaseapp.com",
    databaseURL: "https://kwitter-90da2-default-rtdb.firebaseio.com",
    projectId: "kwitter-90da2",
    storageBucket: "kwitter-90da2.appspot.com",
    messagingSenderId: "243618268507",
    appId: "1:243618268507:web:597cda0fcd7ab3c1a7867e"
  };
  firebase.initializeApp(firebaseConfig);

 function addUser()
 {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
 }  