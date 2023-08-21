let HOST = 'https://api-all-admins.gcsconsultant.com';
// HOST = 'http://localhost'

if (['dev-all-admins.gcsconsultant.com'].includes(window.location.hostname)) {
    HOST = 'dev-api-all-admins.gcsconsultant.com'
}
if (['all-admins.gcsconsultant.com'].includes(window.location.hostname)) {
    HOST = 'api-all-admins.gcsconsultant.com'
}

console.log('Current Host: ' + HOST)

let ADMIN_ROUTE = '/admin'
let BASE_URL = HOST + ADMIN_ROUTE

// Sent Header default in all API Request
$.ajaxSetup({
    headers: { 'authorization': localStorage.getItem("authorization") || null }
});

// Table Error Disable
if ($.fn.dataTable && $.fn.dataTable.ext && $.fn.dataTable.ext.errMode) {
    $.fn.dataTable.ext.errMode = 'none';
}

// Toastr Configuration
let toastrColor = {
    loader_error: '#FB5F1C',
    loader_success: '#3AAA3C'
}

// Toastr Function
function toastError(title, message) {
    $.toast({
        heading: title || 'message',
        text: message ? String(message) : 'Something Went Wrong',
        position: 'top-right',
        loaderBg: toastrColor.loader_error,
        class: 'jq-toast-danger',
        hideAfter: 3500,
        stack: 6,
        showHideTransition: 'fade'
    });
}

function toastSuccess(title, message) {
    $.toast({
        heading: title || 'Success',
        text: message ? String(message) : '',
        position: 'top-right',
        loaderBg: toastrColor.loader_success,
        class: 'jq-toast-success',
        hideAfter: 3500,
        stack: 6,
        showHideTransition: 'fade'
    });
}

// Date Time
function getDateTime(dateObject) {
    if (dateObject && (new Date(dateObject)) != 'Invalid Date') {
        let date = new Date(dateObject)
        return `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`
    }
    return 'INVALID DATE'
}

// Time Convert 24 Hour to 12 Hour
function t24to12(time) {
    if (!time) { return }
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
        time = time.slice(1); // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
}

// Time Convert 12 Hour to 24 Hour with 2 digit
function t12to24(time) {

    if (!time) { return }
    let hours = Number(time.match(/^(\d+)/)[1]);
    let minutes = Number(time.match(/:(\d+)/)[1]);
    let AMPM = time.match(/\s(.*)$/)[1];
    if (AMPM == "PM" && hours < 12) hours = hours + 12;
    if (AMPM == "AM" && hours == 12) hours = hours - 12;
    let sHours = hours.toString();
    let sMinutes = minutes.toString();
    if (hours < 10) sHours = "0" + sHours;
    if (minutes < 10) sMinutes = "0" + sMinutes;

    return sHours + ':' + sMinutes;
}