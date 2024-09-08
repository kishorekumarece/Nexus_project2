
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmP1F1V8vieFrK7Olrud9vIRg5Nahiik8",
    authDomain: "feedback-6681e.firebaseapp.com",
    databaseURL: "https://feedback-6681e-default-rtdb.firebaseio.com",
    projectId: "feedback-6681e",
    storageBucket: "feedback-6681e.appspot.com",
    messagingSenderId: "1000840791063",
    appId: "1:1000840791063:web:30cb9a4517fcbc1c164852"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const feedbackForm = document.querySelector('.contact-form');
feedbackForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.querySelector('input[name="full-name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const message = document.querySelector('textarea').value;

  try {
    const docRef = await addDoc(collection(db, 'feedback'), {
      name: name,
      email: email,
      phone: phone,
      message: message,
      timestamp: new Date()
    });
    
    console.log("Document written with ID: ", docRef.id);
    alert('Feedback submitted successfully!');
    feedbackForm.reset();
  } catch (error) {
    console.error('Error submitting feedback: ', error);
    alert('Failed to submit feedback.');
  }
});