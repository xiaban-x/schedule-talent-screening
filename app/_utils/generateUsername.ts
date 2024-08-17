const words: string[] = [
    'Shadow', 'Raven', 'Blaze', 'Phoenix', 'Mystic',
    'Eclipse', 'Zephyr', 'Noir', 'Frost', 'Storm',
    'Vortex', 'Nebula', 'Seraph', 'Viper', 'Draco'
];

const generateUsername = ():string =>  {
    const minLen = 5;
    const maxLen = 11;

    // Step 1: Generate an English word
    let username: string = words[Math.floor(Math.random() * words.length)];
    const usernameLength = username.length;

    // Step 2: Calculate how many Chinese characters we can add
    const remainingLength = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen - usernameLength;

    // Step 3: Add Chinese characters at random positions (before or after the word)
    let finalUsername:string = '';
    for (let i = 0; i < remainingLength; i++) {
        if (Math.random() > 0.5) {
            finalUsername += '你好世界和平美丽梦想星空希望未来'.charAt(Math.floor(Math.random() * '你好世界和平美丽梦想星空希望未来'.length));
        }
    }

    // Randomly decide to insert Chinese characters before or after the English word
    if (Math.random() > 0.5) {
        finalUsername = finalUsername + username;
    } else {
        finalUsername = username + finalUsername;
    }

    return finalUsername;
}

export default generateUsername;