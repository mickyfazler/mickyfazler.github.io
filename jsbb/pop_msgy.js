console.log('I am pop');

const popup = document.querySelector('.chat-popupbb');
console.log(popup);
const chatBtn = document.querySelector('.chat-btnbb');
// const submitBtn = document.querySelector('.submitbb');
let submitBtn = document.querySelector('#btn_msg');
const chatArea = document.querySelector('.chat-areabb');
const inputElm = document.querySelector('#inptTxt');
const emojiBtn  = document.querySelector('#emoji-btnbb');
let picker = null;

// /* 
// Emoji selection  
window.addEventListener('DOMContentLoaded', () => {
  picker = new EmojiButton();
  console.log('dom content load');
  
  picker.on('emoji', emoji => {
    console.log('emoji given');
    document.querySelector('input').value += emoji;
    popup.classList.add('zinIndexbb');

    // it will show "plane"
    msgPressFuncbb();
  }); 

  
});        

emojiBtn.addEventListener('click', () => {
  ;
  // otherwise our emoji will under popup because of popup's huge z-index 
  popup.classList.remove('zinIndexbb');
  // picker.togglePicker(emojiBtn);

  // picker.togglePicker(emojiBtn);
  picker.togglePicker(emojiBtn);
  
  // if we click "emojibtn" bot don't select any emoji then our message pop will not work because of missing z-index....own explore
  var intervaly=setInterval(tmpFuncbb,2000);
  function tmpFuncbb() {
    let isEmjOpn=document.querySelector('.emoji-picker');
    if (isEmjOpn == undefined) {
      console.log('i am good');
      popup.classList.add('zinIndexbb');
      // https://stackoverflow.com/questions/16437173/stop-setinterval
      clearInterval(intervaly);
      
    }
  }
  // console.log(isEmjOpn);


  
});

// https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
// function waitForElm(selector) {
//   return new Promise(resolve => {
//       if (document.querySelector(selector)) {
//           return resolve(document.querySelector(selector));
//       }

//       const observer = new MutationObserver(mutations => {
//           if (document.querySelector(selector)) {
//               resolve(document.querySelector(selector));
//               observer.disconnect();
//           }
//       });

//       observer.observe(document.body, {
//           childList: true,
//           subtree: true
//       });
//   });
// }

    




//   chat button toggler 

let newMsgNum=0;
const closeBtnbb=document.querySelector('#closemsgbb');
chatBtn.addEventListener('click', ()=>{
    console.log('clicked chat');
    // means if have then remove...if not then add...cool
    // popup.classList.toggle('showbb');
    popup.classList.add('showbb');
    popup.style.display='flex';
    chatArea.scrollTop=chatArea.scrollHeight;
    msgPressFuncbb();
    
    closeBtnbb.addEventListener('click',()=>{
    console.log('closebtn 1');
      
      popup.style.display='none';
      popup.classList.remove('showbb');
      
    })

    document.querySelector('#newMsgNumbb').style.display='none';
    newMsgNum=0;
  })
  
  /* if we give it here then works slowsly */
// const closeBtnbb=document.querySelector('#closemsgbb');
// closeBtnbb.addEventListener('click',()=>{
//   console.log('closebtn 2');
//   popup.classList.remove('showbb');

// })

 

// send msg 

let userInput;
// submitBtn.addEventListener('click', ()=>{

//     userInput = inputElm.value;
//     let isEmojibb=submitBtn.classList.contains('wavebb');
//     console.log(isEmojibb);
//     if (userInput.trim().length==0 && !isEmojibb) {
//       return
//     }
//     if (isEmojibb) {
//         // inputElm.value+='👋';
//         // userInput = inputElm.value;
//         // inputElm.value+='&#128075;';
//         // userInput = '&#128075;';

