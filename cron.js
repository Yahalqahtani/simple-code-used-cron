const cron = require('node-cron');

// set start from 1
let currentImageNum = 1;

// start
// */3 * * * * * mean every 3 seconds

// simple code print imge url + 1 every 3 seconds
cron.schedule('*/3 * * * * *', () => {
    // Construct image URL
    const imageUrl = `img${currentImageNum}.png`;

    // to see the result
    console.log(imageUrl);

    // Increment current number
    currentImageNum += 1;

    // If current image number is greater than 6, reset to 1
    if (currentImageNum > 6) {
        currentImageNum = 1;
    }
});
