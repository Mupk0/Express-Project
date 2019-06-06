import 'bootstrap/dist/css/bootstrap.min.css';
import './css/dark.css';
import './css/index.scss';
import $ from 'jquery';
import 'bootstrap';
import showDeck from './js/deckDisplay';

if (module.hot)       // eslint-disable-line no-undef
    module.hot.accept() // eslint-disable-line no-undef

$(document).ready(function () {
    showPopup();
    changeAnchor();
    $("#deckCode").submit(function (event) {
        event.preventDefault();
        showDeck();
    });
    $('#copyDeckBtn').click(function () {
        $("#deckHash").focus().select();
        document.execCommand('copy');
    });
});

const getUrlAnchor = () => {
    return window.location.hash.slice(1, window.location.hash.length);
};

const changeAnchor = () => {
    $('#yourDeckBtn').click(function () {
        event.preventDefault();
        window.location.hash = '#yourDeck';
        showPopup();
    });
    $('#allDecksBtn').click(function () {
        event.preventDefault();
        window.location.hash = '#allDecks';
        showPopup();
    });
};

const showPopup = () => {
    switch (getUrlAnchor()) {
        case 'yourDeck':
            $("#showDeckPage").css('display', 'block');
            $("#deckList").css('display', 'none');
            break;
        case 'allDecks':
            $("#deckList").css('display', 'block');
            $("#showDeckPage").css('display', 'none');
            break;
        default:
            $("#showDeckPage").css('display', 'none');
    }
};