//         inputElm.value+='<iframe src="https://giphy.com/embed/3ohhwMDyS6rv3sB8yI" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/wetransfer-sticker-3ohhwMDyS6rv3sB8yI">via GIPHY</a></p>';
//         userInput = '<iframe src="https://giphy.com/embed/3ohhwMDyS6rv3sB8yI" width="40" height="40" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
//     }
//     // <img src="https://scontent.fcgp28-1.fna.fbcdn.net/v/t1.6435-1/cp0/c0.0.60.60a/p60x60/86468810_665797524174513_3326712462950006784_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=sy3XG1aLy2MAX8k-1Ci&_nc_oc=AQkaOpod8cE9f5yPe7CD_x1ptDRBb8tdbqvj8YSxs8kWJkm3lr8hpx_d99_1zD25C34&_nc_ht=scontent.fcgp28-1.fna&oh=00_AT8qV26QuAQV-JmpVPU9T5ukq7_oLvJOfStUhdgwf1tqzg&oe=6221AD6E" class="avatarbb"> 
//     // <img src="img/me.jpg" class="avatar">
//     let temp = `<div class="out-msgbb">
//     <i ><b>Me:</b></i>
//     <span class="my-msgbb">${userInput}</span>
//     </div>`;

//     chatArea.insertAdjacentHTML("beforeend", temp);
//     chatArea.scrollTop=chatArea.scrollHeight;
//     sendMsgOnClickFuncbb();
//     inputElm.value = '';
//     msgPressFuncbb();


    

// })

function sendMsgOnClickFuncbb() {
  console.log('sendMsgOnClickFuncbb called');
  // var messagef=inputmsgy.value;

  
  var dataChannelsf=getDataChannelsFuncbb();
  console.log('btnSendMsgy usernamey ',usernamey);
  console.log('btnSendMsgy dataChannelsf',dataChannelsf);
 
 
  messagef=`
  <div class="income-msgbb">
    <i><b>${usernamey}:</b></i>
    <span class="msgbb">${userInput}</span>
  </div>   
  
  `;
  console.log('messagef',messagef);
  for (indexf in dataChannelsf) {
      console.log('indexf',indexf)
      dataChannelsf[indexf].send(messagef)
  }
  
}

function dcOnMessageFuncbb(eventd) {
  console.log('dcOnMessage called');

  var messaged=eventd.data;
  console.log('messaged',messaged);    

  chatArea.insertAdjacentHTML("beforeend", messaged);
  chatArea.scrollTop=chatArea.scrollHeight;

  let isMsgOpenbb=document.querySelector('.chat-popupbb').classList.contains('showbb');
  if (!isMsgOpenbb) {
    newMsgNum+=1;
    document.querySelector('#newMsgNumbb').innerText=newMsgNum;
    document.querySelector('#newMsgNumbb').style.display='flex';
  }

}

// submitBtn.addEventListener('click', ()=>{
//   userInput = inputElm.value;
//   let isEmojibb=submitBtn.classList.contains('wavebb');
//   console.log(isEmojibb);
//   if (userInput.trim().length==0 && !isEmojibb) {
//     return
//   }
//   if (isEmojibb) {
//       // inputElm.value+='👋';
//       // userInput = inputElm.value;
//       // inputElm.value+='&#128075;';
//       // userInput = '&#128075;';

//       inputElm.value+='<iframe src="https://giphy.com/embed/3ohhwMDyS6rv3sB8yI" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/wetransfer-sticker-3ohhwMDyS6rv3sB8yI">via GIPHY</a></p>';
//       userInput = '<iframe src="https://giphy.com/embed/3ohhwMDyS6rv3sB8yI" width="40" height="40" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
//   }
//   // <img src="https://scontent.fcgp28-1.fna.fbcdn.net/v/t1.6435-1/cp0/c0.0.60.60a/p60x60/86468810_665797524174513_3326712462950006784_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=sy3XG1aLy2MAX8k-1Ci&_nc_oc=AQkaOpod8cE9f5yPe7CD_x1ptDRBb8tdbqvj8YSxs8kWJkm3lr8hpx_d99_1zD25C34&_nc_ht=scontent.fcgp28-1.fna&oh=00_AT8qV26QuAQV-JmpVPU9T5ukq7_oLvJOfStUhdgwf1tqzg&oe=6221AD6E" class="avatarbb"> 
//   // <img src="img/me.jpg" class="avatar">
//   let temp = `<div class="out-msgbb">
//   <i ><b>Me:</b></i>
//   <span class="my-msgbb">${userInput}</span>
//   </div>`;

