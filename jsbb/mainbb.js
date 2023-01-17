// 7,00 screen share
const popupScreen = document.querySelector(".popup-screen");



window.addEventListener("load", () => {
    setTimeout(() => {
        console.log('loaded baby');
        popupScreen.classList.add("activedd");
        
        // we giving both because....actually this will visible....but if we add that class that "visibility" give animation...own explore: master mind
        popupScreen.style.visibility= "visible";
        
        // because "input_roomnamebb" visible after "0.5s"{mainc.scss}...genius
        setTimeout(() => {
            document.getElementById("input_roomnamebb").focus();
        }, 600);

    }, 2000); //Popup the screen in 02 seconds after the page is loaded.

});



console.log('added js baby')

var mapPeersy={};
var usernameInputy=document.querySelector('#input_usernamebb');
var roomnameInputy=document.querySelector('#input_roomnamebb');
var btnjoiny=document.querySelector('#joinbtnbb');

var usernamey;
var roomnamey;

var webSockety ;
const animationnn=document.getElementById('loaderbbid');


// he did...suck
function WebsocketOnMessageFucnbb(event) {
    console.log('connection messagebb')
    const parsedData = JSON.parse(event.data)
    console.log('data',parsedData)
    // console.log("parsedData['messagejs']",parsedData['messagejs'])
    console.log('msg usernamey ',usernamey);
    var peerUserNamey=parsedData['peerjs']
    var actiony=parsedData['actionjs']
    console.log('actiony',actiony);
    if (usernamey == peerUserNamey) {
        console.log('both same');
        popupScreen.classList.remove("activedd"); 
        popupScreen.style.visibility= 'hidden';

        animationnn.style.display="none"; 

        return;
    }
    if (actiony == 'change_namebb') {
        console.log('change name baby');
        animationnn.style.display="none";

        const err= document.querySelector('#inpt_errory');
        // const frm= document.querySelector('#popFormbb');
        // frm.reset();
        err.innerHTML='Please give another user name';
        document.getElementById("input_usernamebb").focus();

        return;
    }
    console.log('i am under');
    // popupScreen.classList.remove("active"); 

    var receiver_channel_namey=parsedData['messagejs']['receiver_channel_namejs'];

    if (parsedData['messagejs']['candiatejs']) {
        // animationnn.style.display="none"; 

        console.log('candi ->',peerBeforebb);
        if (peerBeforebb) {
            // peerBeforebb.addIceCandidate(parsedData['messagejs']['candiatejs'])
            const IceCandidatebb = new RTCIceCandidate(parsedData['messagejs']['candiatejs']);
            console.log('candidatedb baby')
            peerBeforebb.addIceCandidate(IceCandidatebb);
            return
            
        }

    }
    if (actiony == 'new-peerjs') {
        console.log('new-peerjs baby');
        createOffererFuncbb(peerUserNamey,receiver_channel_namey);
        return;
    }

    // if (actiony == 'new-offerjs') {
    if (actiony == 'new-offerjs') {
        var offery=parsedData['messagejs'] ['sdpjs'];
        createAnswererFuncbb(offery,peerUserNamey,receiver_channel_namey);
        

        return;
    }
    //  if (actiony == 'new-answerjs') {
    if (actiony == 'new-answerjs') {
        animationnn.style.display="none"; 

        var answer=parsedData['messagejs']['sdpjs'];
        var peer=mapPeersy[peerUserNamey][0];
        console.log('mapPeersy 1 ->',mapPeersy);
        peer.setRemoteDescription(answer);
        // peerBeforebb.setRemoteDescription(answer);


        return;
    }

    
}



// learned from https://stackoverflow.com/questions/707565/how-do-you-add-css-with-javascript .....cool
// Your CSS as text
/* 
let popy=document.getElementById('popidbb');
// we need to give px otherwise it wont work.....popy.offsetLeft} means how much 'popy' left from the browser left....  offsetWidth means "popy' width
var stylesbb = `
    .loaderbb{
        // offsetLeft:${popy.offsetLeft};
        offsetLeft:${popy.offsetLeft}px;
        offsetTop:${popy.offsetTop}px;
        width:${popy.offsetWidth}px;
        backdrop-filter: blur(10px);
    }   
`

var styleSheetbb = document.createElement("style");
styleSheetbb.type = "text/css";
styleSheetbb.innerText = stylesbb;
 */

