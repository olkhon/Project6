require('webpack-jquery-ui');


$(function() {
    $("#arrival").datepicker({
        minDate: 0,

    });
    $("#departure").datepicker({

    });

});

import { performAction } from './js/indexscript.js'
import './styles/style.scss'


export {
    performAction,
}