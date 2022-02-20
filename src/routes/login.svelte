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
    <button id="log-in" on:click={login}>
        <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg></button> 


<style>
  #log-in {
    background:mediumslateblue 
  }

</style>
