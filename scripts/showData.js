$(document).ready(function(){

    const itemAbout = [
        {
            item: "mdi mdi-speedometer",
            title: "Fast",
            text: "Efficient and quality work, applying the best practices.",
            time: ".0s"
        },
        {
            item: "mdi mdi-sync",
            title: "Agile",
            text: "Focused on scrum agility and teamwork.",
            time: ".2s"
        },
        {
            item: "mdi mdi-lightbulb-outline",
            title: "Intuitive",
            text: "Strong preference for clean, easy-to-read code.",
            time: ".4s"
        },
        {
            item: "mdi mdi-domain",
            title: "Architect",
            text: "Lover of clean architecture and design patterns.",
            time: ".6s"
        }
    ]
    
    const itemSkills = [
        {
            language: "Java",
            level: "85%"
        },
        {
            language: "Spring boot",
            level: "50%"
        },
        {
            language: "SQL/Postgres",
            level: "70%"
        },
        {
            language: "Javascript",
            level: "60%"
        },
        {
            language: "Firebase",
            level: "75%"
        },
        {
            language: "Node.js/React",
            level: "55%"
        },
        {
            language: "Flutter",
            level: "30%"
        },
        {   
            language: "Kotil/Android",
            level: "70%"
        },
        {
            language: "Python",
            level: "30%"
        },
        {
            language: "Junit",
            level: "40%"
        }
    ]

    const itemProjects = [
        {
            name: "Pokedex",
            subTitle: "Pure Kotlin",
            id: "poke",
            class: "mix mobil"
        },
        {
            name: "Portfolio",
            subTitle: "Javascript, HTML and CSS",
            id: "portfolio",
            class: "mix web"
        },
        {
            name: "Perficient Bootcamp",
            subTitle: "React, Kotlin and Java",
            id: "perficient",
            class: "mix web"
        },
        {
            name: "Space Invaders",
            subTitle: "Pure Java",
            id: "space",
            class: "mix destop"
        },
        {
            name: "Minecraft Clone",
            subTitle: "Pure React",
            id: "mine",
            class: "mix web"
        },
        {
            name: "EmprediIcesi",
            subTitle: "Pure Node.js",
            id: "emprendi",
            class: "mix web"
        },
        {
            name: "Estructopoly",
            subTitle: "Pure Java",
            id: "estruc",
            class: "mix destop"
        },
        {
            name: "NoteApp",
            subTitle: "Pure Kotlin",
            id: "note",
            class: "mix mobil"
        },
        {
            name: "SIP",
            subTitle: "Pure Kotlin",
            id: "sip",
            class: "mix mobil"
        }
    ]
    
    const itemExperience = [
        {
            name: "Icesi university",
            date: "FEBRUARY 01, 2020",
            text: "Software system engineer student at the number one university in Colombia.",
            href: "https://www.icesi.edu.co/es/",
            image: "thumb-1"
        },
        {
            name: "Tech Camp, focused on Java, DevOps, Frontend, Backend y QA.",
            date: "DECEMBER 21, 2022",
            text: "Perficient, Inc. is a global digital consultancy. The company's efforts include enterprise mobile applications, creative services, marketing, digital strategy Internet of Things, information technology, management consulting, custom development, and platform implementations.",
            href: "https://www.perficient.com/",
            image: "thumb-2"
        },
        {
            name: "CertiProf - Scrum Foundation Professional Certificate SFPC.",
            date: "AUGUST 20, 2022",
            text: "The Scrum Foundation exam is part of the CertiProf certification program which has been developed in cooperation with international experts in the field. After passing the Scrum Foundation Professional exam, you will have gained an overview and basic understanding of Scrum.",
            href: "https://certiprof.com/",
            image: "thumb-3"
        }
    ]
    

    //load operations ------------------------------------------------------------------------------------------------------------------------------------

    var id = "about0"
    itemAbout.map((item, index) => {
        
        if(index != "0" && (parseInt(index)) % 2 == 0){
            id = "about" + index

            $("#grip-about").append(`
                <div class="flex row-gt-sm" id=${id}>
                    <div class="flex bullet-wrap " >
                        <div class="hex-wrap waypoint" data-animation="flip-in-x" data-delay=${item.time}>
                            <div class="hexagon">
                                <i class="${item.item}"></i>
                            </div>
                        </div>
                        <div class="waypoint" data-animation="fade-in" data-delay=${item.time}>
                            <div class="label bold">${item.title}</div>
                            <div>${item.text}</div>
                        </div>
                    </div>
                </div>
            `)

        }else{
            $("#" + id).append(`
            
                <div class="flex bullet-wrap " >
                    <div class="hex-wrap waypoint" data-animation="flip-in-x" data-delay=${item.time}>
                        <div class="hexagon">
                            <i class="${item.item}"></i>
                        </div>
                    </div>
                    <div class="waypoint" data-animation="fade-in" data-delay=${item.time}>
                        <div class="label bold">${item.title}</div>
                        <div>${item.text}</div>
                    </div>
                </div>
            
            `)

        }
    })
 
    itemSkills.map((item) => {
        $(`#skills`).append(`
            <div class="bar flex">
                <div class="bar fill" style="width:${item.level}">
                    <div class="tag bold flex">${item.language}</div>
                </div>
                <span>${item.level}</span>
            </div> 
        `)
    })

    itemProjects.map((item) => {
        $("#gallery").append(`
            <div class="${item.class}" data-my-order="1">
                <div>
                    <div class="card"></div>
                    <div class="text">
                        <div class="bold">${item.name}</div>
                        <span class="highlight">${item.subTitle}</span>
                    </div>
                    <div class="button" id="${item.id}">LEARN MORE</div>
                </div>
            </div>
        `)
    })

    itemExperience.map((item) => {
        $("#education").append(`
            <a href="${item.href}" target="_blank">
                <div class="blog-wrap waypoint" data-animation="fade-in" data-delay=".4s">
                    <div class="thumb" id="${item.image}"></div>
                    <div class="label bold">${item.name}</div>
                    <div class="date">${item.date}</div>
                    <div class="bar"></div>
                    <div class="text">
                        ${item.text}
                    </div>
                </div>
            </a>
        
        `)
    })
    

})