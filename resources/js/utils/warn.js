const warnxss = () => {
    console.clear();
    console.info(
        "%cStop!",
        "font-weight: bold; font-size: 55px; color: red; text-shadow: 1px 1px #000000"
    );
    console.info(
        '%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to "hack" a website or admin account, it is a scam and will give them access to yours!. Learn more about "self-xss" at https://en.wikipedia.org/wiki/Self-XSS',
        "font-size: 17px; margin-bottom: 10px"
    );
    console.info("%cDon't be a Script Kiddie!", "font-size: 16px;");
};

exports.warnxss = warnxss;