/* making reuseable */
function loadingAnimationbb(selectorbb) {
    let popy=document.querySelector(selectorbb);
    var stylesbb = `
        .loaderbb{
            // offsetLeft:${popy.offsetLeft};
            offsetLeft:${popy.offsetLeft}px;
            offsetTop:${popy.offsetTop}px;
            width:${Math.min(popy.offsetWidth,popy.offsetHeight)}px;
            backdrop-filter: blur(10px);
        }   
    `
    
    var styleSheetbb = document.createElement("style");
    styleSheetbb.type = "text/css";
    styleSheetbb.innerText = stylesbb;

    animationnn.style.display="block";
    document.head.appendChild(styleSheetbb) 
}


/* stackoverflow copy end */
btnjoiny.addEventListener('click',(e)=>{

// function btnjoinyFuncbb(){
    // usernamey=namey;
    e.preventDefault();

    // usernamey=trim(usernameInputy.value);    /* it's wrong */
    usernamey=usernameInputy.value.trim();
    roomnamey=roomnameInputy.value.trim();

    console.log('usernamey btnjoiny',usernamey)
    if (usernamey == '' || roomnamey =='' ) {
        const err= document.querySelector('#inpt_errory')
        err.innerHTML='Please fill both value'
        return;
    }else{
        // const animationnn=document.getElementById('loaderbbid');
        // const widthy=(window.innerWidth)*0.9;       // 90% width
        // console.log('widthy',window.innerWidth);
        // const circleRadiusbb=widthy/2;
        // console.log('circleRadiusbb',circleRadiusbb);
        
        // before
        // document.head.appendChild(styleSheetbb) 
        // animationnn.style.display="block";
        // after...automate
        loadingAnimationbb('#popidbb')

        // animationnn.style.width=`${circleRadiusbb}px`;
        // document.getElementsByClassName('loaderbb').style.width=`${circleRadiusbb}px`;

        console.log(animationnn.offsetWidth );
        // popupScreen.classList.remove("active"); 
        console.log('all typed baby')

    }
    // usernameInputy.value='';
    // usernameInputy.disabled=true;
    // usernameInputy.style.visibility='hidden';

    // btnjoiny.disabled=true;
    // btnjoiny.style.visibility='hidden'
    
    // var labelUsernamey=document.querySelector('#usernamebb');
    // labelUsernamey.innerText=usernamey;


/*     var locb=window.location;
    console.log('window.location',window.location)
    var wsStart='ws://'
    
    // if (locb.protocol == 'https') {
    if (locb.protocol == 'https:') {
        wsStart='wss://'
    }

    

    var endPoint=wsStart + locb.host + locb.pathname
    console.log(`locb.host-> ${locb.host }, locb.pathname-> ${locb.pathname} ,locb.protocol ${locb.protocol}`)
    console.log('endPoint',endPoint)
 */
    // webSockety = new WebSocket(endPoint);
    // webSockety = new WebSocket('wss://holecomb.herokuapp.com/');
    webSockety = new WebSocket('wss://holecom.up.railway.app/');
    // webSockety = new WebSocket('ws://127.0.0.1:8000/');
    webSockety.addEventListener('open',(e)=>{ // NOTE: he always write like this ....which is suck
    // webSockety.onopen = () =>{         // NOTE: learn from codewithsingh 
        console.log('connection openebb');

        sendSignalFuncbb('new-peerjs',{'room_namejs':roomnamey,'user_namejs':usernamey});
    });

    // webSockety.addEventListener('messagejs',WebsocketFucnbb);     // he
    
    webSockety.addEventListener('message',WebsocketOnMessageFucnbb);    
 

    
    webSockety.addEventListener('close',(e)=>{

    // webSockety.onclose = () =>{ 

        console.log('connection closebb')

    });

    webSockety.addEventListener('error',(e)=>{
        // webSocket.onerror = () =>{ 
        console.log('connection errorbb')
    });     


// }
})



