/**
 * Created by jjaganathan on 2/28/2017.
 */

import "babel-polyfill";
import $ from 'jquery';
import toastr from 'toastr';
 
let x = 'Hello World!4';

let x1 = (x2) => { alert(x2); alert('from an anonymous function' + x2); return x2; };

$(function() { 
        $('#btn1').on('click', showMsg);
        alert('success');
    }
); 

function showMsg() {
    toastr.warning('this is from the main.js  file');
}
//alert(x.padStart(35, "foo"));

//alert(x1('test'));

//alert(x1('hello world mar1'));
 