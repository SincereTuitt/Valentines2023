//array of attention gif links
const attentionGifArray = ['https://media.tenor.com/bAoeFW8xVs8AAAAM/yay-attention.gif', 'https://media.tenor.com/Fq20bMoMG7QAAAAM/the-office-attention.gif', 'https://media.tenor.com/AleRU5nZSasAAAAM/attention-notice-me.gif', 'https://media.tenor.com/4K76syQZNkkAAAAM/nathantriska-ana-mrstriska.gif', 'https://media.tenor.com/2fXX4C7i4KgAAAAM/pay-attention-to-me-focus.gif', 'https://media.tenor.com/XktnGcrxVUkAAAAM/attention-attention-please.gif', 'https://media.tenor.com/QdQ4L8F1Ly8AAAAM/attenti-attention-seeking.gif']
//array of links to cute animals
const animalsInLoveArray = ['https://th.bing.com/th/id/R.1aa14517f17e435c4de64326c5c0878f?rik=eHz8kBf2M9iDrw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-b7LbEVuL5Bs%2fTluD_T9M5vI%2fAAAAAAAABA0%2fuNR6gfJx6ck%2fs1600%2fanimals%2bkissing%2b014.jpg&ehk=HJnb7nMLQHztgVguodcK%2flCrXffFwPzLbZ2GM8WQ4Hk%3d&risl=&pid=ImgRaw&r=0', 'https://th.bing.com/th/id/OIP.96eDW9livoU3zPGvoYh5NgHaGL?w=232&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://th.bing.com/th/id/OIP.ZiCnYLxeT3JlSGRKnnwIhAHaEo?w=311&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://th.bing.com/th/id/OIP.0Uuf2b8_A3Nxa8hA56xaoQHaJ4?w=146&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://th.bing.com/th/id/OIP.s2tWaZf89RtoaIxx_1isvAHaEx?w=302&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://th.bing.com/th/id/OIP.5O0oz5v8tz9NxZPySkBv3gHaE7?w=291&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://th.bing.com/th/id/OIP.U9ymMIVyRx_vM8so2EiP2wHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://th.bing.com/th/id/OIP.hy8sTzywYYeCUVyCK_9NaAHaFu?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://www.awesomeinventions.com/wp-content/uploads/2016/02/kiss-kitten.jpg', 'https://th.bing.com/th/id/R.f51dfcabef8173816378a47951a3d4c2?rik=ShifSd2hpSitBA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-lOQI0QJANiM%2fTluELNOKhsI%2fAAAAAAAABBA%2fM6lq8UR7PkY%2fs1600%2fanimals%2bkissing%2b017.jpg&ehk=DTxHj3flh8HdEKIiFvb26PXgLpdaA0kyytXNAIWmJRM%3d&risl=&pid=ImgRaw&r=0', 'https://th.bing.com/th/id/R.491b3a6a1bf67ff9b22813cc98abbb3d?rik=YQ1Kh5%2fImeLAjg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-vKatf99tuLk%2fVbUN_mjPvqI%2fAAAAAAAAPME%2fWhzZcArcblQ%2fs1600%2flove-among-animals-flikie-wallpapers.jpg&ehk=34yfHhurH0mW45c9BVwga85Ff9ab%2bKxNbWynMIfheHE%3d&risl=&pid=ImgRaw&r=0', 'https://th.bing.com/th/id/OIP.a95nUKbPvt-Wxgh_0W6_sQHaFl?pid=ImgDet&rs=1', 'https://th.bing.com/th/id/R.da95b78256be2f5717b5098ed79ec741?rik=w%2f6ED%2bz7pIK8Qw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-nrywBSkma-M%2fTzpHBaJpBEI%2fAAAAAAAACO0%2fGVy6lNVpSkA%2fs1600%2fanimal_love_pictures_cute_nature_12.jpg&ehk=%2bmb3nllQ%2fgLsabvXteHtWY25l7l0GgAJ4Z6DBhV14E4%3d&risl=&pid=ImgRaw&r=0', 'https://th.bing.com/th/id/OIP.skUAdPYs-whhG7S7-v8eRQHaGd?pid=ImgDet&rs=1', 'https://th.bing.com/th/id/R.26b0e057fda5e9b7ffa77266a6e9a3e5?rik=WPuyGdHBHAq8Gw&pid=ImgRaw&r=0', 'https://i.pinimg.com/736x/5b/5f/a8/5b5fa837dff49130c816eb2276b6e2b9--cute-bunny-a-bunny.jpg', 'https://wallpapershome.com/images/wallpapers/swan-1080x1920-couple-lake-cute-animals-love-4510.jpg']

function notifySincere () {
    let subjectBody = prompt ('Send Sincere a message?')
    window.location.href = "mailto:KayleenNeedsAttention@gmail.com?subject=Give Kayleen Attention!&body=" + subjectBody
    alert("Sincere has been notified.")
    const max = attentionGifArray.length
    let randomIndex = Math.floor(max * Math.random())
    document.getElementById('attentionImage').setAttribute('src', attentionGifArray[randomIndex])
}

function generateAnimal () {
    const max = animalsInLoveArray.length
    let randomIndex = Math.floor(max * Math.random())
    document.getElementById('animalImages').setAttribute('src', animalsInLoveArray[randomIndex])

}