// var totalUserb= Object.keys(mapPeersy).length +1;       // "+1" coounting our video also
// var main_videoWidthb=document.getElementById('main_videobb').offsetWidth;
// var main_videoHeightbb=document.getElementById('main_videobb').offsetHeight;
// var isWidthBigbb=main_videoWidthb > main_videoHeightbb;

// that means who is big that will contain only 2{if width then 2 rows but multiple column...if column then 2 column  but multiple rows} ....
var bigNumberbb=2;

var stylesbb2=null;  
var eachBigUsrNmbrb=null;

var main_videoWidthb=document.getElementById('main_videobb').offsetWidth;
var main_videoHeightbb=document.getElementById('main_videobb').offsetHeight;
var isWidthBigbb=main_videoWidthb > main_videoHeightbb;
main_videoHeightbb=document.getElementById('main_videobb').offsetHeight - document.querySelector('#allControlsbb').offsetHeight;
// var actual__videoHeightbb=document.getElementById('main_videobb').offsetHeight ;

function resizeVideobb() {
    var totalUserb= Object.keys(mapPeersy).length +1;       // "+1" coounting our video also
    console.log('iswidth',main_videoWidthb,main_videoHeightbb,isWidthBigbb);
    totalUserb= Object.keys(mapPeersy).length +1;  
    eachBigUsrNmbrb=Math.ceil(totalUserb/bigNumberbb); 
    
    // if (isWidthBigbb) {
    //     var columnWidthbb=main_videoWidthb / totalUserb;
    // } else {
    //     var rowsWidthbb=main_videoHeightbb / totalUserb;
        
    // } 

    // if (totalUserb ==2 && isWidthBigbb) {
    // if (totalUserb ==2 ) {
    if (totalUserb <=2 ) {
        if (isWidthBigbb) {
            console.log('1st baby');
            /* width: ${main_videoWidthb/2}px; */
    
            stylesbb2 = `
            video{
                width: ${main_videoWidthb/2}px;
                /* it don't show good */
                height: ${main_videoHeightbb}px;
                /* height: ${main_videoHeightbb/0.8}px; */
                } 
            `      
        }else{
            console.log('2ndd');
            stylesbb2 = `
            video{
                /* showing on full screen */
                height: ${main_videoHeightbb/2}px; 
                /* it don't show good */
                width: ${main_videoWidthb}px;
                /* width: ${main_videoWidthb/2}px; */
                } 
            `      
        }
    }else if(isWidthBigbb){
        console.log('3rd updated',totalUserb);

        stylesbb2 = `
        video{
            width: ${main_videoWidthb/eachBigUsrNmbrb}px;
            height: ${main_videoHeightbb/bigNumberbb}px;
            
            } 
        `      

        // stylesbb2 = `
        // video{
        //     width: ${main_videoWidthb/bigNumberbb}px;
        //     height: ${main_videoHeightbb/eachBigUsrNmbrb}px;;
            

        //     } 
        // `  
    }else{
        console.log('fourth baby');
        stylesbb2 = `
        video{
            width: ${main_videoWidthb/bigNumberbb}px;
            height: ${main_videoHeightbb/eachBigUsrNmbrb}px;
            

            } 
        `  

        // stylesbb2 = `
        // video{
        //     width: ${main_videoWidthb/eachBigUsrNmbrb}px;
        //     height: ${main_videoHeightbb/bigNumberbb}px;;
            
        //     } 
        // `   

    }


    var styleSheetbb2 = document.createElement("style");
    styleSheetbb2.type = "text/css";
    styleSheetbb2.innerText = stylesbb2;
    document.head.appendChild(styleSheetbb2) 
    console.log(mapPeersy);
}

// window.addEventListener('resize',function () {
//     resizeVideobb();
// })
// not working
// document.getElementsByClassName('main__videos')
/* we can get using "class"...we must need to use "id" ...own explore*/


var localStreamy=new MediaStream();
const contraintsy={
    // 'video':true,   
    // 'audio':true

    video: {
        frameRate: 24,
        width: {
            min: 480, ideal: 720, max: 1280
        },
        aspectRatio: 1.33333
    },
    audio: true
}
const localVideoy=document.querySelector('#local_vidb')
const btnToggleAudioy=document.querySelector('#toggle_audiob')
const btnToggleVideoy=document.querySelector('#toggle_vidb')


