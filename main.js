/** 1
 * Tính tổng ngày lương
 * Đầu vào:
 *  + Lương 1 ngày:100.000
 *  + Số ngày làm: 23 ngày
 * Xử lí:
 *  + Tính lương của 23 ngày làm: ngaylam * luong.
 * Đầu ra:
 *  + Tổng lương của 23 ngày làm
 */
var luong = 100000;
var ngaylam = 23;
var tongluong = luong * ngaylam;
var result = "Tổng lương :" + tongluong;
console.log(result)



/** 2
 * Đầu vào:
 *  + Cho lần lượt 5 số thực bất kì
 * Xử lí:
 *  + Tính trung bình của 5 số: (st1 + st2 + st3 +st 4 + st5)/5
 * Đầu ra:
 *  + Kết quả giá trị trung bình của 5 số
 */
var st1 = 2;
var st2 = 4;
var st3 = 8;
var st4 = 9;
var st5 = 7;
var tongst = st1 + st2 + st3 + st4 + st5;
var tb = tongst / 5
var result = "Kết quả: " + tb
console.log(result)



/** 3
 * Đầu vào:
 *   + Xác định mệnh giá 1USD = 23.500
 * Xử lí:
 *   + Tính giá trị chuyển đổi từ USD sang VND
 * Đầu ra:
 *    + Có được giá trị khi đổi USD sang VND
 */
var vnd = 235000;
var USD = 10 * vnd;
var result = "10 USD :" + USD;
console.log(result);


/** 4
 * Đầu vào:
 *   + Xác định chiều dài HCN cd
 *   + Xác định chiều rộng HCN cr
 * Xử lí:
 *   + chu vi = (cd+cr)*2
 *   + diện tích = cd * cr
 * Đầu ra:
 *   + Tính được diện tích và chu vi HCN
 */
var cd = 4;
var cr = 3;
var chuvi = (cd + cr) * 2;
var dientich = cd * cr;
var result = "Chu vi là: " + chuvi;
var result = "Diện tích là: " + dientich + "  Chu vi là: " + chuvi;
console.log(result);



/**5
 * 
 */
var n = 295;
var hundred = Math.floor(n / 100);
var ten = Math.floor(n % 100 / 10);
var unit = n % 10;
var sum = hundred + ten + unit;
console.log(sum);


