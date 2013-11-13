angular.module('OzamatazApp', ['ngTouch'])


.controller('MainCtrl', ['$scope', function($scope) {
    $scope.activeSounds = 'east2013';
    $scope.soundsNav = [
        ['east2013', 'East 2013'],
        ['west2013', 'West 2013'],
        ['east2014', 'East 2014'],
        ['west2014', 'West 2014'],
    ];
    $scope.sounds = {
        // Name, file name.
        east2013: [
            ["D'Marcus Williams", '01_dmarcus'],
            ["T.J. Juckson", '02_tj'],
            ["T'variusness King", '03_king'],
            ["Tyroil Smoochie-Wallace", '04_tyroil'],
            ["D'Squarius Green, Jr.", '05_dsquarius'],
            ["Ibrahim Moizoos", '06_ibrahim'],
            ["Jackmerius Tacktheritrix", '07_jackmerius'],
            ["D'Isiah T. Billings-Clyde", '08_disiaht'],
            ["D'Jasper Probincrux III", '09_djasper'],
            ["Leoz Maxwell Jilliumz", '10_leoz'],
            ["Javaris Jamar Javarison-Lamar", '11_javaris'],
            ["Davoin Shower-Handel", '12_davoin'],
            ["Hingle McCringleberry", '13_hingle'],
            ["L'Carpetron Dookmarriot", '14_lcarpetron'],
            ["J'Dinkalage Morgoone", '15_jdinkalage'],
            ["Xmus Jaxon Flaxon-Waxon", '16_xmus'],
        ],

        west2013: [
            ["Saggitariutt Jefferspin", '17_saggitariutt'],
            ["D'Glester Hardunkichud", '18_hardunkichud'],
            ["Swirvithan L'Goodling-Splatt", '19_splatt'],
            ["Quatro Quatro", '20_quatro'],
            ["Ozamataz Buckshank", '21_ozamataz'],
            ["Beezer Twelve Washingbeard", '22_beezer'],
            ["Shakiraquan T.G.I.F. Carter", '23_shakira'],
            ["X-Wing @Alicious -ness", '24_xwing'],
            ["Sequester Grundelplith M.D. ", '25_sequester'],
            ["Scoish Velociraptor Maloish", '26_scoish'],
            ["T.J. A.J. R.J. Backslashinfourth V", '27_tj'],
            ["Eeeee Eeeeeeeee", '28_e5e9'],
            ["Donkey Teeth", '29_donkey'],
            ["Torque (Construction Noise) Lewith", '30_torque'],
            ["The Player Formerly Known as Mousecop", '31_mousecop'],
            ["Dan Smith", '32_dansmith'],
        ],

        east2014: [
            ["Coznesster Smiff", '33_smiff'],
            ["Elipses Corter", '34_elipses'],
            ["Nyquillus Dillwad", '35_dillwad'],
            ["Bismo Funyuns", '36_bismo'],
            ["Decatholac Mango", '37_mango'],
            ["Mergatroid Skittle", '38_skittle'],
            ["Quiznatodd Bidness", '39_bidness'],
            ["D'Pez Poopsie", '40_poopsie'],
            ["Quackadilly Blip", '41_quack'],
            ["Goolius Boozler", '42_boozler'],
            ["Bisquiteen Trisket", '43_trisket'],
            ["Fartrell Cluggins", '44_fartrell'],
            ["Blyrone Blashinton", '45_blyrone'],
            ["Cartoons Plural", '46_cartoons'],
            ["Jammie Jammie-Jammie", '47_jammie'],
            ["Fudge", '48_fudge'],
        ],

        west2014: [
            ["Equine Ducklings", '49_equines'],
            ["Dahistorius Lamystorius", '50_dahistorius'],
            ["Ewokoniad Sigourneth JuniorStein", '51_ewok'],
            ["Eqqsnuizitine Buble-Schwinslow", '53_eqqs'],
            ["Huka'laka...", '54_huka'],
            ["King Prince Chambermaid", '55_prince'],
            ["Ladennifer Jadaniston", '56_ladennifer'],
            ["Ladadadala...", '57_ladala'],
            ["Harvard University", '58_harvard'],
            ["Morse Code", '59_morse'],
            ["Wingdings", '60_wingdings'],
            ["Firstname Lastname", '61_firstname'],
            ["God", '62_god'],
            ["Sque...eps", '63_sque10ps'],
            ["Benedict Cumberbatch", '64_benedict'],
            ["A.A. Ron Balakay", '65_aaron'],
        ]
    };

    $scope.play = function(e) {
        var $target = $(e.target);
        $target = $target.add($target.parent('a'));

        $('audio').each(function(i, audio) {
            // Stop all other sounds.
            audio.pause();
            audio.currentTime = 0;
        });
        $target.find('audio')[0].play();

        // Click animation
        $target.addClass('clicked');
        setTimeout(function() {
            $target.removeClass('clicked');
        }, 200);
    };
}]);
