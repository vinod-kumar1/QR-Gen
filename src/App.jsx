import React, {useState , useRef} from "react";

export default function App(){
    let [qrCode , setQr] = useState("");
let [url,setUrl] = useState("");

function getQr(e){
    e.preventDefault();
    // console.log(url.current.target);
    setQr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`)
}
    return <form onSubmit={getQr}>
        <input type="text" value={url} onChange={e => setUrl(e.target.value)}  />
        <input type="submit" value="Generate QR code" />

{<a target="new" href={qrCode} ><img src={qrCode} /></a>}
    </form>
}