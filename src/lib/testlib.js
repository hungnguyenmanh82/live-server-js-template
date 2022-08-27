/**
 * phải bỏ câu lệnh export đi thì mới chạy
 * vì Browser ko hiểu lệnh "export"
 * export này chỉ dùng cho các tool như webpack và VScode thôi
 */
// export var testlib = 'test static lib import';
var testlib = 'test static lib import';

module.exports = testlib;
