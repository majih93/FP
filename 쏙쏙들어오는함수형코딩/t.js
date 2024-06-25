// 카피 온 라이트 형식으로 코드 변경하기

var mailing_list = [];

function add_contact(email) {
  mailing_list.push(email);
}

function submit_form_handler(event) {
  var form = event.target;
  var email = form.elements(["email"]).value;
  add_contact(email);
}

// 1. add_contact가 전역 변수에 접근하지 않도록 한다. 활용하려는 배열을 인자로 받아서 카피온라이트 하기
// 2. add_contact()값의 리턴값을 전역변수에 할당.

function add_contact_with_copy_on_write(mailing_list_array, email) {
  const result = [...mailing_list_array]; // copy

  result.push(email); // write on copy

  return result; // return copy
}

function submit_form_handler_improved(event) {
  var form = event.target;
  var email = form.elements(["email"]).value;
  // 전역변수에 업데이트된 복사본 할당
  mailing_list = add_contact_with_copy_on_write(mailing_list, email);
}
