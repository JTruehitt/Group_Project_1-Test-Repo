publicAPIkey = "050e9e55934a8485aea5ee8423f91f99";
privateAPIkey = "2ef7758e1e80a0b8c92725d15360f2b2ada0c268";

let marvelDisplay = $(".marvelDisplay");

let reducedCharIDs0 = [11334, 17100, 09144, 10699, 09146, 16823, 09148, 09149, 10903, 11266, 10354, 10846, 17851, 12717, 11297, 11031, 09150, 11198, 11175, 11136, 11176, 10870, 11194, 11170, 09240, 11120, 10836, 10755, 11214, 09497, 14990, 09435, 10370, 11324, 11164, 11227, 09567, 11382, 11361, 09151, 10672, 10673, 10905, 09152, 16824, 11684, 11396, 11338, 09153, 17574, 10674, 09346, 09154, 11301, 10802, 09155, 10801, 11208, 09156, 11253, 10866, 10773, 17438, 09158, 10686, 09159, 09160, 10784, 11275, 11012, 11298, 10827, 09740, 10748, 09161, 10718, 09162, 10835, 10336, 11758, 09163, 09164, 09165, 15239, 11766, 11456, 09168, 09596, 11778, 09169, 09170, 10906, 11137, 11354, 09550, 09171, 09172, 09173, 11785, 09174, 09175, 10909, 10908, 09176, 09177, 09178, 09179, 11793, 09329, 09489, 11346, 10782, 10829, 09180, 11907, 10325, 09548, 11138, 11296, 10843, 09181, 11262, 09182, 11224, 09183, 09184, 17330, 09185, 10910, 10859, 11809, 09186, 09187, 17838, 11130, 10356, 10687, 09188, 09189, 17296, 10911, 11498, 17109, 09190, 10881, 11349, 09191, 09195, 10830, 11291, 11836, 09197, 09198, 09199, 11132, 09200, 09201, 09202, 11416, 11073, 09203, 09204, 10850, 11113, 11339, 11264, 10688, 11119, 10366, 09205, 10371, 09206, 11236, 14981, 09208, 11090, 09209, 14973, 09167, 09210, 09211, 11038, 10887, 09212, 09213, 11101, 09214, 17317, 17307, 11252, 17472, 11209, 09216, 09217, 10912, 09218, 11139, 09219, 11276, 09220, 10914, 17295, 17327, 17575, 10913, 17105, 09223, 17856, 10915, 11190, 11196, 10338, 11096, 09224, 11095, 11097, 11355, 09225, 11027, 11052, 10143, 09226, 11258, 09688, 09227, 10916, 09261, 09344, 11937, 09478, 09230, 09536, 10813, 11039, 11140, 09231, 11141, 09232, 09233, 09234, 10756, 11015, 09733, 11331, 12019, 10754, 11359, 09237, 11411, 11187, 09238, 12065, 11270, 09239, 14999, 10809, 09241, 10823, 11286, 10676, 10798]
let reducedCharIDs1 = [09243, 10917, 11410, 09245, 11407, 10346, 09246, 09247, 11353, 11362, 09249, 09250, 11272, 09251, 17323, 11169, 09252, 09253, 09254, 14991, 09255, 11268, 09244, 11174, 09256, 09257, 10918, 17473, 11385, 11050, 09258, 10774, 10719, 11001, 11333, 09259, 09453, 10776, 09262, 17292, 17312, 10919, 11306, 11367, 10907, 09265, 11387, 11020, 09266, 11016, 09267, 10920, 10341, 11087, 09268, 17316, 17336, 17474, 09269, 09270, 11037, 10890, 14997, 09713, 10717, 11188, 11023, 11071, 09271, 09272, 11107, 17583, 17102, 11142, 11260, 09273, 09274, 11040, 10997, 09275, 09281, 11103, 11206, 09276, 10921, 10689, 09282, 11358, 11500, 11235, 09277, 10330, 09278, 09279, 10879, 17835, 11195, 09280, 14992, 17300, 10677, 11247, 09283, 10735, 10368, 15007, 11322, 09284, 09285, 09286, 10785, 10787, 09396, 10999, 11072, 11060, 09287, 10922, 09288, 10923, 10355, 09290, 11082, 11122, 10701, 09310, 09291, 09292, 10671, 11432, 11313, 10445, 11065, 09293, 10807, 11061, 10771, 12378, 09294, 09295, 09296, 11199, 11317, 09248, 09297, 17110, 11143, 09298, 09299, 11013, 11111, 09301, 11233, 09335, 09302, 11213, 09303, 10868, 09304, 14987, 09305, 09306, 11222, 10880, 10863, 10333, 09470, 09307, 09308, 09309, 14993, 11177, 09229, 11356, 09539, 10980, 11240, 12478, 10799, 11389, 10670, 09377, 09312, 11384, 09313, 11201, 10763, 17324, 10832, 12512, 12513, 11380, 09383, 09315, 09316, 11248, 09556, 11285, 09317, 11098, 14974, 10749, 10925, 09318, 17329, 17833, 11221, 09320, 10720, 10926, 11055, 12571, 14982, 09321, 11256, 09645, 11144, 09322, 11374, 10927, 09324, 12610, 10731, 11076, 12623, 10702, 11041, 14985, 10928, 11435, 10929, 09326, 11420, 11292, 09328, 10743, 09330, 11299, 09331, 10709, 09207, 09619, 14994, 11400, 09332, 11391, 09333, 09334, 14995, 11490, 11091, 09348, 10821, 11185, 09336, 11069, 09339, 09486, 11218, 10816]
let reducedCharIDs2 = [09337, 09338, 10808, 17311, 11131, 17108, 12767, 11046, 11482, 10351, 09340, 14996, 10678, 11044, 09341, 11371, 09342, 09343, 10759, 11274, 11300, 10839, 10703, 11442, 09345, 11383, 10930, 10931, 09347, 09349, 09350, 17844, 11428, 09557, 10373, 09351, 17098, 17333, 11118, 17303, 11005, 10721, 17107, 09355, 10343, 11415, 10722, 09356, 10932, 11102, 10675, 09357, 09358, 09359, 09360, 09361, 11246, 09362, 10933, 17475, 11077, 10758, 09529, 12923, 11273, 11089, 09363, 09364, 11063, 11064, 11146, 09365, 11293, 11024, 09366, 17301, 10934, 11379, 11318, 09367, 10888, 11413, 16839, 11412, 10704, 09368, 17320, 17294, 17310, 17326, 10935, 17104, 09371, 09487, 09538, 10844, 17831, 11876, 09372, 10736, 10786, 10766, 11251, 11288, 11259, 10775, 10777, 11343, 10329, 10878, 09597, 11344, 09496, 09327, 10946, 09604, 11404, 10667, 09378, 09373, 09374, 11105, 09375, 09376, 11171, 10812, 09500, 09721, 09196, 09630, 09380, 10938, 10937, 11033, 09381, 10936, 09382, 10772, 10679, 11314, 10760, 11310, 11081, 11193, 09384, 14983, 11357, 11386, 09385, 10752, 10783, 10810, 11250, 11319, 09386, 10893, 11397, 11289, 11116, 09388, 10842, 09389, 11308, 09508, 17476, 09390, 10818, 11147, 11080, 11312, 13133, 09391, 11148, 15017, 11178, 11029, 13163, 11058, 09392, 11327, 09393, 11014, 14977, 14976, 09394, 09395, 09397, 11100, 09398, 11092, 09399, 11403, 09166, 11186, 10340, 11375, 14988, 11421, 10977, 09401, 11408, 10450, 09236, 09402, 11074, 11257, 10337, 11444, 10854, 11036, 11059, 09403, 09404, 10939, 11414, 09405, 09406, 10363, 09407, 17299, 10768, 09408, 10940, 11145, 14980, 11283, 09260, 09409, 11405, 10751, 09215, 11200, 17854, 10896, 11068, 11004, 11320, 10726, 17321, 09418, 09314, 10851, 10805, 09411, 09412, 10352, 10796, 10724, 09509, 11205, 09413, 11053, 11328, 10867, 09414, 10942, 09415, 11135, 09416, 09417]
let reducedCharIDs3 = [10944, 10945, 10943, 17477, 10904, 11364, 11085, 10725, 09242, 13479, 11229, 09420, 10811, 09421, 11243, 09422, 09423, 11026, 09424, 15018, 11335, 09735, 09425, 11173, 11263, 11350, 09427, 11002, 11417, 09708, 10993, 11203, 10869, 10367, 10732, 09433, 09434, 11279, 10877, 09677, 09463, 10793, 09436, 10947, 09437, 11305, 09490, 09438, 11399, 09439, 11241, 11099, 11184, 09440, 09441, 10681, 09442, 09443, 10361, 11340, 09444, 10690, 11134, 10871, 10891, 10924, 09530, 11192, 10894, 09445, 11204, 13727, 11424, 09446, 09447, 17318, 10948, 11254, 10682, 11220, 09410, 10941, 09448, 09449, 11019, 10691, 09541, 11370, 10876, 09450, 10331, 17814, 09452, 10949, 14998, 09451, 10362, 09454, 10902, 09455, 13190, 09623, 11008, 11088, 09456, 09457, 09458, 09459, 10950, 10900, 09460, 10347, 10840, 14984, 11244, 09461, 09462, 17824, 17577, 11372, 11210, 11056, 10826, 09464, 10951, 10952, 09465, 10953, 10954, 11129, 13483, 09466, 09468, 09469, 14978, 09547, 10365, 11302, 11422, 11086, 10831, 10815, 11336, 10683, 11271, 11269, 11303, 10685, 09471, 17298, 11007, 10746, 10706, 11282, 14057, 10684, 14063, 09472, 11337, 10349, 09473, 11124, 11409, 10797, 09474, 09475, 11427, 10955, 09325, 10063, 09476, 09477, 10956, 17078, 16837, 10707, 09620, 09480, 09481, 17840, 10882, 17810, 14160, 10757, 09482, 11329, 11123, 09483, 11255, 09484, 11202, 09485, 10957, 09479, 14198, 11228, 10332, 11028, 09488, 11150, 10873, 10708, 11321, 10357, 09492, 11351, 17857, 14267, 09493, 09494, 09495, 11388, 10779, 09491, 10734, 11021, 11419, 17839, 11369, 14318, 11045, 10741, 10886, 10762, 11179, 09498, 09499, 09501, 16840, 10770, 11151, 11152, 09502, 11104, 14989, 11234, 10750, 09503, 11030, 14434, 11153, 11378, 09504, 10958, 09505, 10960, 10959, 09506, 09507, 10961, 09511, 09512, 09510, 09513, 10962, 10865, 11165, 09514, 09515, 09517]
let reducedCharIDs4 = [17306, 09519, 11207, 09520, 09522, 14528, 09523, 10778, 10334, 11191, 09387, 09524, 10964, 10963, 09430, 09526, 11280, 10817, 09527, 09528, 11326, 10767, 10838, 11154, 10892, 09531, 09532, 09533, 15000, 11249, 09534, 11238, 14666, 11360, 17099, 11436, 11155, 09535, 10965, 10837, 11390, 11376, 11189, 11330, 09537, 09702, 11401, 09379, 15006, 11348, 09542, 09543, 09544, 09545, 10792, 09235, 10744, 17314, 10769, 10692, 09546, 10967, 17319, 10966, 17478, 10781, 11398, 10344, 10710, 11117, 09549, 09595, 09311, 10747, 09551, 09552, 09553, 09554, 10969, 10970, 10968, 09555, 11325, 11126, 11156, 09558, 10711, 09559, 09560, 11035, 09561, 11048, 10861, 11197, 11426, 09562, 10972, 17308, 10971, 10790, 09563, 11079, 09565, 11230, 09566, 11242, 09581, 11368, 09568, 09569, 09570, 11323, 09571, 11167, 09572, 10345, 09573, 10973, 09574, 10975, 10974, 11406, 09575, 09576, 14979, 09577, 15001, 09578, 10712, 09579, 09228, 10895, 09580, 17111, 09583, 11392, 17331, 11393, 15035, 11168, 11093, 11381, 09582, 09584, 11394, 09585, 10858, 10824, 09586, 09587, 09588, 10848, 17815, 10856, 10339, 09589, 09590, 09591, 10976, 09592, 10864, 09594, 10898, 11265, 14975, 10834, 10745, 11223, 17101, 09598, 11157, 09599, 15002, 09600, 11057, 11070, 09601, 10761, 09602, 10874, 09603, 10845, 09606, 10855, 10693, 11373, 09607, 10705, 10833, 11032, 10694, 09605, 11366, 10727, 09157, 09609, 17603, 11347, 11054, 14873, 16452, 14858, 12200, 17332, 11114, 17305, 16181, 12295, 09610, 11377, 11010, 10795, 09608, 10794, 09614, 11158, 10899, 09616, 11180, 09617, 14905, 10814, 10860, 09618, 15003, 11307, 10733, 09621, 10764, 11084, 11341, 11078, 09622, 10828, 10889, 12230, 11159, 09625, 09615, 10901, 10326, 09626, 09627, 09628, 10327, 09629, 10979, 17309, 10978, 11062, 11051, 09632, 11225, 10791, 09631, 11212, 09635, 09636, 10981, 09637]
let reducedCharIDs5 = [09638, 15280, 11022, 09639, 11232, 11160, 10695, 11477, 11172, 11075, 11017, 09640, 17852, 09641, 10982, 09642, 09643, 09644, 11042, 09646, 10753, 11395, 11161, 11149, 10713, 11854, 09647, 09648, 11115, 11896, 13504, 11000, 09650, 11162, 09651, 11034, 10819, 11003, 09652, 15004, 11083, 09653, 09654, 10714, 12080, 11294, 10728, 09655, 11219, 10359, 10715, 11295, 14986, 10998, 17103, 11216, 11215, 11018, 09656, 09657, 11211, 11110, 09658, 09659, 09660, 11112, 09661, 11181, 09662, 17313, 10983, 09664, 17576, 17106, 17315, 17328, 17302, 11025, 10820, 10885, 09666, 09667, 09668, 14812, 10360, 11304, 09669, 11237, 09670, 10857, 11345, 11960, 10669, 09672, 09673, 09674, 11166, 09675, 10328, 09624, 11309, 09676, 09692, 10822, 11978, 10825, 09671, 10335, 11352, 11047, 09678, 10852, 09679, 10369, 09680, 11315, 09681, 09682, 09683, 10358, 16825, 10803, 09684, 11311, 11125, 10847, 09685, 09686, 10862, 10985, 10696, 10984, 09687, 10987, 10988, 10986, 09525, 17841, 10350, 11239, 11182, 11342, 10989, 11365, 09689, 11316, 09690, 10872, 11231, 09691, 09663, 10788, 11128, 11106, 09693, 10353, 09694, 11066, 10324, 11261, 09695, 10666, 09696, 10697, 09697, 09698, 11011, 09699, 10990, 10849, 11267, 09700, 09701, 17322, 17834, 17304, 10991, 11226, 09703, 11121, 10372, 09704, 11287, 09705, 10668, 09706, 09707, 10992, 17853, 11133, 09709, 11402, 10742, 09710, 10765, 11588, 09711, 10348, 10342, 09712, 10853, 16838, 11425, 09714, 09715, 10994, 11067, 09716, 09633, 10680, 11009, 10740, 11043, 11290, 11281, 09717, 10995, 10729, 09718, 17297, 17325, 11006, 17479, 09719, 09720, 15005, 10737, 10884, 10883, 09722, 10804, 11418, 09723, 10738, 10739, 09724, 09725, 09726, 11109, 10875, 10806, 09732, 11094, 09734, 09736, 09737, 10996, 11542, 10698, 11277, 09738, 10841, 10716, 11163, 09739, 10780, 11515, 11127, 09741, 11183, 09742]

