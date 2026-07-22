'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1a4a097e17ceee03ae7a8df9253ac51a",
".git/config": "5bc6e9e10fa98070fa7d074f991a9aee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4a3fd75af2cac851426401063970f103",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dfea6fd576f595676f9f168f72b52aba",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2cb029372c3e4a3a08c1f8344972759c",
".git/logs/refs/heads/main": "216f218f065be80e510361429b11d590",
".git/logs/refs/remotes/origin/main": "7f8f5eec8bef52161442e47ad43d6ca8",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/5c59922c6867d1b3699c131a38acd0bb9d931c": "3271a0b3b14f5207b510702f78d2696e",
".git/objects/04/672dc9d7ce79ea672ea6b221beb5eebca53428": "e846394ba5fa97c81916f64d5d14b157",
".git/objects/05/581257e37f47a91ac927be3065928fe20702cd": "0352def256efe223e3110adc806b18af",
".git/objects/05/91308b7975aee7a796552904fe9be68de4493d": "378aea59c747ec6ce149dd08f168d3c5",
".git/objects/0a/14f27c37dd2bd65bd2b905a6ceae5055df1231": "c9e1d5f2b32494a6691b023959585c70",
".git/objects/0a/89a142914757a311746f60b3abf068a9cd3d6f": "10948fa2d850e314b0e7d558b062f503",
".git/objects/0a/a81d71adf60cc8e641ce86a1af41c31b815579": "737debbf48054df2c558a8eb54a88207",
".git/objects/11/db066fca55c203cddd2d2b158488cb1e5d8de6": "49587c5b6813a3d5fe5658c666ce8355",
".git/objects/16/65860d67394684398c563a432e5bca20f20490": "25f9e96e4f7de50f626fb4e1086cf99a",
".git/objects/18/b77977d57de7404dffece3d380a8c7094a9de2": "c1fecf7c49c3c4aaa0c01363c3a80f88",
".git/objects/1d/7d41cdc2eccb13cdd12169b8e34dcfb22faed0": "e8a1c6f706b256f647629519995e3ff9",
".git/objects/1e/f4a0060e9b914cd7b35d2510ab52dcf8610b06": "d0b2d6ec77a326ed0bc1a20b67dc9771",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/24/ccec4c47181b3d2802caf3ba2fb21c216bc02a": "4a884772ffe54af6ef134c0631c64d7c",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/2cda2d94e179fa52f91fc70fcd189f31cde456": "370bbf162ac068acff59b49d79f9eaf5",
".git/objects/2c/1b1e967bd5ada0ba202c06b6bbd301ba780cae": "9806bfc5f9bb8b224bc3391503124d64",
".git/objects/2f/e535a9c07cbbe49aeb6a8b1c3fd46ac7cab3d8": "f55c02e57332c1488e662eda62539493",
".git/objects/30/2f73194ff76cea015e31d606f5300b4b36e518": "1bf95e4b6d48d48bd19a94b1503e590d",
".git/objects/33/3b99323020c924de8d74c8e168dc94de27e3dd": "4264ce07acea1f7896617bc25cb5b6ea",
".git/objects/33/ff07ae9252a82d495b7d1c894f0b86f7d96f91": "d5523a9c478f747df1fd0520e3aa9636",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/27557ffe410cee0d8304af94352172afae253b": "f877fa4448c9b4d97195bb70c4aa3971",
".git/objects/48/4afec2f0b362a1a6cabafaec5aae724949d8b8": "6be4277e3ba8d80b17b4ac161afdfdc5",
".git/objects/4a/185b655e4d0ab3427a23da3703ca08fe4b867f": "ddc9a704c9a76d7a3c1c38272101aad6",
".git/objects/4b/d133171422e07be7010b7fe95d1adcd8fdc3b7": "5a0f3a418510454dbc2051aaf812a492",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/6dc4581bdf293e5571e08878add721bfd2f0d1": "77c6f88ece7dbd1b806a9d15f485b944",
".git/objects/4f/c29d741273c596cd399b970346d21ec1924023": "6ff0f6b48dc82f5c42c0ff21cbc9a1a7",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/53/82efdec512c0a5e2f60b1d3f81217387548661": "bb69bfd81ba96a8387edf91e3e32322e",
".git/objects/54/7410b219016cee59ba3f6c2cf298a983984e97": "f53f20bb953aeb319b91502558af9086",
".git/objects/57/424f6ad72f9af16aaac3f9226ee641e6e28cc7": "3ad1979e5211234af71910d77cf7ebd7",
".git/objects/62/e53f50af666330e16a238cf7eeb11fa59abcd2": "ea85893dc806c37703ae63828fe2c262",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/76/ae2662c3fff173920a17443d9f3dbece94e28e": "c542c722315b31e32b8d7e9400e9d5c7",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/81/8e5ca5b65cadc0c5effa15183c9f7bb46e5682": "7fd4ffb713904ddd560ce818932ad5ea",
".git/objects/84/f9444264ca8aea1515d7121a066704dd9614a5": "352e9414d6d6a28d54ac5db4ed256d42",
".git/objects/86/12bb80bbc69080da5b6d727c76a9dc78300a9c": "04d18c4d17982efd3fe91d5a296227da",
".git/objects/88/0368f72371368dbadbd2fb4a68660aa47b87be": "76a74256260c8a937acd60648e4d67ca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c6f3bffe06436744d95dd9f6ecd14bc21a7547": "0a28637acc9cb14ae6d87d664da8b852",
".git/objects/8b/70532f2c5fa32550087af1ede680b2d3d7aaec": "9c8283383d0535e992f577fc2e41c179",
".git/objects/8b/81f44048d670ca40bda2e714103c432ca642bf": "51443b5206d590aa8ef34f59b6a29afd",
".git/objects/8c/1e3c2c87ac77531091290cef821fff26c032e1": "e88368093c7f756f498d021f911bc560",
".git/objects/8e/227315851d286fa106ba4e4352278aa295d7d3": "9e364b897923dd52f15ff465bbdc0ea1",
".git/objects/8f/aa4bba4f2fd22035d7005ace04f89796ae9327": "81b5d668e8269bdd54ee94f66e758be0",
".git/objects/90/04ee97853bdfa4ffca1d3affe5deee931e9063": "4df37cf58e7ec2ef27bb878908417bf8",
".git/objects/92/a4c2df6600883dac9c3e4ee954945d5c97ac3a": "087dd659de358f2788caae265d0ab623",
".git/objects/97/49602a7027f73bafb555c57bfc821c05d5e3e4": "f7eccc5244a05387e9d33142384c5522",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/e4d5556e20e15d293a7142a049c3c2857e1a41": "a3809f4ba90fc4692cc860b069a12f92",
".git/objects/9a/64539ee5dd513c7131c5035d66070db2bf0759": "11c7f003b4fc3149f9c43a2c46d7e812",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/88ddedb925928e37864f7eb64d7415b7c80e7f": "07e6f471993096fc1d87b15460be23cb",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/3c1985ed268fcaa245d084ec7be6bd78d92ba4": "66773bd3e8f79ba259a427b87ba62b6e",
".git/objects/9e/d81461a675818c5f5b72aff9db836c338d7c13": "b20f196f1b9ae8566b8ffd4eecaac99e",
".git/objects/a4/a69f74a8dd4f62e41aa69f7f29e4cbbbe4ac44": "30260ab22d9952e55200fa06cb8db7df",
".git/objects/a4/b512923b040730d49e285dfb479e6fdd788a6c": "8b765b0c933fb55efeb8750c81d6504f",
".git/objects/a4/ecdc12f9f4d8d58c2208e7025c2db20845c071": "8552f31474965b2746a06c85821a9d83",
".git/objects/aa/7c65feedec0dd1784c118af81427b0bb891003": "686978300557afaedd297aa75faaf8cf",
".git/objects/ac/134e5cfc05905b063fb1324bb4fbd16ce72b0e": "e63357ea0b944a57abd980b0d06e05ba",
".git/objects/b1/1cba26621d25dec2fcc24217cee3ccda7199cc": "be4db4eda59a323fe1e48e4e2ee13f96",
".git/objects/b2/90e947d74d7f1df8bd626e91385d6e2414243d": "9bb5c3e3f1ae026030e802cd5092df9b",
".git/objects/b5/b73a453ea5725fb6c31f64339282625ddc23b8": "4c400186f207686b756027918c411d8c",
".git/objects/b6/48dd71b7b4d4223489e0f7b15f3424fe7c62ca": "6e1e2a7a64b8a36fcfb48a5bb9a35e6c",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/da3f072ced5cf5b27c132bb3d661c58db6c06f": "ebaa3897463cb87c5f8c5c6aedc253b6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/e0f44fb93ee47ed4efe4ed3f01287888feb9df": "220edc6b475d4cc54d6ffa84c1b8a42a",
".git/objects/bd/c3d7c48a72441f466faa9bb8bf77c4c14c3dd2": "4adea73f884558e8613951d76971c674",
".git/objects/c3/9500aea02add0bf72b1290887ca27c7450271c": "e9c1658e44d324deef9de091d9b3d6bf",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/a13c061b3b08b9123f0402804801fdcd5a40f9": "0a034b598d72dcaac5d227fceb479bc5",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cd/15a933ce1ff7f4b72949b2355d86e1cbd7215e": "83cbb5723d6f066de179bee33216f3e1",
".git/objects/d2/c9a026b7b6f0559ae7c75bd167062cf0a5ea22": "37946c3a86a14472f7ef2a52be38b756",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/2bc793a5b5d0ebee7f3bf5de2373a02217142c": "ae6a2cfc4d83de7bd0f33776ab1f6385",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/f03757f231c75801feecc5aaa126ff4e46cd48": "ec0f7749167452646f923a03a961ad04",
".git/objects/d9/8f06079f4497a711ff438ec1184d630f35a3d3": "2b10b4bb8d5a5fb76c01c26f5fcf4e29",
".git/objects/db/fbc94035c09d65a1f5822645319dee15cd012a": "fe528d7cc2dc95b9282cfa41ed501aee",
".git/objects/e0/44c257fe3fb3a9cfeafa81c3a159e9c3279fc2": "7029ee7de585d3b5c8727cf2f653e273",
".git/objects/e2/d72da04efdc649ba8cabe90da71b0b78fcac7d": "593bf4f60085d4cdaabbca5761884391",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/00207a89cfae20528ee29ec6c0ea4f4107b903": "c2ce07bd4ff29f1e8f88e14a61898cf0",
".git/objects/e5/683d8c5d41de55312097ffb1572f80fc87ca8c": "f28849fb2c86355daa009f43de09080f",
".git/objects/e6/ac8afa85fbf076108e7e2a7c21fa2cb702423e": "75e4808db0a8bacc8f0c207fa647f5dd",
".git/objects/e6/da9bfcb15aa7e3ea247e9548c8e91a01d474ab": "e3ba15148d5ec7e1e77ed074fd97bf8f",
".git/objects/e9/4f629b2e9826feadae976341829f7b42d1241c": "db213c2bbde8462d0cdc1b5fd6307934",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/157a59cb1ae10843182df3ef2cf3b14187d14c": "5dcb749d2ecd35c10913f62e5216bf69",
".git/objects/ea/e439e8473f5d3368e8a95e4766ee92d5d49877": "59f1375664836631619491d1b2c44b18",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/3a8980665eae77690a91c781cc49058343e565": "73802c8db96502f5aa70fe93ce0a61df",
".git/objects/fb/9795a45994d89b0519b2a832ce7ce51e03aa0c": "d6b2d29011b6d5743a6bcfe65857e4ac",
".git/objects/fb/de158db505478565ec60777e801e088a12779b": "5674a7ceaaccf225549590720f338f20",
".git/objects/fd/215a2ddc9064c0e53b8d7d6d2395a4c530e6f1": "34cd7d180f4b5c651eaba7c1e1cec46a",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/41ccdfdd86f4aeac87c18d20eadc68a4b05e2e": "7fa65abac54879c92234ae256cd51f85",
".git/objects/ff/09f8ae109a4add1655389fa4146ec2c5cc4e9c": "e5093bdee8991a1fa4aead731364176d",
".git/objects/ff/b0230c7679c58595e6c5656a051d8a9c8a4e11": "5db95a3980cda6c4b699530b53765d6c",
".git/refs/heads/main": "daa368c1080414a5cceb9ce5b8ca35ac",
".git/refs/remotes/origin/main": "daa368c1080414a5cceb9ce5b8ca35ac",
"assets/AssetManifest.bin": "d8a26d30244aea54b1d0e897b6f0958f",
"assets/AssetManifest.bin.json": "9dd7491e5d7ac2595c429ad076b03350",
"assets/AssetManifest.json": "8112fdcae934b9e0751c2f518fdad44b",
"assets/assets/images/about-us-bg.webp": "d0f337a472141bda986940f44e4db0f6",
"assets/assets/images/about_living_img.jpg": "5e029bc431ef13b1069ffb71c9c153a6",
"assets/assets/images/about_us_about_living.jpg": "271f6f488d40bef130da3922d74dc004",
"assets/assets/images/anantha_bhavanam.png": "f913361a40934703600c41d42e0a7779",
"assets/assets/images/bed1.jpg": "b6f077cea45bfd894f00166844e897bc",
"assets/assets/images/bed2.jpg": "adac32b385984d1e70f5cdc580e396f5",
"assets/assets/images/bed_multi.jpg": "a2b175dd493d4514b55cae5fc85a29e5",
"assets/assets/images/bhavan_img.png": "c000eab07cbaea4528f1dea5c3aaceab",
"assets/assets/images/facilities_banner.jpg": "a8191caaf6fde3609e43d74facd38954",
"assets/assets/images/faq_img-1250x939_MpQ4.jpg": "a194832d86edc9c2c4b7ba4fee18f25e",
"assets/assets/images/Gallery.png": "941792e7c8ba8456b65d2373f460b618",
"assets/assets/images/hero.jpeg": "b447eeac1e855b248126438af9e5bf00",
"assets/assets/images/hero_bg.jpeg": "c9c43910c79f646ec382dd8a19f59913",
"assets/assets/images/hero_bg2.jpeg": "e6af8fc6d1214c64470af3386d037928",
"assets/assets/images/meal.png": "44586d5a1c16972575ab78edb0adb630",
"assets/assets/images/nurse1.jpg": "8e26e736e0ef5db0127e5ab371dfd5d0",
"assets/assets/images/nurse2.jpg": "893b0aeb6f855b22dd17c7b4e5258901",
"assets/assets/images/nurse3.jpg": "867ef3160764fa4ae51739d879c43299",
"assets/assets/images/nurse4.jpg": "196e7c9d8590fd12667899193b546f7a",
"assets/assets/images/raveendran_mash_acarlick.png": "82d49203cd3b3df77408b4fd815f2c70",
"assets/assets/svg/beds-pillow-svgrepo-com.svg": "8bbc38ac724b97df36332632e791e820",
"assets/assets/svg/building-svgrepo-com.svg": "a32d3b8789161ae7300c69b133a381e6",
"assets/assets/svg/heart-pulse-svgrepo-com.svg": "155964243a53012885f763bfe30b8d5f",
"assets/assets/svg/medicine-svgrepo-com.svg": "08d921607a1b0c5fe3efd909f59fe375",
"assets/assets/svg/nurse-svgrepo-com.svg": "189ed854181d2e6a587826edcd02b9a6",
"assets/assets/svg/sunrise-svgrepo-com.svg": "083e476568fc7be7b8500818a76c91d6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d9cb5274217dcaac304d7435f9a07b4c",
"assets/NOTICES": "23cd0f3690930d7be66302d97de8e805",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "cff125d71d2f9bea714d6204b540a1e0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "46cee92040e5f34779dd0a654c81e26c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "f913361a40934703600c41d42e0a7779",
"index.html": "634bd008ef382b4d58f2e29bb82cf096",
"/": "634bd008ef382b4d58f2e29bb82cf096",
"main.dart.js": "7a545e4b5bad0a0324a00e2d66f1dba1",
"manifest.json": "0b63fe196751d340419bf3f1da4a38ae",
"README.md": "07770be89fa69a8f066e1e01069cb596",
"version.json": "ab7ffdbf702ef0a159f8c50d7df6fc52"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
