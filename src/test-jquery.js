/**
 * câu lệnh import này chỉ có ý nghĩa với webpack, angular để build bundle file này kèm theo dependencies
 * VScode dựa vào câu lệnh import để Jump code
 * ---
 * import ko có ý nghĩa với Browser => Muốn run liveServer bắt buộc phải add Jquery.js, testlib.js vào index.html
 * phải comment dòng lệnh dưới thì LiveServer mới chạy đc
 */
// import * as $ from 'jquery';
// import { testlib } from './lib/testlib';

function restart() {
  /**
   * jump code để xem
   */
  $.ajax({
    url: '/src/test.json',
    type: 'GET',
    accepts: 'application/json; charset=utf-8',
    success: function (result) {
      alert(JSON.stringify(result));
    },
    error: function (error) {
      alert(JSON.stringify(error));
    },
  });
}

function testImport() {
  alert(testlib);
  //   alert('testlib');
}
