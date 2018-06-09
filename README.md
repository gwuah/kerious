# kerious
A minimal version of curious cat. 

# How to run it
1. Create an env file in the root of the project folder</li>
2. Add the following keys : 
   * `MONGODB_URI=link to your production database`
   * `PORT=5000`
   * `LOCAL_MONGO_URI=mongodb://127.0.0.1:27017/Kerious`
   * `MODE=development`
   * `SESSION_SECRET=pantalong`
   * `SESSION_SECRET_ADMIN=junkatown`
   * `ANON_ID=5b1b1119859b4a20986b3992`
3. Make sure you have a local mongodb instance running</li>
4. Run `nodemon index.js` or `node index.js`
