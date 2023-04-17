const admin = require('firebase-admin');
async function main(){
    const serviceAccount = require('./notify-jq0ldl-firebase-adminsdk-wdces-a908694af9.json');
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    try {
        await fetch();
    } catch (e) {
        console.error(e);
    }
}
main().catch(console.error);
function fetch(){
    const db = admin.firestore();
    db.collection('userlogs').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
        });
    })
    .catch((error) => {
        console.log('Info not found:', error);
    });
}