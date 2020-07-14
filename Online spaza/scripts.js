
var data = {
    firstName: 'Tim',
    lastName: 'James',
    email: 'wonganiskosana@gmail.com',
    phone : '0731085293', 
};
var info = localStorage.setItem("data");
info = info ? JSON.parse(info) : {};
info['lastName'] = 'Hope';
localStorage.setItem('data', JSON.stringify(info));