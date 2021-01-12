// Right now:
const promoCharacter = 'Ganyu'
const promoWeapons = ['Amos\' Bow', 'Skyward Pride']
const promoWeaponColors = ['#c9c3d9', '#4bd7de']
const urls = {
    'character event wish': 'https://genshin-impact.fandom.com/wiki/Adrift_in_the_Harbor',
    'weapon event wish': 'https://genshin-impact.fandom.com/wiki/Epitome_Invocation/2021-01-12',
    'permanent wish': 'https://genshin-impact.fandom.com/wiki/Wanderlust_Invocation'
}

// Set default region
const utcOffset = new Date().getTimezoneOffset() * -60
document.getElementById('region').value = [-18000, 3600, 28800].reduce((a, b) => {
    return Math.abs(b - utcOffset) < Math.abs(a - utcOffset) ? b : a;
}).toString()

// Return weapon banners by start time and promotional banner
function getWeaponBanners(offset) {
    offset = parseInt(offset)
    return [
        {
            start: 1601251200,
            promo: ['amos\' bow', 'aquila favonia']
        },
        {
            start: 1603216800,
            promo: ['lost prayer to the sacred winds', 'wolf\'s gravestone']
        },
        {
            start: 1605052800 + offset,
            promo: ['skyward harp', 'memory of dust']
        },
        {
            start: 1606845600,
            promo: ['vortex vanquisher', 'the unforged']
        },
        {
            start: 1608681600 + offset,
            promo: ['skyward atlas', 'summit shaper']
        },
        {
            start: 1578844800,
            promo: ['amos\' bow', 'skyward pride']
        }
    ]
}

// Character event banner
function characterBanner(guarantee) {

    // 100% to get promo character
    if(guarantee) {
        return {
            datasets: [{
                data: [100],
                backgroundColor: ['#000000']
            }],
            labels: [promoCharacter]
        }

    // 50% to get promo character
    } else {
        return {
            datasets: [{
                data: [10, 10, 10, 10, 10, 50],
                backgroundColor: ['#ff5555', '#95fffa', '#50abff', '#c179ff', '#75ffaf', '#000000']
            }],
            labels: ['Diluc', 'Qiqi', 'Mona', 'Keqing', 'Jean', promoCharacter]
        }
    }
}

// Weapon event banner
function weaponBanner(guarantee) {

    // 100% chance to get promo weapon
    if(guarantee) {
        return {
            datasets: [{
                data: [50, 50],
                backgroundColor: ['#5bc5cd', '#efe7bb']
            }],
            labels: promoWeapons
        }

    // 75% chance to get promo weapon
    } else {

        let weapons = ['Amos\' Bow', 'Skyward Harp', 'Lost Prayer to the Sacred Winds', 'Skyward Atlas', 'Wolf\'s Gravestone', 'Skyward Pride', 'Primordial Jade Winged-Spear', 'Skyward Spine', 'Summit Shaper', 'Aquila Favonia', 'Skyward Blade']
        let backgroundColors = ['#c9c3d9', '#d7e2dd', '#9db3be', '#5bc5cd', '#2e211f', '#4bd7de', '#4f503a', '#e8d7c4', '#ddd5ae', '#d8cec9', '#5bc5cd']

        // Rearrange weapon pool based on promo weapons
        promoWeapons.forEach(x => {
            const index = weapons.indexOf(x)
            if(index > -1) {
                weapons.splice(index, 1)
                backgroundColors.splice(index, 1)
            }
        })
        weapons = weapons.concat(promoWeapons)
        backgroundColors = backgroundColors.concat(promoWeaponColors)

        return {
            datasets: [{
                data: [25/9, 25/9, 25/9, 25/9, 25/9, 25/9, 25/9, 25/9, 25/9, 37.5, 37.5],
                backgroundColor: backgroundColors
            }],
            labels: weapons
        }
    }
}

// Permanent banner
const permanentBanner = {
    datasets: [{
        data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 10, 10, 10],
        backgroundColor: ['#c9c3d9', '#d7e2dd', '#9db3be', '#2e211f', '#4bd7de', '#4f503a', '#e8d7c4', '#d8cec9', '#eddac7', '#5bc5cd', '#ff5555', '#95fffa', '#50abff', '#c179ff', '#75ffaf']
    }],
    labels: ['Amos\' Bow', 'Skyward Harp', 'Lost Prayer to the Sacred Winds', 'Wolf\'s Gravestone', 'Skyward Pride', 'Primordial Jade Winged-Spear', 'Skyward Spine', 'Aquila Favonia', 'Skyward Blade', 'Skyward Atlas', 'Diluc', 'Qiqi', 'Mona', 'Keqing', 'Jean']
}