//   chatArea.insertAdjacentHTML("beforeend", temp);
//   chatArea.scrollTop=chatArea.scrollHeight;
//   sendMsgOnClickFuncbb();
//   inputElm.value = '';
//   msgPressFuncbb();

// })

submitBtn.addEventListener('click',submitClickedbb)

function submitClickedbb(isEmojipp=true) {
    userInput = inputElm.value;
    // let isEmojibb=document.querySelector('#btn_msg').classList.contains('wavebb');
    let isEmojibb=isEmojipp;
    console.log(isEmojibb);
    // if (userInput.trim().length==0 && !isEmojibb) {
    if (userInput.trim().length==0 && !isEmojibb) {
      return
    }
    console.log(isEmojibb);
    if (isEmojibb) {
        // inputElm.value+='👋';
        // userInput = inputElm.value;
        // inputElm.value+='&#128075;';
        // userInput = '&#128075;';
  
        inputElm.value='<iframe src="https://giphy.com/embed/3ohhwMDyS6rv3sB8yI" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/wetransfer-sticker-3ohhwMDyS6rv3sB8yI">via GIPHY</a></p>';
        userInput = '<iframe src="https://giphy.com/embed/3ohhwMDyS6rv3sB8yI" width="40" height="40" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    }
    // <img src="https://scontent.fcgp28-1.fna.fbcdn.net/v/t1.6435-1/cp0/c0.0.60.60a/p60x60/86468810_665797524174513_3326712462950006784_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=sy3XG1aLy2MAX8k-1Ci&_nc_oc=AQkaOpod8cE9f5yPe7CD_x1ptDRBb8tdbqvj8YSxs8kWJkm3lr8hpx_d99_1zD25C34&_nc_ht=scontent.fcgp28-1.fna&oh=00_AT8qV26QuAQV-JmpVPU9T5ukq7_oLvJOfStUhdgwf1tqzg&oe=6221AD6E" class="avatarbb"> 
    // <img src="img/me.jpg" class="avatar">
    let temp = `<div class="out-msgbb">
    <i ><b>Me:</b></i>
    <span class="my-msgbb">${userInput}</span>
    </div>`;
  
    chatArea.insertAdjacentHTML("beforeend", temp);
    chatArea.scrollTop=chatArea.scrollHeight;
    sendMsgOnClickFuncbb();
    inputElm.value = '';
    msgPressFuncbb();
  
  
    
  
  
}

function msgPressFuncbb() {
  submitBtn = document.querySelector('#btn_msg');

  console.log('press key');
  userInput = inputElm.value;
  console.log(userInput);
    if (userInput.trim().length!=0) {
      console.log('1');
      document.querySelector('.planebb').style.display='block';
      document.querySelector('.wavebb').style.display='none';
    } else{
      console.log('2');
      document.querySelector('.planebb').style.display='none';
      document.querySelector('.wavebb').style.display='block';

    }

    // this will call every time we click .... https://gomakethings.com/checking-event-target-selectors-with-event-bubbling-in-vanilla-javascript/ own explore: fuck....cool
    // Listen to all clicks on the document
    document.addEventListener('click', function (event) {
      console.log('here',event);
      // If the event target doesn't match bail
      // if (event.target.classList.contains('submitbb')){
      if (event.target.matches('i.fas.fa-paper-plane')){
        console.log('finally got');
        submitClickedbb(false);
      };
    }, false);

    
}