// var audioTracksy;
// var videoTracksy;
// copied from https://webrtc.org/getting-started/media-devices
var userMediay=navigator.mediaDevices.getUserMedia(contraintsy)
    .then(stream =>{
        localStreamy = stream;
        localVideoy.srcObject = localStreamy;
        localVideoy.muted = true;           // it will not show any sound by default....not sure

        // localStreamy.getTracks().forEach(function(track) { track.stop(); })      // doing just for development...... so that it did not play our video https://stackoverflow.com/questions/40203036/how-stop-exit-video-in-webrtc-navigator-user-media-javascript own explore:

        var audioTracks=localStreamy.getAudioTracks();
        var videoTracks=localStreamy.getVideoTracks();

        audioTracks[0].enabled=true;
        videoTracks[0].enabled=true;

        btnToggleAudioy.addEventListener('click',()=>{
            audioTracks[0].enabled=!audioTracks[0].enabled;
            if (audioTracks[0].enabled) {
                // btnToggleAudioy.innerHTML='Audio Mute';
                var html = `
                        <i class="fas fa-microphone"></i>
                        <span>Mute</span>
                        `
                document.querySelector('.main__mute_button').innerHTML = html;
                return;
            }
            var html = `
                    <i class="unmute fas fa-microphone-slash"></i>
                    <span>Unmute</span>
                    `
            document.querySelector('.main__mute_button').innerHTML = html;
            // btnToggleAudioy.innerHTML='Audio UnMute';

        })

        btnToggleVideoy.addEventListener('click',()=>{
            videoTracks[0].enabled=!videoTracks[0].enabled;

            if (videoTracks[0].enabled) {
                // btnToggleVideoy.innerHTML='Video Off';
                var html = `
                    <i class="fas fa-video"></i>
                    <span>Stop Video</span>
                    `
                document.querySelector('.main__video_button').innerHTML = html;
                return;
            }
            var html = `
                        <i class="stop fas fa-video-slash"></i>
                        <span>Play Video</span>
                    `
            document.querySelector('.main__video_button').innerHTML = html;
            // btnToggleVideoy.innerHTML='Video On';

        })
    

    })
    .catch(error=>{
        console.log('Error accessing media devices baby',error);       // it will show this error if user did not allow to access camera 
    })

function muteUnmuteFuncbb() {
    // const enabled=audioTracksy[0].enabled;
    var enabled=audioTracksy[0].enabled;
    if (enabled) {
        audioTracksy[0].enabled=false;
        setUnmuteButtonFuncbb();
        return;
        
    }else{
        setMuteButtonFuncbb()
        audioTracksy[0].enabled=true;
        return;

      

    }

}

var setMuteButtonFuncbb = () => {
    var html = `
      <i class="fas fa-microphone"></i>
      <span>Mute</span>
    `
    document.querySelector('.main__mute_button').innerHTML = html;
}
  
