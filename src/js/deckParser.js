import {decode} from "deckstrings";
import json from '../json/cards.collectible';

export default (decodeDecks) => {
    decodeDecks = decode(decodeDecks);
    const searchField = 'dbfId';
    const allCards = decodeDecks['cards'];
    let results = [];
    let heroClass = '';
    let deckCost = 0;
    let counter = 0;
    for (let number = 0; number < allCards.length; number += 1) {
        let currentCard = allCards[number];
        for (let i = 0; i < json.length; i += 1) {
            if (json[i][searchField] === currentCard[0]) {
                switch (json[i]['rarity']) {
                    case 'COMMON':
                        deckCost += 40 * currentCard[1];
                        break;
                    case 'RARE':
                        deckCost += 100 * currentCard[1];
                        break;
                    case 'EPIC':
                        deckCost += 400 * currentCard[1];
                        break;
                    case 'LEGENDARY':
                        deckCost += 1600 * currentCard[1];
                        break;
                    default:
                        break;
                }
                counter += currentCard[1];
                results.push([json[i]['id'], json[i]['name'], currentCard[1], json[i]['cost'], json[i]['rarity']]);
            }
        }
    }
    switch (decodeDecks['heroes'][0]) {
        case 637:
            heroClass = 'Mage';
            break;
        case 39117:
            heroClass = 'Mage';
            break;
        case 930:
            heroClass = 'Rogue';
            break;
        case 40195:
            heroClass = 'Rogue';
            break;
        case 274:
            heroClass = 'Druid';
            break;
        case 1066:
            heroClass = 'Shaman';
            break;
        case 50484:
            heroClass = 'Shaman';
            break;
        case 40183:
            heroClass = 'Shaman';
            break;
        case 813:
            heroClass = 'Priest';
            break;
        case 41887:
            heroClass = 'Priest';
            break;
        case 31:
            heroClass = 'Hunter';
            break;
        case 2826:
            heroClass = 'Hunter';
            break;
        case 893:
            heroClass = 'Warlock';
            break;
        case 47817:
            heroClass = 'Warlock';
            break;
        case 51834:
            heroClass = 'Warlock';
            break;
        case 671:
            heroClass = 'Paladin';
            break;
        case 2827:
            heroClass = 'Paladin';
            break;
        case 46116:
            heroClass = 'Paladin';
            break;
        case 7:
            heroClass = 'Warrior';
            break;
        case 2828:
            heroClass = 'Warrior';
            break;
        default:
            heroClass = 'NONE';
            break;
    }
    results.class = heroClass;
    results.cost = deckCost;
    results.numbers = counter;
    results.sort(function (a, b) {
        return a[3] - b[3];
    });
    return results;
};