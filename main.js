function baitap1() {
    /* Bước 1 : Dom và khởi tạo */
    let num1 = +document.getElementById("num1").value;

    /* Bước 2: Xử Lý */

    let ketqua = " "; 
    for( let inumber = 2; inumber <= num1; inumber++){
        //kiểm tra inumber có phải là số nguyên tố hay không
        let checknumber = true;
        for(let i = 2; i <= Math.sqrt(inumber); i++) {
            if (inumber % i === 0){
                checknumber = false;
                break;
            }
        }
        if(checknumber) {
            ketqua += inumber + " "; 
        }
    }
    console.log(ketqua)
    
  let divResult = document.getElementById("result1");
  divResult.style.display = "block";
  divResult.innerHTML = ketqua;
};