var setUnmuteButtonFuncbb = () => {
    var html = `
        <i class="unmute fas fa-microphone-slash"></i>
        <span>Unmute</span>
    `
    document.querySelector('.main__mute_button').innerHTML = html;
}

  
function playStopFuncbb() {
    var enabled=videoTracksy[0].enabled

    if (enabled) {
        setPlayVideoFuncbb();
        videoTracksy[0].enabled=false;
    }else{
        setStopVideoFuncbb();
        videoTracksy[0].enabled=true;

    }
    
}

 
var setPlayVideoFuncbb = () => {
    var html = `
    <i class="stop fas fa-video-slash"></i>
      <span>Play Video</span>
    `
    document.querySelector('.main__video_button').innerHTML = html;
}
var setStopVideoFuncbb = () => {
    var html = `
      <i class="fas fa-video"></i>
      <span>Stop Video</span>
    `
    document.querySelector('.main__video_button').innerHTML = html;
    
}
/* 
var btnSendMsgy=document.querySelector('#btn_msg');   
var messageListy=document.querySelector('#msg_lst');
var messageInputy=document.querySelector('#msg_inputb');
    
    // btnSendMsgy.addEventListener('click',sendMsgOnClickFuncbb);


var inputmsgy = document.getElementById('input_messageh');
// inputmsgy.addEventListener('keydown', function onEvent(event) {
//     if (event.key === "Enter") {        // https://stackoverflow.com/questions/11365632/how-to-detect-when-the-user-presses-enter-in-an-input-field
//         sendMsgOnClickFuncbb()
//         return;
//     }
// });

var uly=document.querySelector('ul');

function sendMsgOnClickFuncbb() {
    console.log('sendMsgOnClickFuncbb called');
    var messagef=inputmsgy.value;
    // var lif=document.createElement('li');
    // lif.appendChild(document.createTextNode('Me: ' + messagef));
    // messageListy.appendChild(lif);
    // var ulf=document.querySelector('ul');
    uly.innerHTML+=`<li class="message"><b>Me:</b><br/>${messagef}</li>`
    // ulf.append(`<li class="message"><b>Me:</b><br/>${messagef}</li>`)

    const msgDiv=document.querySelector('#main__chat_window')
    msgDiv.scrollTop=msgDiv.scrollHeight;
    
    var dataChannelsf=getDataChannelsFuncbb();
    console.log('btnSendMsgy usernamey ',usernamey);
    console.log('btnSendMsgy dataChannelsf',dataChannelsf);
    // messagef=usernamey + ' : ' + messagef;
    messagef=`<li class="message"><b>${usernamey}:</b><br/>${messagef}</li>`;
    console.log('messagef',messagef);
    for (indexf in dataChannelsf) {
        console.log('indexf',indexf)
        dataChannelsf[indexf].send(messagef)
    }
    inputmsgy.value='';
}
 */

function sendSignalFuncbb(actiony,message) {
    webSockety.send(JSON.stringify({
        'peerjs':usernamey,
        'actionjs':actiony,
        'messagejs':message
      }))    
}

// Contains the stun server URL we will be using.
let iceServersh = {     // "h" in last means html
    iceServers: [
        
          {
          urls:"stun:stun3.l.google.com:19302",
          },
          {
            urls: "stun:openrelay.metered.ca:80",
          },
          {
            urls: "turn:openrelay.metered.ca:80",
            username: "openrelayproject",
            credential: "openrelayproject",
          },
          {
            urls: "turn:openrelay.metered.ca:443",
            username: "openrelayproject",
            credential: "openrelayproject",
          },
          {
            urls: "turn:openrelay.metered.ca:443?transport=tcp",
            username: "openrelayproject",
            credential: "openrelayproject",
          },
/*         {
            //works 1-3 second video and audio and then disconnect
            urls: "turn:openrelay.metered.ca:443",
            username: "openrelayproject",
            credential: "openrelayproject",
          },
          {
        "urls": [
            // "stun:openrelay.metered.ca:80",

            "stun:stun3.l.google.com:19302",
            // "stun:stun.l.google.com:19302", 
            // "stun:stun1.l.google.com:19302", 
            // "stun:stun2.l.google.com:19302",
        ]
    }

//       {
//         "urls": [
//             "stun:openrelay.metered.ca:80"
//     ]
// },

    */   

    ],
  }; 


// let peerBeforebb=new RTCPeerConnection(iceServersh);            // own explore: idea to save time baby GENIUS:
let peerBeforebb;         
/* 
let myBeforeOfferbb;
let myBeforeAnswerbb; 
let initbb = async () => {

     peerBeforebb=new RTCPeerConnection(iceServersh);            // own explore: idea to save time baby GENIUS:
     myBeforeOfferbb=peerBeforebb.createOffer();            // save time baby GENIUS: .....// NOTE: IT'S not "createOffererFuncbb" ....it's 'createOffer 
    myBeforeAnswerbb=peerBeforebb.createAnswer();            //  save time baby GENIUS: .....
}
initbb(); */


