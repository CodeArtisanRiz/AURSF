const execGroup = document.getElementById('exec');
const advGroup = document.getElementById('adv');
const allExecBody = document.getElementById('allExecBody');

let execI = 1;
let advI = 1;


    fetch('./data.json')
      .then (res => res.json())
      .then (data => {
        console.log(data)
        data.forEach(post => {



        if(post.group=="Executive"){
            if(execI < 5){
            // for(let i = 0; i < 4; i++){
          execGroup.insertAdjacentHTML('beforeend', `
          
            <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
              <div class="member d-flex align-items-start">
                <div class="pic"><img src="${post.img}" class="img-fluid" alt=""></div>
                <div class="member-info">
                  <h4>${post.name}</h4>
                  <span>${post.designation}</span>
                  <p>Dept. of ${post.dept}</p>
                  <div class="social">
                    <a href=""><i class="ri-twitter-fill"></i></a>
                    <a href=""><i class="ri-facebook-fill"></i></a>
                    <a href=""><i class="ri-instagram-fill"></i></a>
                    <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>
          
          `);
            };
            execI++;
            // }
        }

        
        
        // else {
        //   // 
        // }
        if(post.group=="Advisory"){
          if(advI < 5){
            advGroup.insertAdjacentHTML('beforeend', `
            <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
              <div class="member d-flex align-items-start">
                <div class="pic"><img src="${post.img}" class="img-fluid" alt=""></div>
                <div class="member-info">
                  <h4>${post.name}</h4>
                  <!-- <span>President</span> -->
                  <p>Dept. of ${post.dept}</p>
                  <div class="social">
                    <a href=""><i class="ri-twitter-fill"></i></a>
                    <a href=""><i class="ri-facebook-fill"></i></a>
                    <a href=""><i class="ri-instagram-fill"></i></a>
                    <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>
          `);
          }
          advI++

        }
        });

      });