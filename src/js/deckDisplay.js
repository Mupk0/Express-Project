import $ from "jquery";
import deckParser from "./deckParser";

export default () => {
    $(".deckList").find("li").remove();
    const newDeck = $("#deckHash").val();
    const myDecks = deckParser(newDeck);
    let colorRarity = '';
    for (let n = 0; n < myDecks.length; n += 1) {
        switch (myDecks[n][4]) {
            case 'COMMON':
                colorRarity = '#b99361';
                break;
            case 'FREE':
                colorRarity = '#2ecc71';
                break;
            case 'RARE':
                colorRarity = '#0070dd';
                break;
            case 'EPIC':
                colorRarity = '#a335ee';
                break;
            case 'LEGENDARY':
                colorRarity = '#ff8000';
                break;
            default:
                break;
        }
        $(".deckList").find('ul').append($("<li id='" + n + "'>"));
        $("#" + n).append($("<div class='card-name'>").text(myDecks[n][1]));
        $("#" + n).append($("<div class='card-background'>").css('background-image', 'url(https://art.hearthstonejson.com/v1/tiles/' + myDecks[n][0] + '.png)'));
        $("#" + n).append($("<div class='card-gem-common'>").text(myDecks[n][3]));
        $("#" + n).append($("<img src='https://art.hearthstonejson.com/v1/render/latest/enUS/256x/" + myDecks[n][0] + ".png' alt='' class='card-show'>"));
        $("#" + n).append($("<div class='card-rarity'>").text('x' + myDecks[n][2]).css('border-right', '5px solid ' + colorRarity));
        $("#modalTitle").text(myDecks.class);
        $("#" + n).hover(
            function () {
                $('#' + n).find('img').fadeIn('fast');
            }, function () {
                $('#' + n).find('img').fadeOut('fast');
            }
        );
    }
    $(".deckList").find('ul').append($("<li id='deck-coast'>").text("Crafting Cost:     " + myDecks.cost));
    $("#deck-coast").append($("<div class='card-count'>").text(myDecks.numbers + " /30"));
};