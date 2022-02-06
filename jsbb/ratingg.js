const leave_meeting=document.querySelector('#leave_meeting');
// console.log(leave_meeting);
const ratingScrn=document.querySelector('#rating_scrnid');
leave_meeting.onclick=()=>{
    console.log('taki clicked');
    ratingScrn.style.visibility= 'visible';
    ratingScrn.classList.add("activebb");
    // webSockety.close();
    // peeryk.close();

    const btn = document.querySelector("#postfdkbb");
    const post = document.querySelector(".post");
    const widget = document.querySelector(".star-widget");
    {/* const editBtn = document.querySelector(".edit"); */}

    let fedbck = document.querySelector("#fedbackbb");
    let frm_feed={};
    btn.onclick = (e)=>{
        e.preventDefault();
        console.log('giving feedback');
        widget.style.display = "none";
        post.style.display = "block";

        /* copied from https://stackoverflow.com/questions/1423777/how-can-i-check-whether-a-radio-button-is-selected-with-javascript */
        var radios = document.getElementsByTagName('input');
        var value;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                // get value, set checked flag or do whatever you need to
                // value = radios[i].value;       
                value = radios[i].id;       
            }
        }

        /* copy end */
        console.log('value',value);
        // console.log('value',value.split('-'));
        // console.log('value',value.split('-')[1]);

        // console.log('fdk',fedbck.value);
        let ratings=value.split('-')[1];
        let fed_msg=fedbck.value.trim();
        if (fed_msg ==''){

            frm_feed['ratingjs']=ratings;
            frm_feed['feedmsgjs']='blankbb';
            console.log('blank baby',frm_feed);
        }else{
            frm_feed['ratingjs']=ratings;
            frm_feed['feedmsgjs']=fed_msg;
            console.log('with fedback baby',frm_feed);
        }
        frm_feed['actionjs']='feedbackyjs';
        /* copy end */

        //   editBtn.onclick = ()=>{
        //     widget.style.display = "block";
        //     post.style.display = "none";
        //   }
        // setTimeout(() => {
        //     // close();
        //     window.location.replace("now please do what you want to do");
        //   }, 1500);
        console.log(frm_feed);
        webSockety.send(JSON.stringify(frm_feed));
    

        webSockety.close();
        peeryk.close();

        // giving back to previous page
        setTimeout(() => {            
            window.history.go(-1)
        }, 2000);
        
        return false;
    }

    
}