// function createOffererFuncbb(peerUserNamecc,receiver_channel_namecc) {
let createOffererFuncbb = async (peerUserNamecc,receiver_channel_namecc) => {
    console.log('creating offer');
    // var peercc=new RTCPeerConnection(null);
    var peercc=new RTCPeerConnection(iceServersh);
    peeryk=peercc;
    peerBeforebb=peercc
    // var peercc=peerBeforebb
    // peeryk=peercc;

    // addLocalTracksFuncbb(peercc);
    addLocalTracksFuncbb();

    var dcc=peercc.createDataChannel('channel');
    // dcc.onopen =()=>{
    dcc.addEventListener('open',()=>{
        console.log('datachannel connection opened offer')
    });
    // dcc.onmessage = dcOnMessageFuncbb;
    dcc.addEventListener('message',dcOnMessageFuncbb);          // NOTE: it's 'message' not 'messagejs'....own explore: it takes my 2 hours

    var remoteVideocc=creatVideoFuncbb(peerUserNamecc);
    loadingAnimationbb(`#${peerUserNamecc}-video`);
    
    setOnTrackFuncbb(peercc,remoteVideocc);
    mapPeersy[peerUserNamecc] = [peercc,dcc];
    console.log('mapPeersy 2 ->',mapPeersy);


    // we need to call it after  "mapPeersy" is update...talent
    resizeVideobb();

    peercc.addEventListener('iceconnectionstatechange',()=>{
        var iceConnectionStatecc=peercc.iceConnectionState;

        if (iceConnectionStatecc === 'failed' || iceConnectionStatecc === 'disconnected' || iceConnectionStatecc ==='closed') {
            console.log('connection closedCC ->',mapPeersy,iceConnectionStatecc);
            
            if (iceConnectionStatecc != 'closed') {
                delete mapPeersy[peerUserNamecc];
                peercc.close();
                console.log('mapPeersy 3 ->',mapPeersy);
            }
            removeVideoFuncbb(remoteVideocc);
            resizeVideobb();
            
        }
    });
    // peercc.addEventListener('icecandidate',(eventcc)=>{
        peercc.onicecandidate = async (eventcc) => {

        if (eventcc.candidate) {
            // console.log('New Ice candidate baby',JSON.stringify(peercc.localDescription));
            console.log('New Ice candidate baby offer');

            sendSignalFuncbb('new-offerjs',{
                // 'sdpjs':peercc.localDescription,
                'candiatejs':eventcc.candidate,
                'receiver_channel_namejs':receiver_channel_namecc
            });
            return;
        }

        console.log('OUT New Ice candidate baby offer');       // own explore:we are sending all the ice candidate at once GENIUS: you can do anything

        // sendSignalFuncbb('new-offerjs',{
        //     'sdpjs':peercc.localDescription,
        //     'receiver_channel_namejs':receiver_channel_namecc
        // });
    // });
    };

    peercc.addEventListener('connectionstatechange', event => {
        if (peercc.connectionState === 'connected') {
            // Peers connected!
            console.log('connected baby');
            animationnn.style.display="none"; 

        }
    });

    // what he did 
   /*  peercc.createOffer()      // NOTE: IT'S not "createOffererFuncbb" ....it's 'createOffer 
    // myBeforeOfferbb      // saving time
        .then(o=>peercc.setLocalDescription(o))
        .then(()=>{
            console.log('Local Description set successfully baby');
        }) */


    // what I did 
    peercc.createOffer()      // NOTE: IT'S not "createOffererFuncbb" ....it's 'createOffer 
    // myBeforeOfferbb      // saving time
        .then(o=>{
            peercc.setLocalDescription(o);
            sendSignalFuncbb('new-offerjs',{
                // 'sdpjs':peeraa.localDescription,
                'sdpjs':o,
                'receiver_channel_namejs':receiver_channel_namecc
            })
        })
        .then(()=>{
            console.log('Local Description set successfully baby');
        })
    

}


