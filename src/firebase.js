//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMdCI0sLI-q-Alw90B4dUMGcgE80QrxZ8",
  authDomain: "chart-bulletinboard.firebaseapp.com",
  projectId: "chart-bulletinboard",
  storageBucket: "chart-bulletinboard.appspot.com",
  messagingSenderId: "562213170582",
  appId: "1:562213170582:web:43b3f55a1747ccd7b901b7",
  measurementId: "G-TN7SGLPE96",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
// const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export default firebase;
