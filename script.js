
const contentPlace = document.querySelector('.content_place');
const buy_tour = document.querySelectorAll('#buy');

const info = {
    Ukraine: {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png",
        description: {
            count: 2,
            p1: "Ukraine regained its independence in 1991 with the dissolution of the Soviet Union" +  
                "Since its independence, Ukraine has been governed as a unitary republic under a" +  
                "semi-presidential system. It declared itself a neutral" +
                "state,[16] forming a limited military partnership with" +
                "Russia and other CIS countries while also establishing" +
                "a partnership with NATO in 1994.",
            p2: "Ukraine regained its independence in 1991 with the dissolution of the Soviet Union" +  
                "Since its independence, Ukraine has been governed as a unitary republic under a" +  
                "semi-presidential system. It declared itself a neutral" +
                "state,[16] forming a limited military partnership with" +
                "Russia and other CIS countries while also establishing" +
                "a partnership with NATO in 1994."
        },
        numOfSights: 3,
        sight_1: {
            headLine: "Kamianets-Podilskyi",
            img: "https://expatexplore.com/blog/wp-content/uploads/2019/10/kamianets-podilskyi-midieval-castle-ukraine.jpg",
            count: 3,
            p1: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p2: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p3: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            price: "90$",
            count_buy: 0,
        },
        sight_2: {
            headLine: "Kyiv",
            img: "https://www.coe.int/documents/16695/8680975/ukraine-kiev.jpg/643fa981-9841-23e9-9f5f-74a747c4d3f9",
            count: 2,
            p1: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p2: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            price: "110$",
            count_buy: 0,
        },
        sight_3: {
            headLine: "Bukovel",
            img: "https://travels-ukraine.com/wp-content/uploads/2016/11/1439475218-853825__bukovel.jpg",
            count: 2,
            p1: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p2: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            price: "150$",
            count_buy: 0,
        }    
    },
    India: {
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png",
        description: {
            count: 1,
            p1: "India, officially the Republic of India (Hindi: Bhārat Gaṇarājya),[26] is a country in South" +  
                "Asia. It is the seventh-largest country by area, the second-most populous country, and the" +  
                "most populous democracy in the world. Bounded by the Indian Ocean on the south, the" +
                "Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land" +
                "borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the north; and Bangladesh" +
                "and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the" +
                "Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand," +
                "Myanmar and Indonesia.",
        },
        numOfSights: 3,
        sight_1: {
            headLine: "Sight #1",
            img: "https://cdn.mos.cms.futurecdn.net/3FnczamRyWU6MvRMEXWaGD.jpg",
            count: 3,
            p1: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p2: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p3: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            price: "100$",
            count_buy: 0,
        },
        sight_2: {
            headLine: "Sight #2",
            img: "https://www.pewresearch.org/religion/wp-content/uploads/sites/7/2021/09/PF_21.09.16_indiaComposition_featured.jpg",
            count: 2,
            p1: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p2: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            price: "135$",
            count_buy: 0,
        },
        sight_3: {
            headLine: "Sight #3______",
            img: "https://www.pwc.com/gx/en/brand-simplified/teaser-images-670/engineering/damil-gettyimages-965094550-670.jpg",
            count: 2,
            p1: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p2: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            price: "125$",
            count_buy: 0,
        }  
    },
    Japan: {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png",
        description: {
            count: 1,
            p1: "Japan (Japanese: 日本, Nippon or Nihon,[nb 1] and formally 日本国[nb 2]) is an island country" +  
                "in East Asia. It is situated in the northwest Pacific Ocean, and is bordered on the west by" +  
                "the Sea of Japan, while extending from the Sea of Okhotsk in the north toward the East" +
                "China Sea and Taiwan in the south. Japan is a part of the Ring of Fire, and spans an" +
                "archipelago of 6852 islands covering 377,975 square kilometers (145,937 sq mi); the five" +
                "main islands are Hokkaido, Honshu (the 'mainland'), Shikoku, Kyushu, and Okinawa. Tokyo" +
                "is the nation's capital and largest city; other major cities include Yokohama, Osaka, Nagoya, " +
                "Sapporo, Fukuoka, Kobe, and Kyoto." + 
                "Japan is the eleventh most populous country in the world, as well as one of the most densely populated and urbanized.",
        },
        numOfSights: 3,
        sight_1: {
            headLine: "Object #1",
            img: "https://edit-tokyo.com/wp-content/uploads/2021/07/Japan-2107x1406-1.jpg",
            count: 3,
            p1: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p2: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p3: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            price: "110$",
            count_buy: 0,
        },
        sight_2: {
            headLine: "Object #2",
            img: "https://www.brinknews.com/wp-content/uploads/2022/02/Shibuya-Japan_jezael-melgoza-alY6_OpdwRQ-unsplash.jpg",
            count: 2,
            p1: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p2: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            price: "135$",
            count_buy: 0,
        },
        sight_3: {
            headLine: "Object #3______",
            img: "https://afar-production.imgix.net/uploads/content_items/images/a7Lo5lPDd2/original_shutterstock_1579780528.jpg",
            count: 2,
            p1: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p2: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            price: "200$",
            count_buy: 0,
        }  
    },
    Australia: {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/800px-Flag_of_Australia_%28converted%29.svg.png",
        description: {
            count: 1,
            p1: "Australia, officially the Commonwealth of Australia, is a sovereign country comprising" +  
                "the mainland of the Australian continent, the island of Tasmania, and numerous smaller" +  
                "islands.[13] With an area of 7,617,930 square kilometres (2,941,300 sq mi),[14] Australia" +
                "is the largest country by area in Oceania and the world's sixth-largest country. Australia" +
                "is the oldest,[15] flattest,[16] and driest inhabited continent,[17][18] with the least fertile" +
                "soils.[19][20] It is a megadiverse country, and its size gives it a wide variety of landscapes" +
                "and climates, with deserts in the centre, tropical rainforests in the north-east, and" +
                "mountain ranges in the south-east." + 
                "Indigenous Australians have inhabited the continent for approximately 65,000 years.[21] The European" +
                "maritime exploration of Australia commenced in the early 17th century with the arrival of Dutch explorers. "
        },
        numOfSights: 3,
        sight_1: {
            headLine: "Object #1",
            img: "https://harveylawcorporation.com/wp-content/uploads/2020/02/Australia-2-scaled.jpg",
            count: 3,
            p1: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p2: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p3: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            price: "225$",
            count_buy: 0,
        },
        sight_2: {
            headLine: "Object #2",
            img: "https://c.files.bbci.co.uk/05C9/production/_123118410_opera.jpg",
            count: 2,
            p1: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p2: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            price: "235$",
            count_buy: 0,
        },
        sight_3: {
            headLine: "Object #3______",
            img: "https://www.datocms-assets.com/6737/1533572421-hero-australia-depositphotos.jpg?auto=compress%2Cformat&fm=jpg",
            count: 2,
            p1: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p2: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            price: "320$",
            count_buy: 0,
        }  
    },
    USA: {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
        description: {
            count: 1,
            p1: "The United States of America (U.S.A. or USA), commonly known as the United States" +  
                "(U.S. or US) or America, is a country primarily located in North America. It consists of 50" +  
                "states, a federal district, five major unincorporated territories, 326 Indian reservations, and" +
                "nine minor outlying islands.[g] At nearly 3.8 million square miles (9.8 million square" +
                "kilometers), it is the world's fourth-largest country by land area and third-largest by total" +
                "area. The United States shares land borders with Canada to the north and Mexico to the" +
                "south as well as maritime borders with the Bahamas, Cuba, and Russia, among others.[h]" +
                "With more than 331 million people, it is the third most populous country in the world. The" + 
                "national capital is Washington, D.C., and the most populous city and financial center is New York City",
        },
        numOfSights: 3,
        sight_1: {
            headLine: "Object #1",
            img: "https://www.nationsonline.org/gallery/USA/Mount-Rushmore.jpg",
            count: 3,
            p1: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p2: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p3: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            price: "205$",
            count_buy: 0,
        },
        sight_2: {
            headLine: "Object #2",
            img: "https://i.natgeofe.com/n/b3876bff-7fb9-4c28-b020-ba5fa27e099a/great-smoky-mountains-national-park-unesco-usa.jpg",
            count: 2,
            p1: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p2: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            price: "135$",
            count_buy: 0,
        },
        sight_3: {
            headLine: "Object #3______",
            img: "https://media.albatros.se/b87f509c-8b53-4a27-be18-adf89f27eaac/albatros/W482/H482",
            count: 2,
            p1: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            p2: "A JavaScript object has properties associated with it. A property of an" +
                "object can be explained as a variable that is attached to the object. Object" +
                "properties are basically the same as ordinary JavaScript variables, except for" +
                "the attachment to objects. The properties of an object define the characteristics of the object. " +
                "You access the properties of an object with a simple dot-notation:",
            price: "200$",
            count_buy: 0,
        }  
    }
};
function printAllChapter(object, name_field, subfield) {
    let countPart = info[name_field][subfield].count;
    let name = '';
    let chapter = '';
    for(let i = 1; i <= countPart; i++) {
        name = 'p' + i;
        chapter = "<p>" + info[name_field][subfield][name] + "</p>";
        object.insertAdjacentHTML('beforeend', chapter);
    }
};
function minus_CountBuy_for_sight(name_country, name_sight) {
    //Ukraine/sight_1/count_buy -- change that field
    info[name_country][name_sight].count_buy = info[name_country][name_sight].count_buy - 1;
    return info[name_country][name_sight].count_buy;
}
function increaseCountBuy_for_sight(name_country, name_sight) {
    //Ukraine/sight_1/count_buy -- change that field
    info[name_country][name_sight].count_buy = info[name_country][name_sight].count_buy + 1;
    return info[name_country][name_sight].count_buy;
}
function findIndex(arr, goal){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nextSibling == goal) {
            return i;
        }
    }
    return -1;
}
function checkCancel() {
    const country_name = document.querySelector('.main_headline').innerText; 
    const sum = document.querySelector('.sum');
    const buy_tour = document.querySelectorAll('#buy');
    const cancel_btns = document.querySelectorAll('.cancel');
    let k = 0;
    let index = 0;
        if(cancel_btns) {
            for(let i = 0; i < cancel_btns.length; i++) {
                cancel_btns[i].addEventListener('click', function()
                {
                    index = findIndex(buy_tour, cancel_btns[i]);
                    //console.log(buy_tour.length);
                    console.log("Index: " + index);
                    k = index + 1;
                    let oldStrSum = sum.innerText;
                    let oldSum = Number(oldStrSum.substring(0, oldStrSum.length - 1));
                    console.log("Old sum: " + oldSum);

                    let delStr = info[country_name]['sight_' + k].price;
                    let delVal = Number(delStr.substring(0, delStr.length - 1));
                    console.log("Deleting value: " + delVal);

                    let newSum = oldSum - delVal;
                    sum.innerHTML = newSum;
                    console.log("New sum: " + newSum);
                    console.log(' ');
                    sum.insertAdjacentHTML('beforeend', '$');
                    sum.classList.remove('adding_to_bill');
                    sum.classList.add('deleting_from_bill');

                    let countBuy = minus_CountBuy_for_sight(country_name, 'sight_' + k);
                    //info[country_name]['sight_' + k].count_buy = countBuy;
                    //console.log(info[country_name]['sight_' + k].count_buy);

                     if(countBuy == 0) {
                        cancel_btns[i].remove();
                     }
                })
            }
        }
}
function checkBuy() {
    const country_name = document.querySelector('.main_headline').innerText; 
    const buy_tour = document.querySelectorAll('#buy');
    const sum = document.querySelector('.sum');
    //console.log(buy_tour);
    if(buy_tour) {
        for(let i = 0; i < buy_tour.length; i++) {
            buy_tour[i].addEventListener('click', function(){
                let k = i + 1;
                let old_value_str = String(sum.innerText);
                console.log(typeof(buy_tour));
                let old_value = Number(old_value_str.substring(0, old_value_str.length - 1));
                //console.log("Old sum: " + old_value);
                //console.log(country_name + '_sight_' + k)
                let value = info[country_name]['sight_' + k].price;
                //console.log(info[country_name]['sight_' + k].price);
                //console.log("Plus: " + value);
                sum.innerHTML = old_value + Number(value.substring(0, value.length - 1));
                sum.insertAdjacentHTML('beforeend', '$');
                //console.log("New: " + sum.innerText);
                sum.classList.remove('deleting_from_bill');
                sum.classList.add('adding_to_bill');
               

                let c = increaseCountBuy_for_sight(country_name, 'sight_' + k);
                info[country_name]['sight_' + k].count_buy = c;
                console.log("Count buy: " + info[country_name]['sight_' + k].count_buy);

                //console.log(info[country_name]['sight_' + k].count_buy);
                if(!buy_tour[i].nextSibling) {
                    buy_tour[i].insertAdjacentHTML('afterend', "<span class='cancel'>Cancel</span>");
                }

                let input_submit = document.getElementById('input_submit');
                input_submit.classList.add('active');
                checkCancel();
                //return;
            })
        }
    }
}
function clickItem() {
    const list_all_items = document.querySelectorAll('.item');
    let size = list_all_items.length;
    let name_of_object = '';
    let countOfSights = '';
    let s = '';
    for(let i = 0; i < size; i++) {
        list_all_items[i].addEventListener('click', function() {
            name_of_object = list_all_items[i].innerText;
            countOfSights = info[name_of_object].numOfSights;
                let content = document.createElement('div');
                content.classList.add('content');

                    let main_headline = document.createElement('div');
                    main_headline.classList.add('main_headline');
                    main_headline.innerHTML = 
                        "<p>" + String(name_of_object) + "</p>";

                    let main_text_place = document.createElement('div');
                    main_text_place.classList.add('main_text_place');

                        let country_intoduction = document.createElement('div');
                        country_intoduction.classList.add('country_intoduction');

                            let flag = document.createElement('div');
                            flag.classList.add('flag');
                            flag.innerHTML = "<img src='" + info[name_of_object].img + "'>";
                            country_intoduction.appendChild(flag);

                            let text_description_country =  document.createElement('div');
                            text_description_country.classList.add('text_description_country');

                            printAllChapter(text_description_country, name_of_object, 'description');
                            country_intoduction.appendChild(text_description_country);
                            main_text_place.appendChild(country_intoduction);

                        let wrap_sights = document.createElement('div');
                        wrap_sights.classList.add('wrap_sights');

                            let headline = document.createElement('div');
                            headline.classList.add('headline');
                            headline.innerHTML = "<p>The most popular sights!</p>";
                            wrap_sights.appendChild(headline);

                            for(let k = 0; k < countOfSights; k++) {
                                let temp = k + 1;
                                s = 'sight_' + temp;
                                
                                let sight_information = document.createElement('div');
                                sight_information.classList.add('sight_information');
    
                                    let headline_sight = document.createElement('div');
                                    headline_sight.classList.add('headline_sight');
                                    headline_sight.innerHTML = "<p>"+ info[name_of_object][s].headLine +"</p>";
    
                                    let photo = document.createElement('div');
                                    photo.classList.add('photo');
                                    photo.innerHTML = "<img src='" + info[name_of_object][s].img + "'>";
    
                                    let info_about_sight = document.createElement('div');
                                    info_about_sight.classList.add('info_about_sight');
                                    printAllChapter(info_about_sight, name_of_object, s);
    
                                    let wrap_price_ticket = document.createElement('div');
                                    wrap_price_ticket.classList.add('wrap_price_ticket');
    
                                        let price = document.createElement('div');
                                        let countBuy = info[name_of_object][s].count_buy;
                                        price.classList.add('price');

                                        if(countBuy > 0) {
                                            price.innerHTML = "<p>Price for the tour is: <span>" + 
                                                                info[name_of_object][s].price + 
                                                            "</span><span id='buy'>Buy!</span>" + 
                                                            "<span class='cancel'>Cancel</span></p>";
                                        }
                                        else {
                                            price.innerHTML = "<p>Price for the tour is: <span>" + 
                                                                info[name_of_object][s].price + 
                                                            "</span><span id='buy'>Buy!</span></p>";
                                        }
                                    wrap_price_ticket.appendChild(price);
                                sight_information.append(headline_sight, photo, info_about_sight, wrap_price_ticket);
                                wrap_sights.append(sight_information);
                                main_text_place.append(wrap_sights);
                            }
                        content.append(main_headline, main_text_place);
                contentPlace.innerHTML = '';
            contentPlace.append(content);
            checkBuy();
            checkCancel();
        })
    }
}
window.onload = function(){
    clickItem();
}