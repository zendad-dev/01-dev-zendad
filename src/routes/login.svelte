<script lang='ts'>

    import { initializeApp } from "firebase/app";
    import { getAuth, getRedirectResult, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect } from "firebase/auth";
    const firebaseConfig = {
        apiKey: "AIzaSyBymINyZcWd_0mWmz2dqPoMPI-Io65OzQs",
        authDomain: "sveltekitauth007.firebaseapp.com",
        projectId: "sveltekitauth007",
        storageBucket: "sveltekitauth007.appspot.com",
        messagingSenderId: "705326568792",
        appId: "1:705326568792:web:ac257ecca558bf1767c12d",
        measurementId: "G-E1463GMFE9"
      };
    
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const login = async () => {
        //try {
          await signInWithRedirect(auth,provider);
      //signInWithPopup(auth, provider);
      //signInWithRedirect(auth, provider);
    // After returning from the redirect when your app initializes you can obtain the result
    const result = await getRedirectResult(auth);
       // } //catch (result){
    console.error();
    if (result) {
      // This is the signed-in user
      const user = result.user;
      // This gives you a Google Access Token.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
        }
        };
    console.log(auth)
    </script>
    <h1>Login</h1>
    <button on:click={login}>Login</button> 