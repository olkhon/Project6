require('webpack-jquery-ui');


$(function() {
    $("#arrival").datepicker({
        minDate: 0,
    });
    $("#departure").datepicker({
        // set departure date default to one date after arrival date     
        minDate: $('#arrival').datepicker('getDate') + 1,
    });

});

import { performAction } from './js/indexscript.js'
import './styles/style.scss'


export {
    performAction,
}