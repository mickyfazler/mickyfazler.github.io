console.log('I am pop');

const popup = document.querySelector('.chat-popupbb');
console.log(popup);
const chatBtn = document.querySelector('.chat-btnbb');
const submitBtn = document.querySelector('.submitbb');
const chatArea = document.querySelector('.chat-areabb');
const inputElm = document.querySelector('#inptTxt');
const emojiBtn  = document.querySelector('#emoji-btnbb');
let picker = null;


// Emoji selection  
window.addEventListener('DOMContentLoaded', () => {
    picker = new EmojiButton();
   

    picker.on('emoji', emoji => {
      document.querySelector('input').value += emoji;
    });
  
    emojiBtn.addEventListener('click', () => {
      picker.togglePicker(emojiBtn);
    });
  });        

//   chat button toggler 

let newMsgNum=0;
const closeBtnbb=document.querySelector('#closemsgbb');
chatBtn.addEventListener('click', ()=>{
    console.log('clicked chat');
    // means if have then remove...if not then add...cool
    // popup.classList.toggle('showbb');
    popup.classList.add('showbb');
    chatArea.scrollTop=chatArea.scrollHeight;

    
    closeBtnbb.addEventListener('click',()=>{
    console.log('closebtn 1');
      
      popup.classList.remove('showbb');
    
    })

    document.querySelector('#newMsgbb').style.display='none';
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
submitBtn.addEventListener('click', ()=>{

    userInput = inputElm.value;
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


    

})

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
    document.querySelector('#newMsgbb').innerText=newMsgNum;
    document.querySelector('#newMsgbb').style.display='flex';
  }

}
