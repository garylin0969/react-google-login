import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function App() {
    const login = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            console.log(codeResponse);
            await axios
                .get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${codeResponse.access_token}` },
                })
                .then((res) => {
                    console.log(res.data);
                });
        },
        onError: (error) => console.log('Login Failed:', error),
    });
    return (
        <>
            {/* <GoogleLogin
                onSuccess={async (credentialResponse) => {
                    console.log(credentialResponse);
                    const token = credentialResponse.credential;
                    console.log(credentialResponse.credential);

                    await axios
                        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
                            headers: { Authorization: `Bearer ${token}` },
                        })
                        .then((res) => {
                            console.log(res.data);
                        });

                    // console.log(userInfo);
                    // const res = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                    //     headers: {
                    //         Authorization: `Bearer ${token}`,
                    //     },
                    // });
                    // const data = await res.json();
                    // console.log(data);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                useOneTap
                auto_select
            /> */}
            <button onClick={() => login()}>Sign in with Google 🚀 </button>
        </>
    );
}

export default App;
