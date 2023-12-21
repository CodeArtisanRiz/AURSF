let advParent = document.getElementById('adv');
let execParent = document.getElementById("exec");


let execI = 0;
let advI = 0;

fetchData(4,"both")



$(".btn_toggle_exec").click(function () {
    let execToggle = $('.btn_toggle_exec').text();
    $(this).text(function(i, text){
        return text === "SHOW MORE" ? "SHOW LESS" : "SHOW MORE";
    });
    while (execParent.firstChild) {
        execParent.firstChild.remove()
    }
    execI = 0;
    
    // $("#exec").remove();
    // alert(execToggle);
    loadExec(execToggle);
    
});


function loadExec(execToggle){
    // alert(execToggle);
    if(execToggle=="SHOW MORE"){
        fetchData(100,"exec");
    }
    else if(execToggle=="SHOW LESS"){
        fetchData(4,"exec");
    }
    else {
        fetchData(4,"exec");
    }
}

$(".btn_toggle_adv").click(function () {
    let advToggle = $('.btn_toggle_adv').text();
    $(this).text(function(i, text){
        return text === "SHOW MORE" ? "SHOW LESS" : "SHOW MORE";
    });
    while (advParent.firstChild) {
        advParent.firstChild.remove()
    }
    advI = 0;
    
    // $("#exec").remove();
    // alert(execToggle);
    loadAdv(advToggle);
    
});


function loadAdv(advToggle){
    // alert(execToggle);
    if(advToggle=="SHOW MORE"){
        fetchData(100,"adv");
    }
    else if(advToggle=="SHOW LESS"){
        fetchData(4,"adv");
    }
    else {
        fetchData(4,"adv");
    }

    
}













function fetchData(count,which){
    fetch('./data.json')
      .then (res => res.json())
      .then (data => {
        console.log(data)
        data.forEach(post => {
            if(which == "exec"){
          loadExecData(count, post);
            }
          else if (which== "adv"){
            loadAdvData(count, post);
          }
          else if (which=="both"){
            loadExecData(count, post);
            loadAdvData(count, post);
          }
        });

      });
    }
    
    function loadExecData(count,post){
      if(post.group=="Executive"){
        if(execI < count){
      execParent.insertAdjacentHTML('beforeend', `
      
        <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
          <div class="member d-flex align-items-start">
            <div class="pic"><img src="assets/img/team/executive/${post.img}" class="img-fluid" alt=""></div>
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
    }
    }

    function loadAdvData(count,post){
        if(post.group=="Advisory"){
          if(advI < count){
            advParent.insertAdjacentHTML('beforeend', `
            <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
              <div class="member d-flex align-items-start">
                <div class="pic"><img src="assets/img/team/advisory/${post.img}" class="img-fluid" alt=""></div>
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
      }