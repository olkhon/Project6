// jquery package require
require('webpack-jquery-ui');

//initialize datepicker jquery -> originally validation idea found on https://stackoverflow.com/a/21336604
$(function() {
    $("#arrival").datepicker({
        minDate: 0,
        onSelect: function(date) {
            const arrival = $('#arrival').datepicker('getDate');
            const arrivalDateNumber = arrival.getDate();
            const departureDate = arrivalDateNumber + 1;
            $('#departure').datepicker('minDate', departureDate);
        }
    });
    $('#departure').datepicker({

        minDate: $('#arrival').datepicker('getDate'),
        onClose: function() {
            const arrival = $('#arrival').datepicker('getDate');
            const departure = $('#departure').datepicker('getDate');
            if (departure <= arrival) {
                const minDate = $('#departure').datepicker('option', 'minDate');
                $('#departure').datepicker('setDate', minDate);
            }
        }
    });

});

import { performAction } from './js/indexscript.js'
import './styles/style.scss'


export {
    performAction
}