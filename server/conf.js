const pandocPath = process.env.PANDOC_PATH || 'pandoc';
const wkhtmltopdfPath = process.env.WKHTMLTOPDF_PATH || 'wkhtmltopdf';
const userBucketName = process.env.USER_BUCKET_NAME || 'markedit-users';
const paypalUri = process.env.PAYPAL_URI || 'https://www.paypal.com/cgi-bin/webscr';
const paypalReceiverEmail = process.env.PAYPAL_RECEIVER_EMAIL;

const dropboxAppKey = process.env.DROPBOX_APP_KEY;
const dropboxAppKeyFull = process.env.DROPBOX_APP_KEY_FULL;
const githubClientId = '39e84eb8e8467cc5bf05';
const githubClientSecret = 'e14d2180dce28d416cf0eec6f935e5967c41b640';
const googleClientId = '422302864136-ucs0p5bp50a4l097ku58bkonj6khqj03.apps.googleusercontent.com';
const googleApiKey = 'AIzaSyDaKkC6vGoOHz037PZvTzkNe6nuJ17AB1A';
const wordpressClientId = process.env.WORDPRESS_CLIENT_ID;

exports.values = {
  pandocPath,
  wkhtmltopdfPath,
  userBucketName,
  paypalUri,
  paypalReceiverEmail,
  dropboxAppKey,
  dropboxAppKeyFull,
  githubClientId,
  githubClientSecret,
  googleClientId,
  googleApiKey,
  wordpressClientId,
};

exports.publicValues = {
  dropboxAppKey,
  dropboxAppKeyFull,
  githubClientId,
  googleClientId,
  googleApiKey,
  wordpressClientId,
  allowSponsorship: !!paypalReceiverEmail,
};
