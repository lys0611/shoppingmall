let userData = {
    "id": "abc123",
    "password": "abc123",
    "name": "홍길동",
    "email": "abc123@gmail.com",
    "address": "서울시 노원구 중계동",
    "phoneNum": "01012345678"
}
//
// function idSearch() {
//     let inputName = document.getElementById('name').value;
//     let inputPhone = document.getElementById('phone-num').value;
//
//     if (inputName === userData.name && inputPhone === userData.phoneNum) {
//         // 일치하면 해당 사용자의 ID를 출력
//         alert("찾으시는 아이디는 " + userData.id + "입니다.");
//     } else {
//         // 일치하지 않으면 메시지 출력
//         alert("일치하는 계정이 없습니다. 다시 확인해주세요.");
//     }
// }




// login 예시
// function login(){
//     var id = $("#id").val().trim();
//     if (id == "") {
//         alert("아이디를 입력해 주세요.");
//         $("#id").focus();
//         return;
//     }
//     var ps = $("#ps").val().trim();
//     if (ps == "") {
//         alert("패스워드를 입력해 주세요.");
//         $("#ps").focus();
//         return;
//     }
//
//     var url ="jsp/login.jsp?id=" + id + "&ps=" + ps;
//     AJAX.call(url, null, function(data) {
//         var code = data.trim();
//         if(code == "NE") {
//             alert("아이디가 존재하지 않습니다.");
//         }
//         else if(code == "PE") {
//             alert("패스워드가 일치하지 않습니다.");
//         }
//         else {
//             window.location.href = "main.html";
//         }
//     });
// }
// --------------------------------------------

// signup jsp-script 연계 함수 예시
// function signup(){
//     var id = $("#id").val().trim();
//     if (id == "") {
//         alert("아이디를 입력해 주세요.");
//         $("#id").focus();
//         return;
//     }
//     var ps = $("#ps").val().trim();
//     if (ps == "") {
//         alert("패스워드를 입력해 주세요.");
//         $("#ps").focus();
//         return;
//     }
//
//     var ps2 = $("#ps2").val().trim();
//     if (ps != ps2) {
//         alert("입력된 두 개의 패스워드가 일치하지 않습니다.");
//         $("#ps2").focus();
//         return;
//     }
//
//     var name = $("#name").val().trim();
//     if (name == "") {
//         alert("이름을 입력해 주세요.");
//         $("#name").focus();
//         return;
//     }
//
//     var usrobj = {id: id, password: ps, name: name, ts: getToday()};
//     var params = {id: id, jsonstr: JSON.stringify(usrobj)};
//     var url ="jsp/signup.jsp";
//     AJAX.call(url, params, function(data) {
//         var code = data.trim();
//         if(code == "EX") {
//             alert("이미 가입한 회원입니다.");
//         }
//         else if(code == "ER") {
//             alert("회원가입 처리중 에러가 발생하였습니다.");
//         }
//         else {
//             alert("회원 가입이 완료되었습니다.");
//             window.location.href = "main.html";
//         }
//     });
// }
//
// function getToday() {
//     var date = new Date();
//     var year = date.getFullYear();
//     var month = ("0" + (1 + date.getMonth())).slice(-2);
//     var day = ("0" + date.getDate()).slice(-2);
//     return year + "-" + month + "-" + day;
// }