import React, {useEffect, useRef, useState } from 'react';
import { QrReader } from 'react-qr-reader';


interface QRCodeScannerProps {
  onScan: (data: string | null) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onScan }) => {
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState('No result');
  const droidCamVideoLink = 'http://192.168.20.121:4747/video';    


  const videoId = 'myDroidCamVideo'; // Set an ID for the video element

  useEffect(() => {
    // Set the video source to the DroidCam video link
    const videoElement = document.getElementById(videoId) as HTMLVideoElement;
    if (videoElement) {
      videoElement.src = droidCamVideoLink;
      //videoElement.play();

      var playPromise = videoElement.play();

      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(error => {
          console.log("error on droid cam ", error)
          // Auto-play was prevented
          // Show paused UI.
        });
      }
    }
  }, []);


  const handleScan = (data: string | null) => {
    if (data) {
      onScan(data);
    }
  };

  const handleError = (err: Error) => {
    setError(err.message);
  };

  const qrRef = useRef(null);

  // useEffect(() => {
  //   // Create a video element and set its src attribute to the DroidCam video link
  //   const videoElement = document.createElement('video');
  //   videoElement.src = droidCamVideoLink;

  //   // Append the video element to the component
  //   document.body.appendChild(videoElement);

  //   return () => {
  //     // Cleanup: Remove the video element when the component unmounts
  //     document.body.removeChild(videoElement);
  //   };
  // }, []);

  ///<div style="width: 100%; padding-top: 100%; overflow: hidden; position: relative;">
   // <video id="myDroidCamVideo" src="http://192.168.20.121:4747/video" style="top: 0px; left: 0px; width: 100%; height: 100%; display: block; overflow: hidden; position: absolute;" autoplay="true" muted="true" playsinline="true">
   // </video>
  //</div>
  return (
    <div>
      {error && <p>{error}</p>}
      <QrReader
        scanDelay={1000} 
        //videoId={videoId}
        onResult={(result, error) => {
            if (!!result) {
            //handleScan(result);
             console.log("the result ==== ", result)
             try {
              const resultText=JSON.parse((result.getText()).toString())
              if(resultText){
                console.log("formated result ", resultText)
              }
             } catch (error) {
              console.log("the erooottt ", error)
             }
             
            }
  
            if (!!error) {
                //console.log("error==== ", error);
            }
          }}
        //onScan={handleScan}
        //style={{ width: '100%' }}
        constraints={{ facingMode: 'user' }}
      />
    </div>
  );
};

export default QRCodeScanner;
///'title':'CAN', 'type': 'DEFAULT', 'date': 'Sat Aug 26 2023 17:30:00 GMT+0700 (Indochina Time)', contract: '0x7712E5941Fd27369c002fCE106E6f197379C63ab','place':'Côte d'Ivoir Telecom Bureau', 'buyer':'0xd36dd7cabf457ce317fda21c0525ed4561d5c352'