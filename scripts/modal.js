$(document).ready(function(){

  // MODAL
  var modalText = {
    poke: {
      title: 'Pokedex',
      tag: 'ENTERTAINMENT AND STATISTICS.',
      detail: 'This application consumes an external Api provided by the PokeApi page, for the development of the application the MVVM architecture, Jetpack Compose for the views, Reprofit, Coil, Dagger - Hilt and Palette were used.',
      link: 'https://github.com/ArturoDiaz02/Pokedex-JetpackCompose'
    },
    portfolio: {
      title: 'Portfolio',
      tag: 'PERSONAL PAGE',
      detail: 'Web page created with js, html and css this page fulfills the purpose of personal portfolio',
      link: 'https://arturodiaz02.github.io/Portfolio/'
    },
    perficient: {
      title: 'Perficient Bootcamp',
      tag: 'SQL RULE PAGE',
      detail: 'Web page has the purpose of creating sql rules, this page is created with typescript using react for the frontend and with kotlin and java for the backend.',
      link: 'https://github.com/PerficientBootcampStudents'
    },
    space: {
      title: 'Space invader',
      tag: 'DESKTOP GAME',
      detail: 'Clone of the famous space invaders game made in java using javafx tools.',
      link: 'https://github.com/ArturoDiaz02/Space_Invaders'
    },
    mine: {
      title: 'Minecraft Clone',
      tag: 'WEB GAME',
      detail: 'Clone of the famous minecraft game using react together with the tree.js library.',
      link: 'https://github.com/ArturoDiaz02/Minecraft-Clone'
    },
    emprendi: {
      title: 'EmprendIcesi',
      tag: 'ECOMMERCE PAGE',
      detail: 'This website has the purpose of connecting entrepreneurs from the icesi university with potential clients, facilitating communication and thus sales. This page was made with node.js.',
      link: 'https://github.com/danielaolartebo/IS-emprendicesi'
    },
    estruc: {
      title: 'Estructopoly',
      tag: 'DESKTOP GAME',
      detail: 'Clone of the famous monopoly game created using Java and the resources provided by javafx.',
      link: 'https://github.com/cuatrosr/Estructopoly'
    },
    note: {
      title: 'NoteApp',
      tag: 'UTILITY',
      detail: 'Mobile application to make personal notes: -> architecture: MVVM and clean architecture, -> views: Jetpack Compose, -> extras: Dagger - Hilt, Use Case and Room',
      link: 'https://github.com/ArturoDiaz02/NoteApp-JetpackCompose'
    },
    sip: {
      title: 'SIP',
      tag: 'INSURANCE APP',
      detail: 'Mobile application for insurance management, this application was built using XML views, SQLITE in addition to the services offered by Firebase such as firestore, storage, remote config and auth',
      link: 'https://github.com/ArturoDiaz02/Smart-Insurance'
    },
    flework: {
      title: 'Flework',
      tag: 'SEARCH WORK',
      detail: 'This site offers the opportunity for employers to look for workers and for unemployed people to look for work, this project is in production and was supported by the Gobernacion de Cundinamarca, Colombia.',
      link: 'https://app.flework.com/'
    },
    whatsapp: {
      title: 'Whatsapp Cloud Api',
      tag: 'MESSENGER API',
      detail: 'This api offers messaging and chat bot services using Meta\'s whatsapp cloud api, for the moment I can\'t show the code due to confidentiality issues.',
      link: ''
    },
    citophone: {
      title: 'Citophone Web API',
      tag: 'MESSENGER API',
      detail: 'This api offers services to the recidencial units to facilitate the issue of cytophonies or notification to the recidencials through the API, the code cannot be shown due to confidentiality issues.',
      link: '',
    }
  };

  $('#gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var slideWidth = 700 
  setDimensions();

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.modal').css('max-width', slideWidth);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });
   
  }
})
