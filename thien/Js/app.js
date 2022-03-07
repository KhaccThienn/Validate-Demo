document.getElementById('user').addEventListener('input', check=()=>{
    var user = document.getElementById('user').value;
    if (isUser(user)){
        document.getElementById('user').style.border = "1px solid green";
    } else {
        document.getElementById('user').style.border = "1px solid red";
    }
});

document.getElementById('email').addEventListener('input', check=()=>{
    var mail = document.getElementById('email').value;
    if (isMail(mail)) {
        document.getElementById('email').style.border = "1px solid green";
    } else {
        document.getElementById('email').style.border = "1px solid red";
    }
});

document.getElementById('pass').addEventListener('input', check=()=>{
    var pass = document.getElementById('pass').value;
    if (isPass(pass)) {
        document.getElementById('pass').style.border = "1px solid green";
    } else {
        document.getElementById('pass').style.border = "1px solid red";
    }
});

document.getElementById('pass2').addEventListener('input', check=()=>{
    var pass2 = document.getElementById('pass2').value;
    var pass = document.getElementById('pass').value;

    if (isPass(pass2)) {
        document.getElementById('pass2').style.border = "1px solid green";
    } else {
        document.getElementById('pass2').style.border = "1px solid red";
    }

    if (pass == pass2) {
        document.getElementById('pass2').style.border = "1px solid blue";
        alert('checked');
    } else {
        document.getElementById('pass2').style.border = "1px solid red";
        
    }
});

document.getElementById('tel').addEventListener('input', check=()=>{
    var tel = document.getElementById('tel').value;
    if (isTel(tel)) {
        document.getElementById('tel').style.border = "1px solid green";
    } else {
        document.getElementById('tel').style.border = "1px solid red";
    }
});

document.getElementById('day').addEventListener('input',check=()=>{
    var day = document.getElementById('day').value;
    if (isDate(day)) {
        document.getElementById('day').style.border = "1px solid green";
    } else {
        document.getElementById('day').style.border = "1px solid red";
    }
});


isUser=(user)=>(/^[A-Z\s]{3,20}$/.test(user));
isMail=(mail)=>(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/.test(mail));
isPass=(pass)=>(/^[a-zA-Z0-9]{6,9}$/.test(pass));
isTel=(tel)=>(/^[0][3|5|7|8|9][0-9]{8}$/.test(tel));
isDate=(day)=>(/^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/.test(day));

document.getElementById('submit').addEventListener('click', check=()=>{
    var userVal = document.getElementById('user').value;
    var mailVal = document.getElementById('email').value;
    var passVal = document.getElementById('pass').value;
    var pass2Val = document.getElementById('pass2').value;
    var telVal = document.getElementById('tel').value;
    var dayVal = document.getElementById('day').value;

    if (userVal == '' || mailVal == '' || passVal == '' || pass2Val == '' || telVal == '' || dayVal == '') {
        alert('Cac truong k dc de trong');
        document.getElementById('user').style.border = "1px solid red";
        document.getElementById('email').style.border = "1px solid red";
        document.getElementById('pass').style.border = "1px solid red";
        document.getElementById('pass2').style.border = "1px solid red";
        document.getElementById('day').style.border = "1px solid red";
        document.getElementById('tel').style.border = "1px solid red";
    } else {
        alert('da gui !');
        location.href = '../index.html';
    };
});
