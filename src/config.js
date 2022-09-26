
let Links = [
  { link: 'blog', text: 'blog' },
  { link: 'shop', text: 'shop' },
  { link: 'about', text: 'about me' }
];

//cambiar tambien en app.html
let Layout = 'column';

let Landing = true;

if (Landing == true) {
  Layout = 'column';
};

const Config = {
  Links,
  Layout,
  Landing
};

export default Config;
