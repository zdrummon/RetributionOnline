var count = 0;

function pingCount() {
    count = count + 1;
    console.log('Chelsey has a cute back-end ping #' + count);
}

module.exports.pingCount = pingCount;
