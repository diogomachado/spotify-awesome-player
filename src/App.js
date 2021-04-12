import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useEffect, useState } from 'react';
import ApiService from './service/api';

function App() {

    const [logged, setLogged] = useState(false);

    useEffect(() => {

        // Get code spotify for request access_token
        let location = window.location.hash;

        if (location != "") {
            let re = /access_token=([^&]*)/ig;
            let reArray = re.exec(location);
            const access_token = reArray[1];

            if (access_token) {
                localStorage.setItem('sap_access_token', access_token);
                setLogged(true);
            }

            // recommendations();
        }
    }, []);

    // function recommendations() {

    //   setSearching(true);
    //   console.log("Searching on Spotify API...");

    //   // Remove animation class
    //   if (document.querySelector('.cover')) {
    //     document.querySelector('.cover').classList.remove('cover-animate');
    //   }

    //   ApiService.get('/recommendations?seed_genres=brazil&market=BR&limit=1')
    //   .then(res => {
    //     if (res.status == 401) {
    //       throw(res.status);
    //     }else{
    //       return res.json();
    //     }
    //   })
    //   .then((response) => {
    //     setArtist({
    //       name: response.tracks[0].artists[0].name,
    //       url: response.tracks[0].external_urls.spotify,
    //       cover: response.tracks[0].album.images[0].url,
    //       trackName: response.tracks[0].name
    //     });

    //     // Delay
    //     setTimeout(() => {
    //       setSearching(false);
    //       // Add animation class
    //       document.querySelector('.cover').classList.add('cover-animate');
    //     }, 1500);
    //   })
    //   .catch(response => {
    //     console.log(response);
    //     if (response == '401') {
    //       setLogged(false);
    //       setSearching(false);
    //     }
    //   });
    // }

    function GetView() {
        return(
        <>
            <Header/>
            <Footer/>
        </>
        )
    }

    return (
        <>
            {
                (logged) && GetView()
            }

            {
                (!logged) && <a className="btn-authorize" href="https://accounts.spotify.com/authorize?response_type=token&client_id=ce8bed51e3c84b9e80a7808c62f490a0&redirect_uri=http://localhost:3000">Sign account</a>
            }
        </>
    );
}

export default App;