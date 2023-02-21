var firebaseConfig = {
    apiKey: "AIzaSyBe_MQ_xIe4SsMXr3nJPoI_vAgOw0-S1q8",
    authDomain: "kwitter-56296.firebaseapp.com",
    databaseURL: "https://kwitter-56296-default-rtdb.firebaseio.com",
    projectId: "kwitter-56296",
    storageBucket: "kwitter-56296.appspot.com",
    messagingSenderId: "96304415654",
    appId: "1:96304415654:web:47f99573f69c38e0114567"
  };
  

firebase.initializeApp(firebaseConfig);

function addRoom(){
  room_name= document.getElementById("addroom").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding a room"
  });
   localStorage.setItem("room_name" , room_name);
   window.location= "chat_page.html";
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location= "chat_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;

      console.log("Room name-" + Room_names);
      row= "<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      
      });});}
getData();