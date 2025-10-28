const admin = require('firebase-admin');
const serviceAccount = require('./service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uid = 'o7g3ycvCTUO4MbI53fWURPm3Ljw1';

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log(`✅ Thành công! Đã cấp quyền admin cho người dùng có UID: ${uid}`);
    console.log('Từ lần đăng nhập tiếp theo, người dùng này sẽ có quyền admin.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Lỗi khi cấp quyền admin:', error);
    process.exit(1);
  });