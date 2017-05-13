## Wine tracking app

So I like making wine, and often it is useful to
track how the fermentation process is going. I
originally used excel, but I can't stand 
excel/libre office/google sheets so it was time
for a new project. 

# The backend

The backend of this app is written in nodejs with express 4. 
Importantly it utalises `async/await` and mongoose + bluebird promises
to interface with mongodb.

# The frontend

The frontend is served with `express.static`. It is written in vue.js,
and uses a couple of libraries for chart.js and a material design look.

## So how do I get a local version up and running?

Start by cd'ing into the pub directory. Once there you will need to run
`npm install` and then `npm run build`, this will install all the necessary
vuejs libraries and then build the frontend, which will be placed in dist
(don't touch dist). Once that is done you can cd back into the main directory
and run `docker-compose build` and then `docker-compose up`. Your local version
will now be running at http://127.0.0.1:3000.

NOTE: for local development it is best to use `npm run dev` for editint the front
end, instead of `npm run build`. To do so follow the above instructions, but substitute
`npm run build` with `npm run dev`, this will launch a new tab in your web browser on
port 8080 where you will be able to see all live changes to your front end. Another thing
you should do for local development is to change the string in `pub/src/components/api.js`
to point to your local development URL, http://127.0.0.1:3000. This way you are not
making API calls to the public server.