let allCharArr = [reducedCharIDs0,reducedCharIDs1,reducedCharIDs2,reducedCharIDs3,reducedCharIDs4,reducedCharIDs5];



function getRandomID() {
    let i = Math.floor(Math.random() * allCharArr.length);
    console.log(i)
    let characterSelection = allCharArr[i];

    let j = Math.floor(Math.random() * characterSelection.length);
    let characterBackHalf = characterSelection[j].toString();

    if (characterBackHalf.length === 5) {
        return "10" + characterBackHalf;
    } else {
        return "100" + characterBackHalf;
    }
}

function getGameCharacters() {

    let gameCharacters = [];


    for (let i = 0; i < 10; i++) {
        let characterUniqueID = getRandomID();
        console.log(characterUniqueID)

        if (!gameCharacters.includes(characterUniqueID)) {
            gameCharacters.push(characterUniqueID);
        }
    }

    queryMarvel(gameCharacters);

}

function queryMarvel(gameCharacters) {

  let ts = dayjs().format("YYDDMMms");

  let hashText = ts + privateAPIkey + publicAPIkey;
  let hash = CryptoJS.MD5(hashText);

  for (let i = 0; i < gameCharacters.length; i++) {
  let baseURL =
    "https://gateway.marvel.com/v1/public/characters/" + gameCharacters[i] + "?&" +
    "ts=" +
    ts +
    "&apikey=" +
    publicAPIkey +
    "&hash=" +
    hash;

  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        renderCharacterInfo(data)
    })}
}

function renderCharacterInfo(data) {
    let characterName = $("<p>");
    let characterIMG = $("<img>")
    let characterDesc = $("<p>");
    let characterCard = $("<div>");
    let characterIMGContainer = $("<div>");
    let characterTextContainer = $("<div>");

    let charIMGURL = data.data.results[0].thumbnail.path + "." + data.data.results[0].thumbnail.extension;
    characterIMG.attr("src", charIMGURL);
    characterName.text(data.data.results[0].name);
    characterDesc.text(data.data.results[0].description);

    characterIMG.addClass("characterIMG");
    characterCard.addClass("characterCard");

    characterIMGContainer.append(characterIMG);
    characterTextContainer.append(characterName, characterDesc);
    characterCard.append(characterIMGContainer, characterTextContainer);

    marvelDisplay.append(characterCard);
    
}

$(".startGameBtn").click(() => {
    marvelDisplay.empty();
    getGameCharacters()})



