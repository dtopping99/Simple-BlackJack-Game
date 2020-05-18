var i, d, pscore, dscore, card1, card1a, card2, card2a, card3, card3a, card4, card4a, card5, card5a, pcard1value, pcard2value, pcard3value, pcard4value, pcard5value, dcard1value, dcard2value, dcard3value, dcard4value, dcard5value, dcard1, dcard1a, dcard2, dcard2a, dcard3, dcard3a, dcard4, dcard4a, dcard5, dcard5a, pwins, dwins;

document.querySelector('.newgame').addEventListener('click', function() {
  init();
})
document.querySelector('.hit').addEventListener('click', function() {
  hit();
})
document.querySelector('.stay').addEventListener('click', function() {
  stay();
})

function isOver21() {
  if (pscore > 21) {
    if (pcard1value == 11 || pcard2value == 11 || pcard3value == 11 || pcard4value == 11 || pcard5value == 11) {
      pscore = pscore - 10;
      takeofften = true;
      document.getElementById('score-p').innerHTML = pscore;
    }
    isPlayerBusted();
  }
}

function isPlayerBusted() {
  if (pscore > 21) {
    var displayBTN = document.querySelector('.hitandstaybuttons');
    displayBTN.style.visibility = 'hidden';
    document.getElementById('player-name').innerHTML = 'BUSTED';
    var dcard2DOM = document.querySelector('.dcard2');
    dcard2DOM.src = 'cards/' + dcard2 + dcard2a + '.png';
    document.getElementById('score-d').innerHTML = dscore;
  }
}

function isPlayerAce() {
  if (card1 == 1) {
    pcard1value = 11;
  }
  if (card2 == 1) {
    pcard2value = 11;
  }
  if (card1 == 1 && card2 == 1) {
    pcard1value = 1;
  }
  pscore = pcard1value + pcard2value;
}


function isDealerAce() {
  if (dcard1 == 1) {
    dcard1value = 11;
  }
  if (dcard2 == 1) {
    dcard2value = 11;
  }
  if (dcard1 == 1 && dcard2 == 1) {
    dcard1value = 2;
  }
  dscore = dcard1value + dcard2value;
}

function isDealerBusted() {
  if (dscore > 21) {
    document.getElementById('dealer-name').innerHTML = 'BUSTED';
    document.getElementById('score-d').innerHTML = dscore;
  } else {
    isDealerStay();
  }
}

function isDealerStay() {
  if (dscore > 16 && dscore < 22) {
    whowins();
  } else {
    document.getElementById('score-d').innerHTML = dscore;
    dealerhit();
  }
}

function whowins() {
  if (pscore > dscore) {
    document.getElementById('player-name').innerHTML = 'WINNER!';
  } else if (dscore > pscore) {
    document.getElementById('dealer-name').innerHTML = 'WINNER!';
  } else {
    document.getElementById('player-name').innerHTML = 'Tie';
    document.getElementById('dealer-name').innerHTML = 'Tie';
  }
}

function getCards() {

  // Player's Cards
  card1 = Math.floor(Math.random() * 13) + 1;
  card1a = Math.floor(Math.random() * 4) + 1;
  card2 = Math.floor(Math.random() * 13) + 1;
  card2a = Math.floor(Math.random() * 4) + 1;
  var card1DOM = document.querySelector('.pcard1');
  card1DOM.src = 'cards/' + card1 + card1a + '.png';
  var card2DOM = document.querySelector('.pcard2');
  card2DOM.src = 'cards/' + card2 + card2a + '.png';

  if (card1 > 10) {
    pcard1value = 10;
  } else {
    pcard1value = card1;
  }
  if (card2 > 10) {
    pcard2value = 10;
  } else {
    pcard2value = card2;
  }
  isPlayerAce();
  document.getElementById('score-p').innerHTML = pscore;


  // Dealer's Cards
  dcard1 = Math.floor(Math.random() * 13) + 1;
  dcard1a = Math.floor(Math.random() * 4) + 1;
  dcard2 = Math.floor(Math.random() * 13) + 1;
  dcard2a = Math.floor(Math.random() * 4) + 1;
  var dcard1DOM = document.querySelector('.dcard1');
  dcard1DOM.src = 'cards/' + dcard1 + dcard1a + '.png';
  if (dcard1 > 10) {
    dcard1value = 10;
  } else {
    dcard1value = dcard1;
  }
  if (dcard2 > 10) {
    dcard2value = 10;
  } else {
    dcard2value = dcard2;
  }
  dscore = dcard1value + dcard2value;
  isDealerAce();
  document.getElementById('score-d').innerHTML = dcard1value;
}


