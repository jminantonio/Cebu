mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hcXVpbm1hIiwiYSI6ImNtaDljOW1qdzBsZDAyanB2NDBtampndjcifQ.2-MkwRU0D_epq19-VY6JKg';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/joaquinma/cmjdepwnu002001skhv40chh8',
    // center: [121.05, 14.65], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    center: [123.9397821, 10.3224833],
    zoom: 12, // starting zoom
    // maxZoom: 15,
    maxBounds: [
        [110.0, 4.5],
        [140.0, 21.5]]
});

const points = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 1,
            properties: {
                name: 'Bagong Silangan',
                description: `Bagong Silangan is a barangay in Quezon City close to where my family lives in the Northeast of the city.
                There are multiple urban poor areas in the barangay with notable ones including Sitio Bakal and Mt. Carmel. Sitio Bakal
                is one of the few rural areas in all of the National Capital Region where many farm to make a livelihood.`,
                key: 'bagong',
                icon: 'bagong'
            },
            geometry: {
                type: 'Point',
                coordinates: [121.115, 14.706]
            }
        },
        {
            type: 'Feature',
            id: 2,
            properties: {
                name: 'The Community Garden (Paraiso)',
                description: `The Community Garden, locally known as Paraiso, is the manifestation of the collective effort of the people
                to assert their will to the land through an activity known as Bungkalan. Set up by members of Pinagkaisang Lakas ng Mamamayan (PLM) in Sitio Bakal, the people
                collectively till the land, harvest the land, and reap the produce of the land. In resisting against the efforts
                of professional land-grabbing syndicates and the government to repress the people, the tilling of Paraiso provides them
                with vegetables for food sovereignty and confidence to struggle and fight another day!`,
                key: 'garden',
                icon: 'garden'
            },
            geometry: {
                type: 'Point',
                coordinates: [121.1154933, 14.7093923]
            }
        },
        {
            // FIX
            type: 'Feature',
            id: 3,
            properties: {
                name: 'Broom Making',
                description: `Many families in Labogon are apart of the Labogon Soakers and Broommakers Association (LSBA). They produce
                brooms through a multi-step process
                involving soaking the palm bark, refining the palm bark, constructing the brooms, and finally painting the brooms. Soaking
                the palm bar is very dangerous work. Many former soakers have had to stop their practice
                because their limbs would go numb from the salt pits. Two children have even died from inhalling the fumes and drowning
                in the pits. For all of this, broommakers only make an average of 200 pesos or around $3.41 a day.`,
                key: 'brooms',
                icon: 'brooms'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.9610502, 10.3557465]
            }
        },
        {
            type: 'Feature',
            id: 4,
            properties: {
                name: 'Refining the Palm Bark',
                description: `Many children drop out of school in Labogon because the cost of education is too expensive for them and
                their families. Many turn towards broom making as a way to make a livelihood, and refining the palm bark into bristles
                is less dangerous than soaking the palm by the pits.`,
                key: 'refine',
                icon: 'refine'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.9613523, 10.3557772]
            }
        },
        {
            type: 'Feature',
            id: 5,
            properties: {
                name: 'Battered Labogon Home',
                description: `Many in Labogon lived in houses closer to the water by the salt pits. But in 2021, Typhoon Odette destroyed
                many homes. As a result, people moved further away from the water. However, flooding is not only a regular occurance and necessity
                to clear the water in the soaking pits, but it has gotten worse since land reclamation projects were completed nearby. In November
                2025, Typhoon Tino once again flooded Labogon and people's homes were damaged. Unfortunately, many are still unable to repair
                the holes in their floors, walls, and ceilings because of lack of monetary aid from the government: many are hit with rain as they
                sleep at night.`,
                key: 'labogonhome',
                icon: 'labogonhome'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.9602882, 10.3549595]
            }
        },
        {
            type: 'Feature',
            id: 6,
            properties: {
                name: 'Abandoned Local Government Unit Building',
                description: `Located right next to the community is an abandoned local government unit building. It's decrepit state
                is quite the epitome of infrastructure projects funded by the Philippine government. Before it was abandoned, it actually
                briefly served as a temporary jail for some corrupt officials.`,
                key: 'lgu',
                icon: 'lgu'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.9611520, 10.3553417]
            }
        },
        {
            type: 'Feature',
            id: 7,
            properties: {
                name: 'Mangrove Trees',
                description: `The Mangrove trees serve as a natural barrier against flooding and they grow throughout the coast of Labogon.
                However, with the construction of recent land reclamation projects, more and more mangrove trees have been destroyed.
                Yet, if the people of Labogon tear one down, they are hit with huge fines!`,
                key: 'mangrove',
                icon: 'mangrove'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.9601549, 10.3552509]
            }
        },
        {
            type: 'Feature',
            id: 8,
            properties: {
                name: `Pakna'an`,
                description: `Pakna'an is an urban poor barangay in Mandaue, the third largest city in Cebu. It sits on the Butuanon river
                and was the site for flood control projects. However, residents of the barangay say that the government had only ever
                placed large stones to act as flood control. No Concrete barriers ad no metal or iron bars remain after the destruction
                caused by the typhoon. In fact, the people of Pakna'an say the flooding got worse because the government uprooted the
                mangrove trees already along the water to make way for their supposed "flood control projects". What used to be people's 
                houses are now ruins, and what little trust people had in the government has completely shattered. `,
                key: 'paknaanriver',
                icon: 'paknaanriver'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.9540737, 10.3410456]
            }
        },
        {
            type: 'Feature',
            id: 9,
            properties: {
                name: 'Destroyed Home',
                description: `There are too many destroyed homes like these to count in Pakna'an. Most of people's belongings were lost,
                and people were lucky to make it out alive. Stories reveal the lengths people took to save their children and elders.
                Wooden plank bridges and make-shift ziplines were constructed to escape from roof to roof. \n 
                
                However, after the flood had calmed, the people waited for the government to deliver on their promised assitance. But
                none would come. People had no where to go. After the government had kicked people out of the evacuation centers after
                only two weeks, people did not have money to rent temporary housing nor buy materials to rebuild their homes. One nanay
                eagerly cursed out the President and his first cousin who recently resigned as the speaker of the house.`,
                key: 'destroyedhome',
                icon: 'destroyedhome'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.9533926, 10.3410317]
            }
        },
        {
            type: 'Feature',
            id: 10,
            properties: {
                name: 'Sudtunggan Rope Maker Community',
                description: `This is the view of two opposing housing developments on either side from an urban poor community
                of rope makers in Sudtunggan.
                The Sudtunggan Rope Makers Association is made up of mostly urban poor women living on privately owned land.
                Despite living on the land for multiple decades, they technically are squatters, and only just recently did the landowner 
                file court orders to demolish their homes.
                But when it comes time to relocate, the rope makers have no money to rebuild a house. The government has promised some
                a relocation site, but even this site is located in a dangerzone prone to flooding.For most people, they have not received
                any notice as to when their demolition will be carried out. For all some know, it may occur next January. This is the familiar
                tactic to urban poor activists called pocket demolitions, where not only are isolated communities targeted for demolition and
                displacement, but single families are targeted and isolated one by one in order to prevent unity.
                The rope makers of Sudtunggan have no where to go!`,
                key: 'sudtungganapartments',
                icon: 'sudtungganapartments'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.9587307, 10.2801362]
            }
        },
        {
            type: 'Feature',
            id: 11,
            properties: {
                name: 'Cement Company',
                description: `This nearby cement company attempted to steal the land of many people's homes in Labogon by producing fake maps
                and documents. It took a community wide effort to dispel their efforts, but this didn't stop the company from targetting 
                community leaders. One community leader had to go into hiding after threatened for runing for local office. He would end up
                dying in the hospital. Some associate his death from stress.`,
                key: 'cement',
                icon: 'cement'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.9610608, 10.3517139]
            }
        },
        {
            type: 'Feature',
            id: 12,
            properties: {
                name: 'Rope Making',
                description: `The average wages of a rope maker are similar to that of a broommakers at around 200 pesos a day.
                They make this wage by purchasing grass, weaving it into rope in a three-step process, and then selling the rope.
                But they binded to sell the rope back to the same company
                which sold them the grass. The company then not only gets to decide where to sell the rope, but reapes all the profit
                from the final rope sales. In effect, they the Sudtunggan rope makers are contracted laborers exploited through their
                wage labor -- and of course they receive no benefits`,
                key: 'rope',
                icon: 'rope'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.9588422, 10.2805237]
            }
        },
        {
            type: 'Feature',
            id: 13,
            properties: {
                name: 'Tipolo',
                description: `This is the view of a corridor in a temporary housing block in Tipolo, Mandaue.\n
                Residents have formed the Tipolo
                Residents Association to assert their right to permanant housing. Many residents have been displaced twice from their homes.
                First, from a fire in a traditional urban poor neighborhood, and second after a development agency wanted to build on the site
                of their former temporary housing site. Their housing situation now is neither permanant nor sufficient. They only receive water
                for three hours of the day and pay exorbitant fees for electricity. The residents have protested for years for permanant housing,
                but the government has only repressed them. A Civiian Military Operation was conducted in the housing block by placing live-in 
                operatives to surveil and harass residents of the association. They have even labeled the residents as members of the insurgent
                group the New People's Army. The government then created their own association to divide the residents. They said the residents
                could only cleanse their name by joining the government association. Despite these efforts, the residents have shown strong unity
                to continue to fight for their rights!`,
                key: 'tipolo',
                icon: 'tipolo'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.9377732, 10.3271488]
            }
        },
        {
            type: 'Feature',
            id: 14,
            properties: {
                name: 'Pasil',
                description: `This is a view of the Cebu-Cordova Link Expressway bridge from Pasil, an urban poor barangay located in the
                city center of Cebu City. The Guadalupe river and a government building form the boundaries for some residents in Pasil as
                the scrap together pieces of tarp to form a roof. Typhoon Tino devastated the homes of many in Pasil, but they do not earn
                enough money to pull together more durable materials for a house. Many make Pusô, which is a rice cake made with woven palm
                leaves in the shape of hearts to earn a living who also make around 200 pesos a day selling 1000 piece of Pusô. The barangay
                has a history of fascist repression, most significantly with police killings as a result of the state initiated drug war. Nanays
                tell the stories about how the police knocked door to door, dragged people out on the street, and killed suspected drug users and
                dealers in their own homes. Due to a combination of economic, gender-based, and other factors, a Kalipunan ng Damayang Mahihirap (Kadamay) women's
                chapter has sprung up in Pasil to fight for the rights of the urban poor women!`,
                key: 'pasil',
                icon: 'pasil'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.8960718, 10.2899897]
            }
        },
        {
            type: 'Feature',
            id: 15,
            properties: {
                name: 'To Demolish',
                description: `Whereever these red marks appear, the site is set for demolition. \n
                The residents of Pasil are currently most concerned with their looming displacement. The Cebu-Cordova Link Expressway
                remains the largest bridge in the Philippines, but is hardly ever used. To profit off of the investment, the government is eyeing
                Pasil as the location for on and off ramps because of its central location in Cebu City.`,
                key: 'redmark',
                icon: 'redmark'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.8959301, 10.2902535]
            }
        },
        {
            type: 'Feature',
            id: 16,
            properties: {
                name: 'Carbon Market',
                description: `Carbon Public Market is the oldest and largest public market in the Visayas. It is open 24 hours and the site of work
                for more than 6,000 workers, laborers, and over 1,000 farmers. It is a major food security hub for the urban and rural working classes
                providing agricultural and aquacultural products from provinces throughout the Visayas and Mindanao. However, the government signed
                a Public-Private-Partnership with Megawide Construction Corporation to tear down the many blocks of the marketplace. There is a high
                likelihood that Megawide will partner with SM, as they have in the past, to build a mall and monopolize the local food supply.
                The large empty lot used to be the site of the Freedom Park Market section of the Carbon Market, but it was tore down and replaced with
                a memorial.`,
                key: 'carbon',
                icon: 'carbon'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.8984881, 10.2915872]
            }
        },
        {
            type: 'Feature',
            id: 17,
            properties: {
                name: 'Candle Light Vigil for an Assasinated Lawyer',
                description: `The vendors at Carbon Market are resisting! They have formed the Carbon Hanong Alyansa, the Carbon Friendly Alliance to
                protect the market from privatization. They currently have around 800 vendors in their alliance and have filled cases against the
                development project. However, in 2021, a day after submitting a case, their lawyer was shot dead in the street. This is an
                eggregious examples of state repression against the poor. The people would fill the streets to light candles for
                the slain lawyer, Rex Fernandez.`,
                key: 'candle',
                icon: 'candle'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.8982315, 10.2913273]
            }
        },
        {
            type: 'Feature',
            id: 18,
            properties: {
                name: 'Puso Village',
                description: `Part of the Private-Public-Partnership involved building the Puso Village. It is the generic, hipster-aesthetic,
                gentrified outlet. To attract more tourists, a new Santo Niño Chapel was built right across the street from the Puso
                Village. Most of the stalls remain empty as the traditional vendors remain at Carbon Market.`,
                key: 'pusovillage',
                icon: 'pusovillage'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.9015860, 10.2916023]
            }
        },
        {
            type: 'Feature',
            id: 19,
            properties: {
                name: 'Special Economic Zones',
                description: `Some of the only jobs Cebuanos can find are located in Special Economic Zones. There are 10 in Cebu. Most are
                related to manufacturing, and you'll find Nike and Addidas here. However, Special Economic Zones do not follow the same labor
                regulations that are mandatory elsewhere. This means longer hours, lower pay, and poor working conditions. Unions are also banned!`,
                key: 'sez',
                icon: 'sez'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.9811049, 10.3276751]
            }
        },
        {
            type: 'Feature',
            id: 20,
            properties: {
                name: `Mactan-Benito Ebuen Air Base`,
                description: `The Mactan-Benito Ebuen Air Base was originally built by the United States, and today retains some control through
                the Enhanced Defense Cooperation Agreement signed in 2014. The base is located on Mactan and is not subject to any type
                of inspection by the Philippines. This means that the United States can store weapons material without the knowldege of the Philippines.`,
                key: 'edca',
                icon: 'edca'
            },
            geometry: {
                type: 'Point',
                coordinates: [123.9743701, 10.3147956]
            }
        }
    ]
};


