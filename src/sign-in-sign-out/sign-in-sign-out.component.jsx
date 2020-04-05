import React from 'react';

import { signInWithGoogle } from '../firebase/firebase.utils';

const SignInSignOut = () => (
    <div className="sign-in-sign-out">
        <h1>Sign in and sign out</h1>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
)

export default SignInSignOut;