let peeraa;
// NOTE: copief from "createOffererFuncbb"
// function createAnswererFuncbb(offeraa,peerUserNameaa,receiver_channel_nameaa){ 
let createAnswererFuncbb = async (offeraa,peerUserNameaa,receiver_channel_nameaa) => {
    console.log('creating Answerer');
  
    // var peeraa=new RTCPeerConnection(null);
    var peeraa=new RTCPeerConnection(iceServersh);
    peeryk=peeraa;
    peerBeforebb=peeraa; 

    // peeraa=peerBeforebb;
    // peeryk=peeraa;
    // addLocalTracksFuncbb(peeraa);
    addLocalTracksFuncbb();


    var remoteVideo=creatVideoFuncbb(peerUserNameaa);
    loadingAnimationbb(`#${peerUserNameaa}-video`);
    setOnTrackFuncbb(peeraa,remoteVideo);


    peeraa.addEventListener('datachannel',e =>{
        peeraa.dcaa=e.channel;

        // peeraa.dcaa.onopen =()=>{
        peeraa.dcaa.addEventListener('open',()=>{

            console.log('datachannel connection opened answerer baby')
        })
        // dc.onmessage = dcOnMessageFuncbb;
        peeraa.dcaa.addEventListener('message',dcOnMessageFuncbb)       // NOTE: it's 'message' not 'messagejs'
    
        mapPeersy[peerUserNameaa] = [peeraa,peeraa.dcaa];
        console.log('mapPeersy  4->',mapPeersy);

        // we need to call it after  "mapPeersy" is update...talent
        resizeVideobb();
    });




    peeraa.addEventListener('iceconnectionstatechange',()=>{
        var iceConnectionStateaa=peeraa.iceConnectionState;

        if (iceConnectionStateaa === 'failed' || iceConnectionStateaa === 'disconnected' || iceConnectionStateaa ==='closed') {
            console.log('connection closedAA ->',mapPeersy,iceConnectionStateaa);
            
            
            // we need to call it after  "mapPeersy" is update...talent
            if (iceConnectionStateaa != 'closed') {
                delete mapPeersy[peerUserNameaa];
                peeraa.close();
                console.log('mapPeersy 5 ->',mapPeersy);
                }
                removeVideoFuncbb(remoteVideo);
                resizeVideobb();
            
        }
        if (peeraa.connectionState === 'connected') {
            // Peers connected!
            console.log('connected baby');
            animationnn.style.display="none"; 

        }
    });
    // peeraa.addEventListener('icecandidate',(eventaa)=>{
        peeraa.onicecandidate = async (eventaa) => {
        if (eventaa.candidate) {
            // console.log('New Ice candidate',JSON.stringify(peeraa.localDescription));
            console.log('New Ice candidate answer');

            // sendSignalFuncbb('new-answerjs',{
            sendSignalFuncbb('dd',{
                // 'sdpjs':peeraa.localDescription,
                // 'receiver_channel_namejs':receiver_channel_nameaa,
                    // 'sdpjs':peercc.localDescription,
                    'candiatejs':eventaa.candidate,
                    'receiver_channel_namejs':receiver_channel_nameaa
                });
            }
    
            // })
        
        console.log('OUT New Ice candidate baby answer');           // own explore:we are sending all the ice candidate at once GENIUS: you can do anything
        return;
        // sendSignalFuncbb('new-answerjs',{
        //     'sdpjs':peeraa.localDescription,
        //     'receiver_channel_namejs':receiver_channel_nameaa
        // })
    };
    // });
    
    // https://webrtc.org/getting-started/peer-connections#connection_established
    peeraa.addEventListener('connectionstatechange', event => {
        if (peeraa.connectionState === 'connected') {
            // Peers connected!
            console.log('connected baby');
            animationnn.style.display="none"; 

        }
    });


     
    // NOTE:I don't understand why it's not working... own explore:please
//     peeraa.setRemoteDescription(offeraa);
//     peeraa.createAnswer().then((a)=>{
//         console.log(`Remote description set successfully for ${peerUserNameaa}`)
//         // return myBeforeAnswerbb;     
//         peeraa. setLocalDescription(a);
//         return ;     // it's not "createAnswererFuncbb" 
//     })


// peeraa.setRemoteDescription(offeraa)
//     .then(()=>{
//         console.log(`Remote description set successfully for ${peerUserNameaa}`)
//         return peeraa.createAnswer();     // it's not "createAnswererFuncbb" 
//         // return myBeforeAnswerbb;     
//     })
//     .then(a=>{
//         console.log('Answer Created baby');
//         peeraa.setLocalDescription(a)
//     })


//  both same baby..... you can do anything 
peeraa.setRemoteDescription(offeraa)
    .then(()=>{
        console.log(`Remote description set successfully for ${peerUserNameaa}`)
             // it's not "createAnswererFuncbb" 
        // return myBeforeAnswerbb;     
    })
    peeraa.createAnswer()
    .then(a=>{
        console.log('Answer Created baby');
        peeraa.setLocalDescription(a);
        sendSignalFuncbb('new-answerjs',{
            // 'sdpjs':peeraa.localDescription,         // own explore:it's wrong... GENIUS:
            'sdpjs':a,
            'receiver_channel_namejs':receiver_channel_nameaa
        })
    })
}