map.on('load', () => {
    const icons = {
        // FIX the non jpg. images get stretched out
        bagong: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/bagong.jpg',
        garden: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/garden.jpg',
        brooms: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/brooms.jpg',
        refine: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/refine.jpg',
        labogonhome: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/labogonhome.jpg',
        lgu: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/lgu.jpg',
        mangrove: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/mangrove.jpg',
        paknaanriver: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/paknaanriver.jpg',
        destroyedhome: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/destroyedhome.jpg',
        sudtungganapartments: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/sudtungganapartments.jpg',
        cement: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/cement.jpg',
        rope: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/rope.jpg',
        tipolo: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/tipolo.jpg',
        pasil: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/pasil.jpg',
        redmark: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/redmark.jpg',
        carbon: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/carbon.jpg',
        candle: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/candle.jpg',
        pusovillage: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/pusovillage.jpg',
        sez: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/sez.jpg',
        edca: 'https://raw.githubusercontent.com/jminantonio/Cebu/main/edca.jpg'
    };

    Object.entries(icons).forEach(([name, url]) => {
        map.loadImage(url, (error, image) => {
            if (error) throw error;
            if (!map.hasImage(name)) {
                map.addImage(name, image);
            }
        });
    });

    map.addSource('points', {
        type: 'geojson',
        data: points
    });

    map.addLayer({
        id: 'points-layer',
        type: 'symbol',
        source: 'points',
        layout: {
            'icon-image': ['get', 'icon'],
            'icon-size': 0.04
        }
    });

    const featureByKey = {};
    points.features.forEach(f => {
        featureByKey[f.properties.key] = f;
    });

    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('click', () => {
            const key = item.dataset.key;
            const feature = featureByKey[key];

            if (!feature) return;

            // For POINT features
            const coords = feature.geometry.coordinates;

            map.flyTo({
                center: coords,
                zoom: 19,
                speed: 1.2,
                curve: 1.4,
                essential: true
            });

            const popupContent = `
          <div>
              <h3>${properties.name}</h3>
              <p><strong>${properties.description}</strong></p>
          </div>
    `;

            new mapboxgl.Popup()
                .setLngLat(coords)
                .setHTML(popupContent)
                .addTo(map);
        });
    });

    map.on('click', 'points-layer', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const properties = e.features[0].properties;

        const popupContent = `
          <div>
              <h3>${properties.name}</h3>
              <p><strong>${properties.description}</strong></p>
          </div>
    `;

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map);

    });

    map.on('mouseenter', 'points-layer', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'points-layer', () => {
        map.getCanvas().style.cursor = '';
    });

});