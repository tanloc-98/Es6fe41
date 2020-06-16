// let number = 1;

// {
//     let number = 2;
//     console.log('log lần 1',number);
// }

// console.log('log lần 2',number);

// const PI = 3.141592654;

// const sinhVien = {ma:1,ten:'nguyen van A'};

// sinhVien.ma = 2;
// sinhVien.ten = 'nguyen van B';
// console.log(sinhVien);


// //-----Arrow function------
// // let showMessage = function(mess){
// //     console.log(mess);
// // }

// //Khai báo function es6
// let showMessage = (mess) => {
//     console.log(mess);
// }

// //Đối với hàm có câu lệnh return
// //es5
// let tinhDiemTrungBinh = function (dHoa,dLy,dToan){
//     return (dToan+dLy+dHoa)/3;
// }

//es6
// let tinhDiemTrungBinh = (dHoa,dLy,dToan) => (dToan+dLy+dHoa)/3;

//Khác biệt về ngữ cảnh trỏ this
// let sv = {
//     hoTen: 'nguyen van a',
//     lop: 'Front End 41',
//     layThongTinHocVien: function (){
//         let hienThiThongTin = () => {
//             console.log("Họ tên: ",this.hoTen,"Lớp",this.lop);
//         }
//         hienThiThongTin();
//     }
// }

// sv.layThongTinHocVien();

// //rest param (toán tử ...)
// // let hienThiThongTinHocVien = function (hoTen,Lop) {
// //     console.log('Họ tên: ' + hoTen);
// //     console.log('Lớp: ' + Lop);
// // }
// let hienThiThongTinHocVien = function (...rest) {
//     switch(rest.length){
//         case 2 :{
//             console.log('Họ tên: ' + rest[0]);
//             console.log('Lớp: ' + rest[1]);
//         };break;
//         case 3:{
//             console.log('Họ tên: ' + rest[0]);
//             console.log('Lớp: ' + rest[1]);
//             console.log('Mã: ' +    rest[2]);
//         };break;
//         default : console.log('Không hợp lệ');
        
//     }
// }

// hienThiThongTinHocVien(1,'Nguyen van A','fe 41');
// // hienThiThongTinHocVien('Nguyen van A','fe 41');

// //...resParam
// let num1 = 1;
// let num2 = num1;
// num2 = 5;
// console.log('num1',num1);
// console.log('num2',num2);

// let sinhVienA = {ma:1, ten:'Nguyễn văn a'};
// let sinhVienB = {...sinhVienA,lop:'FrontEnd41'};
// sinhVienB.ten = 'Nguyễn thị b';
// console.log('sinhVienA',sinhVienA.ten);
// console.log('sinhVienB',sinhVienB);
// //Array
// let arrNumA = [1,2,3,4,5];
// let arrNumB = [...arrNumA,4,...arrNumA];

// // arrNumB.push(4);

// console.log('arrNumA',arrNumA);
// console.log('arrNumB',arrNumB);

// let sanPham = {
//     ma:1,
//     tenSp:'Samsung',
//     gia:10000,
//     thongTinSanPham:{
//         Rom:'256GB',
//         CPU:'Snapdragon 855',
//         Ram: '8GB'
//     },
//     hienThiThongTinSanPham: function(){
//         console.log('Mã Sp',this.ma);
//         console.log('Tên Sp',this.ten);
//         console.log('Giá Sp',this.gia); 
//     }
// }
// let {tenSp,ma,gia,thongTinSanPham,hienThiThongTinSanPham} = sanPham;
// let {Rom} = sanPham.thongTinSanPham;
// hienThiThongTinSanPham();
// console.log(thongTinSanPham.CPU);

// let sinhVienArr = [1,'Nguyễn Văn a','Frontend41'];
// let [ma,ten,lop,hienThiThongTin] = [1,'Nguyễn văn a','Frontend41',()=> {
//     console.log(1,'Nguyễn văn a');
// }];
// console.log(ten);
// hienThiThongTin();

// let getInfo = (ten = 'Trực',namSinh = 1998 , tuoi = 2020 - namSinh) =>{
//     console.log('Tên',ten);
//     console.log('Tuổi',tuoi);
// };
// getInfo("Khải",2000,17);

// let propsMaSV = 'maSV';

// let sinhVien123 = {
//     [propsMaSV]:123,
//     ['tenSV']: 'Trần Văn Tèo'
// }

// let ma = '123';
// let tenHV = 'Lê thị B';
// let hienThiThongTinHocVien = ()=>{
//     console.log('hello !!!!');
// }
// let hocVien ={
//     ma,
//     tenHV,
//     hienThiThongTinHocVien
// }
// console.log(hocVien);

// //For in
// let mangDienThoai = [
//     {ma:1,ten:'Sony Xperia XZ5', gia:1500},
//     {ma:2,ten:'Iphone XS MAX',gia:2000},
//     {ma:3,ten:'SamSung galaxy note 10',gia:3000}
// ]
// //For in chạy trên Index
// console.log('for-in');
// for(let index in mangDienThoai){
//     console.log(mangDienThoai[index]);
// }
// //For of: Duyệt từng phần tử trong mảng
// console.log('for-of');
// for(let item of mangDienThoai){
//     console.log('Điện thoại',item);
// }
// //For in dùng để duyệt thuộc tính Object
// //For of dùng để duyệt các phần tử của mảng [Array]

// import {NhanVien,TruongPhong} from './models/NhanVien.js' 
// import NhanVienPrototype from './models/NhanVien.js'
// let sv = new NhanVien(1,'Tèo');

// console.log(sv);

// let truongPhong = new TruongPhong(1,'Nguyễn Văn B');

// console.log(truongPhong);


let mangSanPham = [
    {maSP:1,TenSP:'Sony Xperia XZ2',Gia:10000,hangSX: 'Sony'},
    {maSP:2,TenSP:'Sony Xperia XZ1',Gia:20000,hangSX: 'Sony'},
    {maSP:3,TenSP:'Sony Xperia XZPrepium',Gia:30000,hangSX: 'Sony'},
    {maSP:4,TenSP:'Google Pixel XL',Gia:40000,hangSX: 'GOOGLE'},
    {maSP:5,TenSP:'Google Pixel 2',Gia:50000,hangSX: 'GOOGLE'},
    {maSP:6,TenSP:'SamSung Galaxy Note 9',Gia:60000,hangSX: 'SAMSUNG'},
    {maSP:7,TenSP:'SamSung Galaxy S10 Plus',Gia:70000,hangSX: 'SAMSUNG'},
    {maSP:8,TenSP:'SamSung Galaxy S10 5G',Gia:80000,hangSX: 'SAMSUNG'}
]

let mangDienThoaiSony = mangSanPham.filter(sanPham => sanPham.hangSX === 'SONY');
console.log(mangDienThoaiSony);
let mangTren50000 = mangSanPham.filter(sanPham => sanPham.Gia > 50000);
console.log(mangTren50000);

