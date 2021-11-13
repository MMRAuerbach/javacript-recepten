const recipes = [
    {
        title: 'New York Club Sandwich',
        description: 'De lekkerste sandwich maak jezelf! Een club sandwich met bacon, kaas, tomaat, sla en natuurlijk truffel mayonaise.',
        ingredients: [
            'brood', '2 tomaten', 'cheddar cheese', 'bacon', 'sla', 'truffel mayonaise', '2 sateprikkers'
        ],
        preparation: 'Toast het brood en snijd de tomaat in dunnen plakken. Smeer op de onder en bovenkant van het brood een beetje truffelmayonaise. Leg dan alle ingredienten op de onderste boterham. Doe de bovenste boterham erop en steek er een sateprikker door heen zodat deze niet omvalt.',
        image: '/img/sandwich.jpg',
    },
    {
        title: 'De perfecte malse steak',
        description: 'Heb je altijd al een boterzachte, goede steak willen maken? Lees ons recept en zult versteld staan van je eigen kunsten.',
        ingredients: [
            '250-300gr Bief de Lomo', 'peper', 'zout', 'champignonroomsaus', 'pepersaus', '250gr kruidenboter'
        ],
        preparation: 'Haal de steak ruim voor koken uit de koelkast. Houdt hier circa 15-20 minuten per 100 gram aan (minimaal). Verhit een goede grillpan op het vuur, laat deze eerst goed heet worden. Doe 100-150 gram kruidenboter in de pan, wacht tot deze helemaal gesmolten is. Bak de steak, afhankelijk van de gewenste gaarheid. Hiervoor kan je de duim-hand techniek gebruiken.',
        image: '/img/steak.jpg',
    },
    {
        title: 'Simpel maar gezond: Kersen',
        description: 'De lekkerste rood/ paarse vruchten - kersen - wie kent ze niet. Nu nog lekkerder met een beetje kwark.',
        ingredients: [
            '500 gram kersen',
            '300 mililiter kwark',
            'suiker (naar gelang je wil',
            'limonade siroop',
        ],
        preparation: 'Haal de pitten uit de kers (hiervoor kan je een kersenontpitter gebruiken. Vermeng de pitloze kersen met de kwark. Voeg eventueel suiker of limonadesiroop naar smaak toe.',
        image: '/img/cherries.jpg',
    },
    {
        title: 'Vegetarische pasta met wijn',
        description: 'Eet je liever niet zo veel vlees, maar wil je wel genieten van een lekkere pasta met een goed glas wijn?',
        ingredients: [
            '300 gram volkoren spaghetti',
            '200 gram gedroogde groene linzen',
            '2 uien',
            '3 teentjes knoflook',
            '2 tomate',
            '1 grote wortel',
            '1 paprika',
            '250 gram champignons',
            '8 zongedroogde tomaten',
            '1 blikje tomatenpuree',
            '400ml tomatenblokjes',
            '400ml water',
            '1 groenten bouillonblokje',
            '1 laurierblad',
            '1 theeleper oregano',
            'verse basilicum',
            'Pijnpoompitten (naar gelang de smaak/ wens)',
        ],
        preparation: 'Snipper de ui en knoflook fijn. Snijd de paprika, wortel en tomaat in kleine blokjes en de champignons en zongedroogde tomaat in kleine stukjes. Spoel de gedroogde linzen af en laat deze uitlekken. Verhit een pan met boter of olie en fruit hier de ui en knoflook in aan. Voeg daarna de wortel, paprika, champignons en zongedroogde tomaat toe. Laat dit even bakken. Voeg daarna het blikje tomatenpuree toe en bak dit ca. 2 minuten met de groenten mee. Daarna voeg je de tomaten en tomatenblokjes toe, samen met de oregano, het water en bouillonblokje, laurierblad en linzen. Laat het geheel ongeveer 20 minuten pruttelen tot een mooie dikke saus.',
        image: '/img/wine.jpg',
    },
    {
        title: 'Strawberry cheesecake ijs',
        description: 'Het ijs opnieuw uitgevonden, strawberry cheesecake icecream! De hit uit Amerika nu uit je eigen vriezer.',
        ingredients: [
            '200 gram roomboterkoekjes',
            '80 gram boter',
            '1  vanillestokje',
            '900 gram verse roomkaas',
            '250 gram suiker',
            '115 gram zure room',
            '5 eieren',
            '30 gram bloem',
            '250 gram aardbeienjam',
            '1 bakje verse aardbeien',
            'ijs-stokjes',
        ],
        preparation: 'Verwarm de oven voor op 130 ºC. Smelt de boter. Verkruimel voor het deeg de koekjes en meng met de gesmolten boter. Vet de taartvorm in met een beetje boter en druk de koekkruimels er stevig in.Snijd het vanillestokje open en schraap het merg eruit. Meng voor de vulling alle ingrediënten in de keukenmachine tot een gladde massa. Schep de vulling op de kruimelbodem.Leg een ovenschaal onderin de oven. Vul deze met water (hoeft niet warm te zijn). Bak de cake in circa 2 tot 2,5 uur in het midden van de voorverwarmde oven. Laat de taart afkoelen na het bakken. Haal de taart uit zijn vorm en verwarm de aardbeienjam. Was de aardbeien en snijd ze in stukjes. Meng de aardbeien met de aardbeienjam en bestrijk de taart ermee. Leg de taart in de vriezer en wacht 2 uur.',
        image: '/img/popsicle.jpg',
    },
    {
        title: 'Houd je huid fit met zalm',
        description: 'Dat vis gezond is weet iedereen, maar het is ook goed voor je huid. Met dit lekkere zalm recept maak je alle vis lievers blij!',
        ingredients: [
            '2 teentjes knoflook',
            'olijfolie extra vierge',
            '1 limoen',
            '4x 100 gram zalmfilets',
            'peper', 
            'zout',
        ],
        preparation: 'Verwarm de oven voor op 200 °C. Pel en snijd de knoflook heel fijn. Meng een scheut olijfolie om in te bakken met sap van een halve limoen en de knoflook. Leg de zalmfilets op een met bakpapier beklede bakplaat, bestrijk ze met de knoflook-limoenolie en bestrooi met een beetje zout en versgemalen peper. Gaar de zalmfilets circa 18 minuten in de oven. Controleer de zalm door goed naar de huid te kijken. Als de huid witte bolletjes laat zien (dit is albumine, of terwijl eiwit, en komt vrij bij hete temperaturen), dit is een teken dat de zalm prima is om te eten.',
        image: '/img/salmon.jpg',
    },
    {
        title: 'Sushi de Japanse keuken thuis',
        description: 'Niet meer weg te denken, en nu thuis zelf te maken. Sushi :-) Opgerold, omgerold, gefrituurd of gebakken.',
        ingredients: [
            '500 gram Sushi rijst',
            '750ml water',
            '200 gram zalmmoot (zonder huid)',
            '5 nori vellen',
            'Rijst azijn',
            'Zout'
        ],
        preparation: 'Kook de sushi rijst in 2 sessies van 250 gram gaar. Doe 375 mililiter water samen met 250 gram rijst. Breng dit aan de kook en laat daarna in 10 minuten op laag vuur doorkoken. Roer regelmatig en zorgt dat het niet aanbrandt. Meng de warme rijst met 5 eetlepels rijst azijn en een beetje zout en roer dit goed door. Leg een norivel op een sushi-rol-matje en bedek deze voor 70% met een laagje rijst. Doe in het midden van dit laagje een stuk zalm van circa 1x1cm over de hele breedte. Rol de zalm op met behulp van het matje. Het laatste deel norivel kan je met water nat maken, dit zorgt ervoor dat het aan elkaar blijft plakken. ',
        image: '/img/sushi.jpg',
    },
    {
        title: 'Frans ontbijt - la croissant',
        description: 'Uiteraard eindigen we met het beste ontbijt uit Frankrijk - een heerlijke roomboter croissant!',
        ingredients: [
            '4 croissantjes uit de winkel'
        ],
        preparation: 'Doe de croissantjes op een bord, zet het op tafel. Klaar.',
        image: '/img/croissant.jpg',
    },
]