// done


// sending our tracks(video/audio) to other peers own explore:
// function addLocalTracksFuncbb(peerl) {
function addLocalTracksFuncbb() {
    console.log('addLocalTracksFuncbb called');
    localStreamy.getTracks().forEach(track =>{
        // peerl.addTrack(track,localStreamy);
        peerBeforebb.addTrack(track,localStreamy);
    });
    return;
}
/* 
// done
function dcOnMessageFuncbb(eventd) {
    console.log('dcOnMessage called');

    var messaged=eventd.data;
    console.log('messaged',messaged);    
    // var lid=document.createElement('li');
    // lid.appendChild(document.createTextNode(messaged));

    // messageListy.appendChild(lid);
    // var uld=document.querySelector('ul');
    // uly.innerHTML+=`<li class="message"><b>Me:</b><br/>${messaged}</li>`;
    uly.innerHTML+=messaged;
    const msgDiv=document.querySelector('#main__chat_window')
    msgDiv.scrollTop=msgDiv.scrollHeight;
    // uld.appendChild(`<li class="message"><b>Me:</b><br/>${messaged}</li>`)
}
 */

var loadingVideob=[];
// done
function creatVideoFuncbb(peerUserNamec) {
    console.log('creatVideoFuncbb called');
    console.log('peerUserNamec',peerUserNamec);
    // var videoContainernn=document.querySelector('#video_containerh');
    // var videoGridv = document.getElementById('video-gridb')
    var videoGridv = document.querySelector('#video-gridb')
    var remoteVideov=document.createElement('video');

    remoteVideov.id =peerUserNamec + '-video';
    remoteVideov.autoplay=true;
    remoteVideov.playsInline =true;

    var videoWrapperv=document.createElement('div');
    videoGridv.appendChild(videoWrapperv);
    videoWrapperv.appendChild(remoteVideov);
    // loadingAnimationbb(`#${peerUserNamec}-video`);
    // loadingVideob.push(`#${peerUserNamec}-video`);
    return remoteVideov;
}

// done
// when we get track(video,audio) from another peer/user then it will play on our remoteStreamt    own explore:
function setOnTrackFuncbb(peert,remoteVideost) {
    console.log('setOnTrackFuncbb called',peert);
    var remoteStreamt=new MediaStream();
    remoteVideost.srcObject=remoteStreamt;

    // peert.addEventListener('track',async (eventt)=>{
    //     remoteStreamt.addTrack(eventt.track,remoteStreamt)
    // });

    peert.ontrack = async (event) => {
        event.streams[0].getTracks().forEach((track) => {
            remoteStreamt.addTrack(track)
        })
    }
}

// done
function removeVideoFuncbb(videorr) {
    var videoWrapperr=videorr.parentNode;
    videoWrapperr.parentNode.removeChild(videoWrapperr);

}

function getDataChannelsFuncbb() {
    var dataChannelsf=[];
    console.log('mapPeersy 6 ->',mapPeersy);

    for (peerUserNamem in mapPeersy) {
        var dataChannelp=mapPeersy[peerUserNamem][1];
        dataChannelsf.push(dataChannelp)
    }
    // console.log('getDataChannelsFuncbb mapPeersy ',mapPeersy);
    console.log('getDataChannelsFuncbb dataChannelsf ',dataChannelsf);

    return dataChannelsf;
}