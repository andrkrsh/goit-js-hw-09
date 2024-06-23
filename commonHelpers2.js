import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},r=document.querySelector(".form-container");r.innerHTML=n();function n(){return`
  <form class="feedback-form" autocomplete="off">
    <label>
        Email
        <input type="email" name="email" autofocus />
    </label>
    <label>
        Message
        <textarea name="message" rows="8"></textarea>
    </label>
    <button type="submit">Submit</button>
</form>
    `}const a=document.querySelector(".feedback-form");a.addEventListener("input",s);function s(t){const{name:o,value:m}=t.target;e[o]=m,localStorage.setItem("feedback-form-state",JSON.stringify(e))}window.addEventListener("DOMContentLoaded",()=>{const t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&(e.email=t.email||"",e.message=t.message||"",a.elements.email.value=e.email,a.elements.message.value=e.message)});a.addEventListener("submit",l);function l(t){if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}localStorage.removeItem("feedback-form-state"),a.reset()}
//# sourceMappingURL=commonHelpers2.js.map
