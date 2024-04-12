
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  import {ref ,update , onValue , set ,getDatabase} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.11.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDBbNX7QcAwW5b2QEmWG-UFs1CV32ybnpg",
    authDomain: "group-a8319.firebaseapp.com",
    databaseURL: "https://group-a8319-default-rtdb.firebaseio.com",
    projectId: "group-a8319",
    storageBucket: "group-a8319.appspot.com",
    messagingSenderId: "284014252449",
    appId: "1:284014252449:web:aeab8d714f77c22559bbe0",
    measurementId: "G-HKXYS2TFRQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);

  onValue(ref(db,"ID1"),(snapshot)=>{
    let data = snapshot.val()
    console.log(data);
    document.getElementById("id1").innerHTML= data;
  })

  onValue(ref(db,"ID2"),(snapshot)=>{
    let data = snapshot.val()
    console.log(data);
    document.getElementById("id2").innerHTML= data;
  })

  onValue(ref(db,"ID3"),(snapshot)=>{
    let data = snapshot.val()
    console.log(data);
    document.getElementById("id3").innerHTML= data;
  })

  onValue(ref(db,"Status"),(snapshot)=>{
    let data = snapshot.val()
    console.log(data);
    document.getElementById("status").innerHTML= data;
  })

  onValue(ref(db,"Status2"),(snapshot)=>{
    let data = snapshot.val()
    console.log(data);
    document.getElementById("status2").innerHTML= data;
  })

  onValue(ref(db,"Status3"),(snapshot)=>{
    let data = snapshot.val()
    console.log(data);
    document.getElementById("status3").innerHTML= data;
  })