function hit() {
  i++;
  if (i == 1) {
    card3 = Math.floor(Math.random() * 13) + 1;
    card3a = Math.floor(Math.random() * 4) + 1;
    var card3DOM = document.querySelector('.pcard3');
    card3DOM.src = 'cards/' + card3 + card3a + '.png';
    var displayDOM = document.querySelector('.pcard3');
    displayDOM.style.display = 'inline-block';
    if (card3 > 10) {
      pcard3value = 10;
    } else {
      pcard3value = card3;
    }
    var pscore3 = pscore + pcard3value;
    document.getElementById('score-p').innerHTML = pscore3;
    pscore = pscore3;
    isOver21();
  }
  if (i == 2) {
    card4 = Math.floor(Math.random() * 13) + 1;
    card4a = Math.floor(Math.random() * 4) + 1;
    var card4DOM = document.querySelector('.pcard4');
    card4DOM.src = 'cards/' + card4 + card4a + '.png';
    var displayDOM = document.querySelector('.pcard4');
    displayDOM.style.display = 'inline-block';
    if (card4 > 10) {
      pcard4value = 10;
    } else {
      pcard4value = card4;
    }
    var pscore4 = pscore + pcard4value;
    document.getElementById('score-p').innerHTML = pscore4;
    pscore = pscore4;
    if (takeofften == true) {
      isPlayerBusted();
    } else {
      isOver21();
    }
  }
  if (i == 3) {
    card5 = Math.floor(Math.random() * 13) + 1;
    card5a = Math.floor(Math.random() * 4) + 1;
    var card5DOM = document.querySelector('.pcard5');
    card5DOM.src = 'cards/' + card5 + card5a + '.png';
    var displayDOM = document.querySelector('.pcard5');
    displayDOM.style.display = 'inline-block';
    if (card5 > 10) {
      pcard5value = 10;
    } else {
      pcard5value = card5;
    }
    var pscore5 = pscore + pcard5value;
    document.getElementById('score-p').innerHTML = pscore5;
    pscore = pscore5;
    if (takeofften == true) {
      isPlayerBusted();
    } else {
      isOver21();
    }
  }
}

function dealerhit() {
  d++;
  if (d == 1) {
    dcard3 = Math.floor(Math.random() * 13) + 1;
    dcard3a = Math.floor(Math.random() * 4) + 1;
    var dcard3DOM = document.querySelector('.dcard3');
    dcard3DOM.src = 'cards/' + dcard3 + dcard3a + '.png';
    var displayDOM = document.querySelector('.dcard3');
    displayDOM.style.display = 'inline-block';
    if (dcard3 > 10) {
      dcard3value = 10;
    } else if (dcard3 == 1) {
      dcard3value = 11;
    } else {
      dcard3value = dcard3;
    }
    dscore = dscore + dcard3value;
    if (dscore > 21) {
      if (dcard1value == 11 || dcard2value == 11 || dcard3value == 11 || dcard4value == 11 || dcard5value == 11) {
        dscore = dscore - 10;
      }
    }
    document.getElementById('score-d').innerHTML = dscore;
    isDealerBusted();
  }

  if (d == 2) {
    dcard4 = Math.floor(Math.random() * 13) + 1;
    dcard4a = Math.floor(Math.random() * 4) + 1;
    var dcard4DOM = document.querySelector('.dcard4');
    dcard4DOM.src = 'cards/' + dcard4 + dcard4a + '.png';
    var displayDOM = document.querySelector('.dcard4');
    displayDOM.style.display = 'inline-block';
    if (dcard4 > 10) {
      dcard4value = 10;
    } else if (dcard4 == 1) {
      dcard4value = 11;
    } else {
      dcard4value = dcard4;
    }
    dscore = dscore + dcard4value;
    if (dscore > 21) {
      if (dcard1value == 11 || dcard2value == 11 || dcard3value == 11 || dcard4value == 11 || dcard5value == 11) {
        dscore = dscore - 10;
      }
    }
    document.getElementById('score-d').innerHTML = dscore;
    isDealerBusted();
  }
  if (d == 3) {
    dcard5 = Math.floor(Math.random() * 13) + 1;
    dcard5a = Math.floor(Math.random() * 4) + 1;
    var dcard5DOM = document.querySelector('.dcard5');
    dcard5DOM.src = 'cards/' + dcard5 + dcard5a + '.png';
    var displayDOM = document.querySelector('.dcard5');
    displayDOM.style.display = 'inline-block';
    if (dcard5 > 10) {
      dcard5value = 10;
    } else if (dcard5 == 1) {
      dcard5value = 11;
    } else {
      dcard5value = dcard5;
    }
    dscore = dscore + dcard5value;
    if (dscore > 21) {
      if (dcard1value == 11 || dcard2value == 11 || dcard3value == 11 || dcard4value == 11 || dcard5value == 11) {
        dscore = dscore - 10;
      }
    }
    document.getElementById('score-d').innerHTML = dscore;
    isDealerBusted();
  }
}

function stay() {
  var displayBTN = document.querySelector('.hitandstaybuttons');
  displayBTN.style.visibility = 'hidden';
  var dcard2DOM = document.querySelector('.dcard2');
  dcard2DOM.src = 'cards/' + dcard2 + dcard2a + '.png';
  document.getElementById('score-d').innerHTML = dscore;
  if (dscore > 16) {
    if (dcard1value == 11 || dcard2value == 11 || dcard3value == 11 || dcard4value == 11 || dcard5value == 11) {
      dscore = dscore - 10;
      dealerhit();
    } else {
    whowins();
    }
  } else {
    dealerhit();
  }
}

function init() {
  i = 0;
  d = 0;
  pscore = 0;
  dscore = 0;
  takeofften = false;
  document.getElementById('score-p').innerHTML = pscore;
  document.getElementById('score-d').innerHTML = dscore;
  document.getElementById('player-name').innerHTML = 'Player';
  document.getElementById('dealer-name').innerHTML = 'Dealer';
  var displayCARD = document.querySelector('.dcard2');
  displayCARD.src = 'cards/bicycle-back.png';
  var displayDOM = document.querySelector('.hitandstaybuttons');
  displayDOM.style.visibility = 'visible';
  var c = 3;
  for (c == 3; c < 6; c++) {
    var displayDOM = document.querySelector('.pcard' + c);
    displayDOM.style.display = 'none';
    var ddisplayDOM = document.querySelector('.dcard' + c);
    ddisplayDOM.style.display = 'none';
  }
  getCards();
}
