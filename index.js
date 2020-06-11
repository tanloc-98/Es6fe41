let number = 1;

{
    let number = 2;
    console.log('log lần 1',number);
}

console.log('log lần 2',number);

const PI = 3.141592654;

const sinhVien = {ma:1,ten:'nguyen van A'};

sinhVien.ma = 2;
sinhVien.ten = 'nguyen van B';
console.log(sinhVien);


//-----Arrow function------
// let showMessage = function(mess){
//     console.log(mess);
// }

//Khai báo function es6
let showMessage = (mess) => {
    console.log(mess);
}

//Đối với hàm có câu lệnh return
//es5
let tinhDiemTrungBinh = function (dHoa,dLy,dToan){
    return (dToan+dLy+dHoa)/3;
}

//es6
// let tinhDiemTrungBinh = (dHoa,dLy,dToan) => (dToan+dLy+dHoa)/3;

//Khác biệt về ngữ cảnh trỏ this
let sv = {
    hoTen: 'nguyen van a',
    lop: 'Front End 41',
    layThongTinHocVien: function (){
        let hienThiThongTin = () => {
            console.log("Họ tên: ",this.hoTen,"Lớp",this.lop);
        }
        hienThiThongTin();
    }
}

sv.layThongTinHocVien();

//rest param (toán tử ...)
// let hienThiThongTinHocVien = function (hoTen,Lop) {
//     console.log('Họ tên: ' + hoTen);
//     console.log('Lớp: ' + Lop);
// }
let hienThiThongTinHocVien = function (...rest) {
    switch(rest.length){
        case 2 :{
            console.log('Họ tên: ' + rest[0]);
            console.log('Lớp: ' + rest[1]);
        };break;
        case 3:{
            console.log('Họ tên: ' + rest[0]);
            console.log('Lớp: ' + rest[1]);
            console.log('Mã: ' +    rest[2]);
        };break;
        default : console.log('Không hợp lệ');
        
    }
}

hienThiThongTinHocVien(1,'Nguyen van A','fe 41');
// hienThiThongTinHocVien('Nguyen van A','fe 41');