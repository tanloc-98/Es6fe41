// //es5
// var sinhVien = function(){
//     this.ma = '';
//     this.hoTen = '';
//     this.hienThiThongTin = function(){
//         console.log('ma',ma);
//         console.log('hoten',hoTen);
//     }
// }
//es6
// export class NhanVien{
//     ma = '';
//     hoTen = '';
//     constructor(maSV,tenSV){
//         this.ma = maSV;
//         this.hoTen = tenSV;
//     };
//     hienThiThongTin (){
//         console.log('ma',ma);
//         console.log('hoten',hoTen);
//     }
// }


// export class TruongPhong extends NhanVien {
//     danhSachNhanVien = [];
//     constructor(maSV,tenSV){
//         super(maSV,tenSV);
//     }
//     hienThiThongTin(){
//         super.hienThiThongTin();
//     }
// }

// //Export default 1 file chỉ được 1 lần 
// export default NhanVien;

// //Export mỗi file có thể được nhiều lần 