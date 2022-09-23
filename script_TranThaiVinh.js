function dientich(){
    txt_cr = document.getElementById("txt_cr").value;
    txt_cd = document.getElementById("txt_cd").value;
    
    dt = txt_cd*txt_cr;
    if(txt_cr <= 0 || txt_cr == null||txt_cd<0||txt_cd==null)
    {
        alert("Bạn vui lòng nhập lại!\n Chiều rộng và Chiều dài lớn 0 \n và không được để trống!");
    }
    else{
            document.getElementById("txt_DienTich").value = dt;

    }
    
}
